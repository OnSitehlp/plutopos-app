import { MdSearch } from "react-icons/md"
import style from "./search.module.css"
export default  function Search({placeholder}:any){
return(
    <div className={style.container}>
<MdSearch/>
<input type="text" placeholder={placeholder} className={style.input}/>
    </div>
)
}