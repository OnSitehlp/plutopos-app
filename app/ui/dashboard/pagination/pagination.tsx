import style from "./pagination.module.css"
export default function Pagination(){
    return(
        <div className={style.container}>
            <button className={style.button}>Prev</button>
            <button className={style.button}>1</button>
            <button className={style.button}>2</button>
            <button className={style.button}>3</button>
            <button className={style.button}>4</button>
            <button className={style.button}>5</button>
            <button className={style.button}>Next</button>
        </div>
    )
}