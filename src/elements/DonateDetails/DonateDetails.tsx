import React from "react";
import style from "./DonateDetails.module.scss";

const DonateDetails = () => {
  return (
    <div className={style.wrapperDetails}>
      <div className={style.headerDetails}>
        <h3>The funds will be directed to</h3>
      </div>
      <div className={style.supportList}>
        <div>
          <i></i>
          <p></p>
        </div>
        <div>
          <i></i>
          <p></p>
        </div>
        <div>
          <i></i>
          <p></p>
        </div>
        <div>
          <i></i>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default DonateDetails;
