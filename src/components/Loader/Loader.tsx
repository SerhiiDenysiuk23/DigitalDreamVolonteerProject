import React from "react";
import style from "./Loader.module.scss";
import Loader from "../../elements/Loader/Loader";

const BigLoader = () => {
  return (
    <div className={style.loader}>
      <Loader />
    </div>
  );
};

export default BigLoader;
