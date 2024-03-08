import Search from "@/app/ui/dashboard/search/search"
import style from "@/app/ui/dashboard/user/user.module.css"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
export default function Users(placeholder: any){
    return(
    <div className={style.container}>
        <div className={style.top}>
            <Search placeholder="Buscar usuario..."/>
<Link href="/dashboard/users/add">
            <button className={style.addButton}>Agregar Nuevo</button>
            </Link>
        </div>
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Rol</th>
                    <th>Status</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                   <td><div className={style.user}>
                    <Image src="/noavatar.png" alt="" width={40} height={40} className={style.userImage}/>Juanito Peralta P.
                     </div>
                     </td>                     
                    <td>juanitopera@gmail.com</td>
                    <td>Admin</td>
                    <td><span className={`${style.status} ${style.active}`}>Activo</span></td>
                    <td>
                        <div className={style.buttons}>
                        <Link href="/dashboard/user/edit">
                            <button className={`${style.button} ${style.editButton}`}>Editar</button>
                        </Link>
                        <button className={`${style.button} ${style.deleteButton}`}>Borrar</button>
                        </div>
                    </td>
                </tr>
            </tbody>

        </table>
        <Pagination/>

    </div>)
}