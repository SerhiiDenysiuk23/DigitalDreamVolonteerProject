import React from "react";
import style from "./DonateSectionSecond.module.scss";

import DonateShevchenko from "../../elements/DonateShevchenko/DonateShevchenko";
import DonateCulture from "../../elements/DonateCulture/DonateCulture";

const DonateSectionSecond = () => {
  return (
    <div className={style.donateSectionSecond}>
      <DonateCulture />
      <DonateShevchenko />
    </div>
  );
};

export default DonateSectionSecond;
