import React from "react";
import style from "./DonateHeader.module.scss";

const DonateHeader = () => {
  return (
    <div className={style.wrapperDonateHeader}>
      <h1 className={style.donateHeader}>
        MINISTRY OF CULTURE AND INFORMATION POLICY
      </h1>
      <h2 className={style.donateSubheader}>
        Opened multi-currency charity account for cultural support in Ukraine
      </h2>
    </div>
  );
};

export default DonateHeader;
