import React from 'react';
import {useSlider} from "../../hooks/useSlider";
import styles from "./placesSection.module.scss"
import ArrowSliderBtn from "../../elements/ArrowSliderBtn/ArrowSliderBtn";

const PlaceChangeSlider = () => {
    const photos = [
        // '/tmpData/img_1.png',
        // '/tmpData/img_2.png',
        // '/tmpData/img_3.png',
        '/assets/background.png',
        '/assets/background1.png',
        '/assets/background2.png'
    ];

    const {currentPhotoList, prevPhoto, nextPhoto} = useSlider(photos, 3)


    return (
        <div className={styles.placeInfo__slider}>
            <ArrowSliderBtn direction={"left"} handleOnClick={prevPhoto}/>
            <ArrowSliderBtn direction={"right"} handleOnClick={nextPhoto}/>
            {
                currentPhotoList.map((value: string) =>
                    <div key={value} className={styles.placeInfo__slideElem}><img src={value} alt=""/></div>)
            }
        </div>
    );
}

export default PlaceChangeSlider;