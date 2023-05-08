import React from "react";

import style from "./DonateDetails.module.scss";
import { FaShieldAlt, FaLightbulb, FaPalette } from "react-icons/fa";
import { MdOutlineHomeMax } from "react-icons/md";

const DonateDetails = () => {
  return (
    <div className={style.wrapperDetails}>
      <div className={style.headerDetails}>
        <h4>The funds will be directed to</h4>
      </div>
      <div className={style.supportList}>
        <div className={style.listItem}>
          <i>
            <FaShieldAlt />
          </i>
          <p>
            Protection and preservation of cultural values ​​that injured,
            damaged or destroyed as a result fighting
          </p>
        </div>
        <div className={style.listItem}>
          <i>
            <FaPalette />
          </i>
          <p>
            Support for the activities of cultural and artistic institutions
          </p>
        </div>
        <div className={style.listItem}>
          <i>
            <FaLightbulb />
          </i>
          <p>Support for creative industries</p>
        </div>
        <div className={style.listItem}>
          <i>
            <MdOutlineHomeMax />
          </i>
          <p>Support for television and radio broadcasting</p>
        </div>
      </div>
    </div>
  );
};

export default DonateDetails;
