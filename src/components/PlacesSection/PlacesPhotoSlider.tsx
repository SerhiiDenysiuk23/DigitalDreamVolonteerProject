import React, {useState} from 'react';
import styles from "./placesSection.module.scss"
import {useSlider} from "../../hooks/useSlider";
import ArrowSliderBtn from "../../elements/ArrowSliderBtn/ArrowSliderBtn";

const PlacesPhotoSlider = () => {
    const photos = [
        '/tmpData/img.png',
        '/tmpData/img_1.png',
        '/tmpData/img_2.png',
        '/tmpData/img_3.png',
    ];
    const {currentPhoto, prevPhoto, nextPhoto} = useSlider(photos)

    return (
        <section className={styles.placePhotos}>
            <div className={styles.placePhotos__slider}>
                <ArrowSliderBtn direction={"left"} handleOnClick={prevPhoto}/>
                <ArrowSliderBtn direction={"right"} handleOnClick={nextPhoto}/>
                <img src={currentPhoto} alt=""/>
            </div>
        </section>
    );
};

export default PlacesPhotoSlider;