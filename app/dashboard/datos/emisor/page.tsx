import Search from "@/app/ui/dashboard/search/search"
import style from "@/app/ui/dashboard/datos/emisor/emisor.module.css"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
export default function Emisor(placeholder: any){
    return(
    <div className={style.container}>
        <div className={style.top}>
            <Search placeholder="Buscar emisor..."/>
<Link href="/dashboard/datos/emisor/add">
            <button className={style.addButton}>Agregar Nuevo</button>
            </Link>
        </div>
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Rut</th>
                    <th>Nombre</th>
                    <th>Giro</th>
                    <th>Dirección</th>
                    <th>Comuna</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                   <td><div className={style.user}>
                    <Image src="/noavatar.png" alt="" width={40} height={40} className={style.userImage}/>17.852.125-K
                     </div>
                     </td>                     
                    <td>Distribuidora Alto Ramirez Ltda.</td>
                    <td>Supermercado Minorista</td>
                    <td>Los Molles Norte 737</td>
                    <td>Arica</td>
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