import React, { useContext, useState, useEffect } from 'react';
import style from './BannerBackground.module.scss';
import { Context } from './Context';

const BannerBackground = () => {
  const state = useContext(Context);
  const [girlImg, setGirlImg] = useState(state.girlImages);
  const [landlImg, setLandImg] = useState(state.backgroundPictures);
  const [icon, setIcon] = useState(state.wreathOfGirl);

  // changes girl & landscape on hover for 1024+ screens
  const handleMouseEnter = (id: number) => {
    if (window.innerWidth >= 1024) {
      const addOpacity = (n: number): void => {
        const updatedGirl = [...state.girlImages];
        const updatedlandscape = [...state.backgroundPictures];
        updatedGirl[n].opacity = 1;
        updatedlandscape[n].opacity = 1;
        setGirlImg(updatedGirl);
        setLandImg(updatedlandscape);
      };
      addOpacity(id);
    }
  };

  const handleMouseLeave = (id: number) => {
    if (window.innerWidth >= 1024) {
      const removeOpacity = (n: number): void => {
        const updatedGirl = [...state.girlImages];
        const updatedlandscape = [...state.backgroundPictures];
        updatedGirl[n].opacity = 0;
        updatedlandscape[n].opacity = 0;
        setGirlImg(updatedGirl);
        setLandImg(updatedlandscape);
      };
      removeOpacity(id);
    }
  };
  // changes girl & landscape on hover for 1024+ screens

  useEffect(() => {
    const girlDuration = 4000; 
    const transitionDuration = 2000;
    let girlIndex = 0;
    let iconIndex = 0;
    let isMainGirl = true;
    let isFirstCircle = true;

    const transition = () => {
      if (isMainGirl) {
        removeOpacity(girlIndex);
        removeIconScale(iconIndex);
    
        setTimeout(() => {
          let newGirlIndex;
          do {
            newGirlIndex = Math.floor(Math.random() * 5) + 1;
          } while (newGirlIndex === girlIndex);
    
          girlIndex = newGirlIndex;
          addOpacity(girlIndex);
    
          if (girlIndex === 1) {
            iconIndex = 0;
            addIconScale(iconIndex);
          } else if (girlIndex > 1) {
            iconIndex = (girlIndex - 1) % state.wreathOfGirl.length;
            if (iconIndex !== 0) {
              addIconScale(iconIndex);
            }
          }
    
          if (girlIndex === 0 && !isFirstCircle) {
            removeIconScale(iconIndex);
          }
    
          setTimeout(transition, transitionDuration);
        }, transitionDuration);
      } else {
        removeOpacity(girlIndex);
        removeIconScale(iconIndex);
    
        setTimeout(() => {
          girlIndex = (girlIndex + 1) % state.girlImages.length;
          addOpacity(girlIndex);
          iconIndex = (girlIndex + state.girlImages.length - 1) % state.wreathOfGirl.length;
          addIconScale(iconIndex);
          isMainGirl = true;
    
          if (girlIndex === 0) {
            isFirstCircle = false;
          }
    
          setTimeout(transition, girlDuration);
        }, girlDuration - transitionDuration);
      }
    };
    const addOpacity = (index: number) => {
      const updatedGirl = [...state.girlImages];
      const updatedlandscape = [...state.backgroundPictures];
      updatedGirl[index].opacity = 1;
      updatedlandscape[index].opacity = 1;
      setGirlImg(updatedGirl);
      setLandImg(updatedlandscape);
    };

    const removeOpacity = (index: number) => {
      const updatedGirl = [...state.girlImages];
      const updatedlandscape = [...state.backgroundPictures];
      updatedGirl[index].opacity = 0;
      updatedlandscape[index].opacity = 0;
      setGirlImg(updatedGirl);
      setLandImg(updatedlandscape);
    };

    const addIconScale = (index: number) => {
      const updatedIcon = [...state.wreathOfGirl];
      updatedIcon.forEach((icon) => {
        icon.scale = 1;
      });
      if (index >= 0 && index < state.wreathOfGirl.length) {
        updatedIcon[index].scale = 1.2;
      }
      setIcon(updatedIcon);
      // console.log(index);
    };

    const removeIconScale = (index: number) => {
      const updatedIcon = [...state.wreathOfGirl];
      updatedIcon[index].scale = 1;
      setIcon(updatedIcon);
    };

    if (window.innerWidth < 1024) {
      setTimeout(transition, girlDuration);
    }

    return () => {
      // Cleanup logic if needed
    };
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
              style={{
                scale: `${item.scale}`,
                filter: item.scale === 1.2 ? 'drop-shadow(1px 1px 1px #cc8787)' : ''
              }}
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
