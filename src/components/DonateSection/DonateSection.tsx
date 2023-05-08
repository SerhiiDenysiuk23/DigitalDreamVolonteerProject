import React from "react";
import style from "./DonateSection.module.scss";
import DonateBoy from "../../elements/DonateBoy/DonateBoy";
import DonateInfo from "../../elements/DonateInfoBlock/DonateInfoBlock";

const DonateSection = () => {
  return (
    <section className={style.donateSection}>
      <DonateBoy />
      <DonateInfo />
    </section>
  );
};
export default DonateSection;
