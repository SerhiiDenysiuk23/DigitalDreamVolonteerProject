import React from "react";
import style from "./BannerBackground.module.scss";

const BannerBackground = () => {
  const girlImg = {
    backgroundImage: 'url("/assets/girl/girl1.png")',
  };

  const [girlBackground, setGirlBackground] = React.useState(
    girlImg.backgroundImage
    
  );

  const landscape = {
    backgroundImage: 'url("/assets/bannerBack.jpg")',
  };

  // function returns ORIGIn background
  function returnBackground(){
    setGirlBackground(girlImg.backgroundImage)
  }
  return (
    <div className={style.bannerBackground}>
      <div className={style.landscape} style={landscape}></div>
      <div className={style.girl} style={{ backgroundImage: girlBackground }}>
        <div className="">
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
        <div className="">
          <a
            className={`${style.icons} ${style.art}`}
            onMouseEnter={() =>
              setGirlBackground('url("/assets/girl/girl_art1.png")')
            }
            onMouseLeave={returnBackground}
            href="art"
          >
            <img src="/assets/flowers-icons/art.png" alt="go to art" />
          </a>
          <a
            className={`${style.icons} ${style.film}`}
            onMouseEnter={() =>
              setGirlBackground('url("/assets/girl/girl_video1.png")')
            }
            onMouseLeave={returnBackground}
            href="film"
          >
            <img src="/assets/flowers-icons/film.png" alt="go to film" />
          </a>
          <a
            className={`${style.icons} ${style.brend}`}
            onMouseEnter={() =>
              setGirlBackground('url("/assets/girl/girl_brend1.png")')
            }
            onMouseLeave={returnBackground}
            href="brend"
          >
            <img src="/assets/flowers-icons/brend.png" alt="go to brend" />
          </a>
          <a
            className={`${style.icons} ${style.places}`}
            onMouseEnter={() =>
              setGirlBackground('url("/assets/girl/girl_music1.png")')
            }
            onMouseLeave={returnBackground}
            href="places"
          >
            <img src="/assets/flowers-icons/places_.png" alt="go to places" />
          </a>
          <a
            className={`${style.icons} ${style.music}`}
            onMouseEnter={() =>
              setGirlBackground('url("/assets/girl/girl_music1.png")')
            }
            onMouseLeave={returnBackground}
            href="music"
          >
            <img src="/assets/flowers-icons/music.png" alt="go to music" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerBackground;
