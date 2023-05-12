import React from 'react';
import styles from "./placesSection.module.scss"
import ArrowSliderBtn from "../../elements/ArrowSliderBtn/ArrowSliderBtn";
import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlaceChangeSlider = () => {
    const photos = [
        '/assets/background.png',
        '/assets/background1.png',
        '/assets/background2.png',
        '/assets/background3.png',
        '/assets/background4.png',
        '/assets/background5.png'
    ];

    const settings: Settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <ArrowSliderBtn btnType={"shifted"} direction={"left"}/>,
        nextArrow: <ArrowSliderBtn btnType={"shifted"} direction={"right"}/>
    };

    return (
        <Slider className={styles.placeInfo__slider} {...settings}>
            {
                photos.map((value: string) =>
                    <div key={value} className={styles.slideElem}>
                        <img src={value} alt=""/>
                        <div className={styles.placeName}>text</div>
                    </div>)
            }
        </Slider>
    );
}

export default PlaceChangeSlider;