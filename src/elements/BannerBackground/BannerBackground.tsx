import React from "react";
import style from "./BannerBackground.module.scss";

const BannerBackground = () => {
  const [hoveredIcon, setHoveredIcon] = React.useState("main");

  const girlMain = {
    backgroundImage: 'url("/assets/girl/girl1.png")',
    opacity: hoveredIcon === "main" ? 1 : 0,
  };

  const girlArt = {
    backgroundImage: 'url("/assets/girl/girl_art1.png")',
    opacity: hoveredIcon === "art" ? 1 : 0,
  };
  const girlFilm = {
    backgroundImage: 'url("/assets/girl/girl_video1.png")',
    opacity: hoveredIcon === "film" ? 1 : 0,
  };
  const girlBrend = {
    backgroundImage: 'url("/assets/girl/girl_brend1.png")',
    opacity: hoveredIcon === "brend" ? 1 : 0,
  };
  const girlPlaces = {
    backgroundImage: 'url("/assets/girl/girl_photo1.png")',
    opacity: hoveredIcon === "places" ? 1 : 0,
  };
  const girlMusic = {
    backgroundImage: 'url("/assets/girl/girl_music1.png")',
    opacity: hoveredIcon === "music" ? 1 : 0,
  };

  const landscape = {
    backgroundImage: 'url("/assets/bannerBack.jpg")',
    opacity: hoveredIcon === "main" ? 1 : 0,
  };

  const landscape1 = {
    backgroundImage: 'url("/assets/background1.png")',
    opacity: hoveredIcon === "art" ? 1 : 0,
  };
  const landscape2 = {
    backgroundImage: 'url("/assets/background2.png")',
    opacity: hoveredIcon === "film" ? 1 : 0,
  };
  const landscape3 = {
    backgroundImage: 'url("/assets/background3.png")',
    opacity: hoveredIcon === "brend" ? 1 : 0,
  };
  const landscape4 = {
    backgroundImage: 'url("/assets/background4.png")',
    opacity: hoveredIcon === "places" ? 1 : 0,
  };
  const landscape5 = {
    backgroundImage: 'url("/assets/background5.png")',
    opacity: hoveredIcon === "music" ? 1 : 0,
  };

  return (
    <div className={style.bannerBackground}>
      <div className={style.landscapes}>
        <div
          className={`${style.landscape} ${style.landscapeMain}`}
          style={landscape}
        ></div>
        <div
          className={`${style.landscape} ${style.landscape1}`}
          style={landscape1}
        ></div>
        <div
          className={`${style.landscape} ${style.landscape2}`}
          style={landscape2}
        ></div>
        <div
          className={`${style.landscape} ${style.landscape3}`}
          style={landscape3}
        ></div>
        <div
          className={`${style.landscape} ${style.landscape4}`}
          style={landscape4}
        ></div>
        <div
          className={`${style.landscape} ${style.landscape5}`}
          style={landscape5}
        ></div>
      </div>
      <div className={style.girl}>
        <div
          className={`${style.hover__girl} ${style.girlMain}`}
          style={girlMain}
        ></div>
        <div
          className={`${style.hover__girl} ${style.girlArt}`}
          style={girlArt}
        ></div>
        <div
          className={`${style.hover__girl} ${style.girlFilm}`}
          style={girlFilm}
        ></div>
        <div
          className={`${style.hover__girl} ${style.girlBrend}`}
          style={girlBrend}
        ></div>
        <div
          className={`${style.hover__girl} ${style.girlPlaces}`}
          style={girlPlaces}
        ></div>
        <div
          className={`${style.hover__girl} ${style.girlMusic}`}
          style={girlMusic}
        ></div>
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
            href="art"
            onMouseEnter={() => setHoveredIcon("art")}
            onMouseLeave={() => setHoveredIcon("main")}
          >
            <img src="/assets/flowers-icons/art.png" alt="go to art" />
          </a>
          <a
            className={`${style.icons} ${style.film}`}
            href="film"
            onMouseEnter={() => setHoveredIcon("film")}
            onMouseLeave={() => setHoveredIcon("main")}
          >
            <img src="/assets/flowers-icons/film.png" alt="go to film" />
          </a>
          <a
            className={`${style.icons} ${style.brend}`}
            href="brend"
            onMouseEnter={() => setHoveredIcon("brend")}
            onMouseLeave={() => setHoveredIcon("main")}
          >
            <img src="/assets/flowers-icons/brend.png" alt="go to brend" />
          </a>
          <a
            className={`${style.icons} ${style.places}`}
            href="places"
            onMouseEnter={() => setHoveredIcon("places")}
            onMouseLeave={() => setHoveredIcon("main")}
          >
            <img src="/assets/flowers-icons/places_.png" alt="go to places" />
          </a>
          <a
            className={`${style.icons} ${style.music}`}
            href="music"
            onMouseEnter={() => setHoveredIcon("music")}
            onMouseLeave={() => setHoveredIcon("main")}
          >
            <img src="/assets/flowers-icons/music.png" alt="go to music" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerBackground;
