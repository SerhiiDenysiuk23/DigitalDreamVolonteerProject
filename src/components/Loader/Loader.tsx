import React from 'react'
import style from "./Loader.module.scss"

const Loader = () => {
  return (
    <div className={style.loader}>
      <img src="/assets/loader.svg" alt="" />
    </div>
  )
}

export default Loader
