import React, {useState} from 'react';
import styles from "./placesSection.module.scss"
import {useSlider} from "../../hooks/useSlider";

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
                <div onClick={prevPhoto} className={`${styles.arrow} ${styles.arrow__left}`}/>
                <div onClick={nextPhoto} className={`${styles.arrow} ${styles.arrow__right}`}/>
                <img src={currentPhoto} alt=""/>
            </div>
        </section>
    );
};

export default PlacesPhotoSlider;