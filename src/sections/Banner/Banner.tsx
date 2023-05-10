import React from "react";
import style from "./Banner.module.scss";
import BurgerMenu from "../../elements/BurgerMenu/BurgerMenu";
import HeaderLogo from "../../elements/HeaderLogo/HeaderLogo";
import BannerDescription from "../../elements/BannerDescription/BannerDescription";
import BannerBackground from "../../elements/BannerBackground/BannerBackground";

const Banner = () => {
  return (
    <section className={`${style.banner} main-block`}>
      <header className={style.banner__header}>
        <HeaderLogo />
        <BurgerMenu />
      </header>
      <BannerBackground />
      <BannerDescription />
    </section>
  );
};

export default Banner;
