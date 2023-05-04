import React, { useContext, useState, useEffect, useRef } from "react";
import style from "./BannerBackground.module.scss";
import { Context } from "./Context";
import gsap from "gsap";

const BannerBackground = () => {
  const state = useContext(Context);
  const [girlImg, setGirlImg] = useState(state.girlImages);
  const [landlImg, setLandImg] = useState(state.girlImages);

  const cloudsContainerRef = useRef<HTMLDivElement>(null);
  const cloudsContainerRef2 = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (cloudsContainerRef2.current) {
      gsap.from(cloudsContainerRef2.current.children, {
        opacity: 0,
        scale: 0,
        ease: "elastic.out(1.2, 0.3)",
        duration: 2,
        delay:1
      });
    }
  }, []);

  useEffect(() => {
    if (cloudsContainerRef.current) {
      gsap.from(cloudsContainerRef.current.children, {
        opacity: 0,
        x: 100,
        duration: 1,
        stagger: 0.5,
      });
    }
  }, []);
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
        <div ref={cloudsContainerRef2}>
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
        <div ref={cloudsContainerRef}>
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
