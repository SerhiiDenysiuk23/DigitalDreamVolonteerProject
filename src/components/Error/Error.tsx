import style from "./Error.module.scss"

const Error = ()=>{
    const handleRefresh = ()=>{
        window.location.reload()
    }
    return(
        <div className={style.errorContainer}>
         <h4>Щось пішло не так :(</h4>
         <p>Оновіть будь ласка сторінку</p>
         <button  onClick={handleRefresh}>Оновити</button>
        </div>
    )
}

export default Error;