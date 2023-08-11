import React from "react";
import style from "./DonateSection.module.scss";
import DonateBoy from "../../elements/DonateBoy/DonateBoy";
import DonateInfo from "../../elements/DonateInfoBlock/DonateInfoBlock";

const DonateSection = () => {
  return (
    <section
      style={{
        background: ` linear-gradient(to right, transparent, 5%, #ffffff), url('/assets/backgroundDonateSection.png')`,
      }}
      className={`${style.donateSection} main-block`}
    >
      <DonateBoy />
      <DonateInfo />
    </section>
  );
};
export default DonateSection;
