import React from "react";
import style from "./Banner.module.scss";
import BurgerMenu from "../../elements/BurgerMenu/BurgerMenu";
import HeaderLogo from "../../elements/HeaderLogo/HeaderLogo";
import BannerDescription from "../../elements/BannerDescription/BannerDescription";
import BannerBackground from "../../elements/BannerBackground/BannerBackground";

const Banner = () => {
  return (
    <section className={`${style.banner} main-block`}>
      <div className={style.banner__container}>
        <header className={style.banner__header}>
          <HeaderLogo />
          <BurgerMenu />
        </header>
        <BannerBackground />
        <div className={style.desktop}>
          <BannerDescription />
        </div>
      </div>
      <div className={style.mobile}>
        <BannerDescription />
      </div>
    </section>
  );
};

export default Banner;
