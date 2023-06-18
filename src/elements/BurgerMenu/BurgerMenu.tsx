import React, { useContext, useEffect, useRef, useState } from 'react';
import style from './BurgerMenu.module.scss';
import { Context } from './Context';
type BurgerProps = {
  isBurgerOpen: boolean;
  toggleBurgerMenu: () => void;
};
const BurgerMenu: React.FC<BurgerProps> = ({ toggleBurgerMenu, isBurgerOpen }) => {
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
    <div className={style.menu__container}>
      <div onClick={toggleBurgerMenu} className={style.menu}>
        <span>Menu</span>
        <div
          onClick={toggleBurgerMenu}
          className={`${style.burger} ${isBurgerOpen ? style.cross : ''}`}>
          <span></span>
        </div>
      </div>
      <div className={`${style.nav__container} ${isBurgerOpen ? style.openMenu : ''}`}>
        <div className={style.leftHalf}>
          <nav>
            {state.wreathOfGirl.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={toggleBurgerMenu}
                onMouseEnter={() => addOpacity(item.id)}
                onMouseLeave={() => removeOpacity(item.id)}
                className={`${style.icons} ${style[item.className]}`}>
                <div className={style.nav__icon}>
                  <img src={item.src} alt={item.className} />
                </div>
                <h3>{item.className}</h3>
              </a>
            ))}
          </nav>
        </div>
        <div className={style.rightHalf}>
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
      </div>
      {/* // <div className={style.nav__container}>
        //   <nav className={`${style.nav} ${isOpen ? style.openMenu : ""}`}>
        //     <div onClick={toggleMenu} className={style.burger}>
        //       <span></span>
        //     </div>

        //     <ul>
        //       <li onClick={toggleMenu}>
        //         <img src="/assets/logo.svg" alt="" />
        //         <h2>Art</h2>
        //       </li>
        //       <li onClick={toggleMenu}>
        //         <img src="/assets/logo.svg" alt="" />
        //         <h2>Places</h2>
        //       </li>
        //       <li onClick={toggleMenu}>
        //         <img src="/assets/logo.svg" alt="" />
        //         <h2>Film</h2>
        //       </li>
        //       <li onClick={toggleMenu}>
        //         <img src="/assets/logo.svg" alt="" />
        //         <h2>Music</h2>
        //       </li>
        //       <li onClick={toggleMenu}>
        //         <img src="/assets/logo.svg" alt="" />
        //         <h2>Brand</h2>
        //       </li>
        //       <li onClick={toggleMenu}>
        //         <h2>Our team</h2>
        //       </li>
        //     </ul>
        //   </nav>
        // </div> */}
      {/* )} */}
    </div>
  );
};

export default BurgerMenu;
