import React from "react";
import style from "./MobileLogoText.module.scss";

interface MobileLogoTextProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileLogoText: React.FC<MobileLogoTextProps> = ({ isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${style.text} ${isOpen ? "" : style.hidden}`}
    >
      <p>
        Web-project about Ukrainian culture that will make you fall in love with
        Ukraine
      </p>
    </div>
  );
};

export default MobileLogoText;
