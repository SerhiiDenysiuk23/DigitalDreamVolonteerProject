import React from "react";
import style from "./BannerDescription.module.scss";

const BannerDescription = () => {
  return (
    <div className={style.description}>
      <h1>The Ukrainian Flower Crown</h1>
      <p className="p-large">
        Is a symbol of the serene peaceful sky above the head of a person who
        wears itWe created the virtual wreath-talisman to defend the treasures
        of the Ukrainian culture. You are welcome to join us.{" "}
      </p>
    </div>
  );
};

export default BannerDescription;
