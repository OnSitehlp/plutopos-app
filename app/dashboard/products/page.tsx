import Search from "@/app/ui/dashboard/search/search"
import style from "@/app/ui/dashboard/products/products.module.css"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
export default function Products(placeholder: any){
    return(
    <div className={style.container}>
        <div className={style.top}>
            <Search placeholder="Buscar producto..."/>
<Link href="/dashboard/products/add">
            <button className={style.addButton}>Agregar Nuevo</button>
            </Link>
        </div>
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Descipción</th>
                    <th>Um</th>
                    <th>Precio $</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                   <td><div className={style.product}>
                    <Image src="/product.png" alt="" width={30} height={30} className={style.productImage}/>7805000322441
                     </div>
                     </td>                     
                    <td>MAYONESA 900GR HELMANS</td>
                    <td>CU</td>
                    <td className={style.number}><span className={`${style.status} ${style.active}`}>4.090</span></td>
                    <td className={style.number}>1.522</td>
                    <td>
                        <div className={style.buttons}>
                        <Link href="/dashboard/product/edit">
                            <button className={`${style.button} ${style.editButton}`}>Editar</button>
                        </Link>
                        <button className={`${style.button} ${style.deleteButton}`}>Borrar</button>
                        </div>
                    </td>
                </tr>
                <tr>
                   <td><div className={style.product}>
                    <Image src="/product.png" alt="" width={30} height={30} className={style.productImage}/>7801505000495
                     </div>
                     </td>                     
                    <td>AZUCAR 1KG</td>
                    <td>CU</td>
                    <td className={style.number}><span className={`${style.status} ${style.active}`}>1.250</span></td>
                    <td className={style.number}>6.280</td>
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

    </div>)}