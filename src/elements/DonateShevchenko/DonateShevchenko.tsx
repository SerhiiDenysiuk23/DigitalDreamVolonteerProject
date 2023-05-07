import React from "react";

import style from "./DonateShevchenko.module.scss";

const DonateShevchenko = () => {
  return (
    <div className={style.tarasShevchenkoWrapper}>
      <img src="/assets/tarasShevchenko1.png" alt="" className={style.object} />
      <img
        src="/assets/tarasShevchenko2.png"
        alt=""
        className={style.objectDamage}
      />
    </div>
  );
};

export default DonateShevchenko;
