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
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  // toggle logo text for small screens
  const toggleLogoText = () => {
    setIsOpen(!isOpen);
  };

  // toggle burger function
  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  // first appearing of logo text for small screens
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

  // hides header on down scroll and shows on up scroll
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledUp = prevScrollPos < currentScrollPos;
      setIsScrolled(isScrolledUp);
      prevScrollPos = currentScrollPos;

      const header = document.querySelector('header');

      if (isBurgerOpen) {
        header?.classList.remove('scrolled');
        return;
      }
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
  }, [isBurgerOpen]);

  // Update the body class based on the burger state
  // it prevents scroll when burger menu is opened
  useEffect(() => {
    const body = document.body;

    if (isBurgerOpen) {
      body.classList.add('lock');
    } else {
      body.classList.remove('lock');
    }

    return () => {
      // Clean up the body class when the component unmounts
      body.classList.remove('lock');
    };
  }, [isBurgerOpen]);

  return (
    <section className={`${style.banner}  main-block`}>
      <div className={style.banner__container}>
        <div className={`${style.banner__gradient} ${isScrolled ? 'scrolled' : ''}`}></div>
        <header className={`${style.banner__header}`}>
          <HeaderLogo onClick={toggleLogoText} />
          <BurgerMenu isBurgerOpen={isBurgerOpen} toggleBurgerMenu={toggleBurgerMenu} />
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
