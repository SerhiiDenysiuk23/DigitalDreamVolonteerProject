import React from "react";
import style from "./HeaderLogo.module.scss";

interface HeaderLogoProps {
  onClick: () => void;
}
const HeaderLogo: React.FC<HeaderLogoProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={style.header__logo}>
      <a href="#home" className={style["logo-img"]}>
        <img src="/assets/logo.svg" alt="" />
        <span>UA DNA</span>
      </a>
      <a href="#home" className={style["logo-img"]}>
        <p>
          Web-project about Ukrainian culture that will make you fall in live
          with Ukraine
        </p>
      </a>
    </div>
  );
};

export default HeaderLogo;
