import React from "react";
import style from "./DonateInfoBlock.module.scss";

import DonateHeader from "../DonateHeader/DonateHeader";
import DonateDetails from "../DonateDetails/DonateDetails";
import DonateButton from "../DonateButton/DonateButton";

const DonateInfo = () => {
  return (
    <div className={style.wrapperDonate}>
      <DonateHeader />
      <DonateDetails />
    </div>
  );
};

export default DonateInfo;
