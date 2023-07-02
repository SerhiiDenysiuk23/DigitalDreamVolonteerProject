import React from "react";
import style from "./DonateSectionSecond.module.scss";

import DonateShevchenko from "../../elements/DonateShevchenko/DonateShevchenko";
import DonateCulture from "../../elements/DonateCulture/DonateCulture";

const DonateSectionSecond = () => {
  return (
    <div className={style.donateSectionSecond}>
      <div className={style.tarasShevchenkoWrapper}>
        <img
          src="/assets/portret-1.png"
          alt=""
          className={style.objectDamage}
        />
      </div>
      <DonateCulture />
      <div className={style.tarasShevchenkoWrapper}>
        <img
          src="/assets/portret-2.png"
          alt=""
          className={style.objectDamage}
        />
      </div>
    </div>
  );
};

export default DonateSectionSecond;
