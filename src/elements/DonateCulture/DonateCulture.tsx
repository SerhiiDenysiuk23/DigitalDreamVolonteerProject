import React from "react";

import style from "./DonateCulture.module.scss";
import DonateButton from "../DonateButton/DonateButton";

const DonateCulture = () => {
  return (
    <section className={style.donateCulture}>
      <div className={style.infoCulture}>
        <div className={style.headerCulture}>
          <h3>
            Cultural objects damaged as a result of Russian aggression in
            Ukraine
          </h3>
          <p>Monument to the writer Shevchenko</p>
        </div>
        <div className={style.descriptionCulture}>
          <p>
            Soviet and Ukrainian classic of modern photography and one of the
            first media artists born and formed in Kharkiv. Mikhailov's art has
            a conceptual and socio-documentary nature.
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
          <p>Velyka Zhytomyrska Street, 11</p>
        </div>
        <DonateButton />
      </div>
    </section>
  );
};

export default DonateCulture;
