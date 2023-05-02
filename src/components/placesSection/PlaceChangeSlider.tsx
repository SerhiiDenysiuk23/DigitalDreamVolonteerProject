import React from 'react';
import {useSlider} from "../../hooks/useSlider";
import styles from "./placesSection.module.scss"

const PlaceChangeSlider = () => {
    const photos = [
        '/tmpData/img_1.png',
        '/tmpData/img_2.png',
        '/tmpData/img_3.png',
        '/assets/background.png',
        '/assets/background1.png',
        '/assets/background2.png'
    ];

    const {currentPhotoList, prevPhoto, nextPhoto} = useSlider(photos, 3)


    return (
        <div className={styles.placeInfo__slider}>
            <div onClick={prevPhoto} className={`${styles.arrow} ${styles.arrow__left}`}/>
            <div onClick={nextPhoto} className={`${styles.arrow} ${styles.arrow__right}`}/>
            {
                currentPhotoList.map((value: string) =>
                    <div key={value} className={styles.placeInfo__slideElem}><img src={value} alt=""/></div>)
            }
        </div>
    );
}

export default PlaceChangeSlider;