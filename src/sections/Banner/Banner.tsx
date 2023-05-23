import React, { useState, useEffect } from 'react';
import style from './Banner.module.scss';
import BurgerMenu from '../../elements/BurgerMenu/BurgerMenu';
import HeaderLogo from '../../elements/HeaderLogo/HeaderLogo';
import BannerDescription from '../../elements/BannerDescription/BannerDescription';
import BannerBackground from '../../elements/BannerBackground/BannerBackground';
import MobileLogoText from '../../elements/MobileLogoText/MobileLogoText';

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleLogoText = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timeoutText1 = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    const timeoutText2 = setTimeout(() => {
      setIsOpen(false);
    }, 6000);

    return () => {
      clearTimeout(timeoutText2);
    };
  }, []);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledUp = prevScrollPos < currentScrollPos;
      setIsScrolled(isScrolledUp);
      prevScrollPos = currentScrollPos;

      const header = document.querySelector('header');
      if (isScrolledUp) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`${style.banner}  main-block`}>
      <div className={style.banner__container}>
        <header className={`${style.banner__header} ${isScrolled ? 'scrolled' : ''}`}>
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
