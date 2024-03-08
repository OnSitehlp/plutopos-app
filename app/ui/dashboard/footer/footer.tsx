import { MdCopyright } from "react-icons/md"
import style from "./footer.module.css"
export default function Footer(){
    return (<div className={style.container}>
        <div className={style.logo}>PlutoPos</div>
        <div className={style.text}><span><MdCopyright/></span> Todos los derechos reservados</div>
        </div>)
}