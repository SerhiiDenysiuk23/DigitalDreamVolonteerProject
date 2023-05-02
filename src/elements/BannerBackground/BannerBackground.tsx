import React from "react";
import style from "./BannerBackground.module.scss";

const BannerBackground = () => {
  const landscape = {
    backgroundImage: 'url("/assets/bannerBack.jpg")',
  };
  const girlImg = {
    backgroundImage: 'url("/assets/girl/girl1.png")',
  };
  
  return (
    <div className={style.bannerBackground}>
      <div className={style.landscape} style={landscape}></div>
      <div className={style.girl} style={girlImg}>
        <div className={`${style.cloudLittle} ${style.clouds}`}>
            <img src="/assets/Clouds/cloud1of3.png" alt="" />
        </div>
        <div className={`${style.cloudMiddle} ${style.clouds}`}>
            <img src="/assets/Clouds/cloud2of3.png" alt="" />
        </div>
        <div className={`${style.cloudLarge} ${style.clouds}`}>
            <img src="/assets/Clouds/cloud3of3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerBackground;
