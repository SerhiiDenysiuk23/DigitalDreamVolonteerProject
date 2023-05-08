import React from 'react';
import styles from "./placesSection.module.scss"
import ArrowSliderBtn from "../../elements/ArrowSliderBtn/ArrowSliderBtn";
import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlacesPhotoSlider = () => {
    const photos = [
        '/assets/background.png',
        '/assets/background1.png',
        '/assets/background2.png',
    ];

    const settings: Settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: <ArrowSliderBtn btnType={"big"} direction={"left"}/>,
        nextArrow: <ArrowSliderBtn btnType={"big"} direction={"right"}/>

    };

    return (
        <section className={styles.placePhotos}>
            <Slider className={styles.placePhotos__slider} {...settings}>
                {
                    photos.map(item =>
                        <div key={item} className={styles.imgContainer}>
                            <img src={item} alt=""/>
                        </div>
                    )
                }
            </Slider>
        </section>
    );
};

export default PlacesPhotoSlider;