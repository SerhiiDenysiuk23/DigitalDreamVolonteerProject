import React from "react";
import style from "./HeaderLogo.module.scss";

interface HeaderLogoProps {
  onClick: () => void;
}
const HeaderLogo: React.FC<HeaderLogoProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={style.header__logo}>
      <div className={style["logo-img"]}>
        <img src="/assets/logo.svg" alt="" />
        <span>UA DNA</span>
      </div>
      <p>
        Web-project about Ukrainian culture that will make you fall in live with
        Ukraine
      </p>
    </div>
  );
};

export default HeaderLogo;
