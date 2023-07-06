import React from "react";
import style from "./DonateButton.module.scss";
// import { PiArrowDownRightBold } from "react-icons";

const DonateButton = () => {
  return (
    <>
      <div className={style.wrapperButton}>
        <div className={style.buttonHeart}>
          <img
            className={style.heartFlag}
            src="/assets/icons/flag.svg"
            alt=""
          />
          <h4>DONATE</h4>
        </div>
        <div className={style.buttonLink}>
          {/*<PiArrowDownRightBold className={style.arrow} />*/}
          <span>→</span>
        </div>
      </div>
    </>
  );
};

export default DonateButton;
