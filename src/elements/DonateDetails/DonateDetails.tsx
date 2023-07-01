import React from "react";

import style from "./DonateDetails.module.scss";
import { FaShieldAlt, FaLightbulb, FaPalette } from "react-icons/fa";
import { MdOutlineHomeMax } from "react-icons/md";
import DonateButton from "../DonateButton/DonateButton";

const DonateDetails = () => {
  return (
    <div className={style.wrapperDetails}>
      <div className={style.wrapperList}>
        <div className={style.wrapperHeaderDetails}>
          <h4 className={style.headerDetails}>The funds will be directed to</h4>
        </div>
        <div className={style.supportList}>
          <div className={style.listItem}>
            <i>
              <img src="/assets/icons/donate/protection.png" alt="" />
            </i>
            <p>
              Protection and preservation of cultural values ​​that injured,
              damaged or destroyed as a result fighting
            </p>
          </div>
          <div className={style.listItem}>
            <i>
              <img src="/assets/icons/donate/artisr.png" alt="" />
            </i>
            <p>
              Support for the activities of
              <br />
              cultural and artistic institutions, young talents and new trends
            </p>
          </div>
          <div className={style.listItem}>
            <i>
              <img src="/assets/icons/donate/shield.png" alt="" />
            </i>
            <p>
              Support for creative industries, development of modern
              technologies, digital implements
            </p>
          </div>
          <div className={style.listItem}>
            <i>
              <img src="/assets/icons/donate/tv.png" alt="" />
            </i>
            <p>
              Support for television
              <br />
              and radio broadcasting, other
              <br />
              media
            </p>
          </div>
        </div>
      </div>
      <div className={style.wrapperRestoration}>
        <div className={style.restoration}>
          <h4>You can help in restoration of these cultural treasures</h4>
        </div>
        <DonateButton />
      </div>
    </div>
  );
};

export default DonateDetails;
