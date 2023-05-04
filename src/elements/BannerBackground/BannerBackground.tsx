import React, { useContext, useState } from "react";
import style from "./BannerBackground.module.scss";
import { Context } from "./Context";

const BannerBackground = () => {
  const state = useContext(Context);
  const [girlImg, setGirlImg] = useState(state.girlImages);
  const [landlImg, setLandImg] = useState(state.girlImages);

  const addOpacity = (n: number): void => {
    const updatedGirl = [...state.girlImages];
    const updatedlandscape = [...state.backgroundPictures];
    updatedGirl[n].opacity = 1;
    updatedlandscape[n].opacity = 1;
    setGirlImg(updatedGirl);
    setLandImg(updatedlandscape);
  };

  const removeOpacity = (n: number): void => {
    const updatedGirl = [...state.girlImages];
    const updatedlandscape = [...state.backgroundPictures];
    updatedGirl[n].opacity = 0;
    updatedlandscape[n].opacity = 0;
    setGirlImg(updatedGirl);
    setLandImg(updatedlandscape);
  };
  return (
    <div className={style.bannerBackground}>
      <div className={style.landscapes}>
        {state.backgroundPictures.map((img) => (
          <div
            key={img.id}
            className={`${img.className} ${style.landscape}`}
            style={{
              backgroundImage: `url(${img.src})`,
              opacity: img.opacity,
            }}
          ></div>
        ))}
      </div>
      <div className={style.girl}>
        {state.girlImages.map((girl) => (
          <div
            key={girl.id}
            className={`${girl.className} ${style.hover__girl}`}
            style={{
              backgroundImage: `url(${girl.src})`,
              opacity: girl.opacity,
            }}
          ></div>
        ))}
        <div>
          {state.wreathOfGirl.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onMouseEnter={() => addOpacity(item.id)}
              onMouseLeave={() => removeOpacity(item.id)}
              className={`${style.icons} ${style[item.className]}`}
            >
              <img src={item.src} alt={item.className} />
            </a>
          ))}
        </div>
        <div className="">
          {state.clouds.map((cloud) => (
            <div key={cloud.id} className={`${style[cloud.className]} `}>
              <img src={cloud.src} alt={cloud.className} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerBackground;
