import React, { useContext, useState, useEffect } from 'react';
import style from './BannerBackground.module.scss';
import { Context } from './Context';

const BannerBackground = () => {
  const state = useContext(Context);
  const [girlImg, setGirlImg] = useState(state.girlImages);
  const [landlImg, setLandImg] = useState(state.girlImages);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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

  // changes girl & landscape on hover for 1024+ screens
  const handleMouseEnter = (id: number) => {
    if (window.innerWidth >= 1024) {
      addOpacity(id);
    }
  };

  const handleMouseLeave = (id: number) => {
    if (window.innerWidth >= 1024) {
      removeOpacity(id);
    }
  };
  // changes girl & landscape on hover for 1024+ screens

  useEffect(() => {
    // Function to handle the interval logic
    const handleInterval = () => {
      removeOpacity(currentIndex);

      const idx = (prevIndex: number) => {
        let nextIndex = (prevIndex + 1) % 6;
        addOpacity(nextIndex);
        return nextIndex;
      };

      setCurrentIndex(idx(currentIndex));
    };

    // Check if the screen width is less than or equal to 1024 (mobile and tablet screens)
    if (window.innerWidth <= 1024) {
      const interval = setInterval(handleInterval, 7000);

      // Clear the interval when the component unmounts
      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex]);

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
            }}></div>
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
            }}></div>
        ))}
        <div>
          {state.wreathOfGirl.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
              // onMouseEnter={() => addOpacity(item.id)}
              // onMouseLeave={() => removeOpacity(item.id)}
              className={`${style.icons} ${style[item.className]}`}>
              <img src={item.src} alt={item.className} />
            </a>
          ))}
        </div>
        <div className={style.clouds__container}>
          {state.clouds.map((cloud) => (
            <div key={cloud.id} className={`${style[cloud.className]} ${style.clouds}`}>
              <img src={cloud.src} alt={cloud.className} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerBackground;
