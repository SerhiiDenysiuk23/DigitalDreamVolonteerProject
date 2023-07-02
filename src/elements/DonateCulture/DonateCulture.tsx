import React from "react";

import style from "./DonateCulture.module.scss";
import DonateButton from "../DonateButton/DonateButton";

const DonateCulture = () => {
  return (
    <>
      <div className={`${style.donateCulture} main-block`}>
        <div className={style.infoCulture}>
          <div className={style.headerCulture}>
            <h2>
              Cultural objects damaged as a result of Russian aggression in
              Ukraine
            </h2>
            <h3>Monument to the writer Shevchenko</h3>
          </div>
          <div className={style.tarasShevchenkoPhone}>
            <img src="/assets/portret-1.png" alt="" className={style.object} />
            <img
              src="/assets/portret-2.png"
              alt=""
              className={style.objectDamage}
            />
          </div>
          <div className={style.descriptionCulture}>
            <p>
              Soviet and Ukrainian classic of modern photography and one of the
              first media artists born and formed in Kharkiv. Mikhailov's art
              has a conceptual and socio-documentary nature.
            </p>
            <p>
              His works document the changes in life and society that took place
              in the late USSR and after its collapse. Winner of the prestigious
              Hasselblad Foundation Prize, which is the equivalent of the Nobel
              Prize.
            </p>
            <p>
              His works document the changes in life and society that took place
              in the late USSR and after its collapse. Winner of the prestigious
              Hasselblad
            </p>
          </div>
        </div>
        <div className={style.locationCulture}>
          <div className={style.location}>
            <img src="/assets/icons/iconLocation.png" alt="" />
            <p className={style.address}>Velyka Zhytomyrska Street, 11</p>
          </div>
          <div className={style.locationButton}>
            <p>You can help in restoration cultural treasures</p>
            <DonateButton />
          </div>
        </div>
      </div>
      <div className={style.tabletShevchenko}>
        <img
          src="/assets/portret-1.png"
          alt=""
          className={style.portretTablet1}
        />
        <img
          src="/assets/portret-2.png"
          alt=""
          className={style.portretTablet2}
        />
      </div>
    </>
  );
};

export default DonateCulture;
