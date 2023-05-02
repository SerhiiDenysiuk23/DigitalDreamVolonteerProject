import React from "react";
import style from "./Banner.module.scss";
import BurgerMenu from "../../elements/BurgerMenu/BurgerMenu";
import HeaderLogo from "../../elements/HeaderLogo/HeaderLogo";

const Banner = () => {
  return (
    <section className={style.banner}>
      <header className={style.banner__header}>
        <HeaderLogo />
        <BurgerMenu />
      </header>
    </section>
  );
};

export default Banner;
