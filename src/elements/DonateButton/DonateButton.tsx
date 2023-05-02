import React from "react";
import style from "./DonateButton.module.scss";

const DonateButton = () => {
  return (
    <div className={style.wrapperButton}>
      <button className={style.buttonDonate}>
        <p>Donate</p>
      </button>
      <p className={style.buttonInfo}>
        You can help in restoration of these cultural treasures
      </p>
    </div>
  );
};

export default DonateButton;
