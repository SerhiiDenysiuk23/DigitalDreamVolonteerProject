import React, { useState, useEffect } from "react";
import style from "./Banner.module.scss";
import BurgerMenu from "../../elements/BurgerMenu/BurgerMenu";
import HeaderLogo from "../../elements/HeaderLogo/HeaderLogo";
import BannerDescription from "../../elements/BannerDescription/BannerDescription";
import BannerBackground from "../../elements/BannerBackground/BannerBackground";
import MobileLogoText from "../../elements/MobileLogoText/MobileLogoText";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleLogoText = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className={`${style.banner} main-block`}>
      <div className={style.banner__container}>
        <header className={style.banner__header}>
          <HeaderLogo onClick={toggleLogoText} />
          <BurgerMenu />
        </header>
        <MobileLogoText isOpen={isOpen} onClick={toggleLogoText} />
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
