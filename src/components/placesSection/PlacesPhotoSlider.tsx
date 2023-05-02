import React, {useState} from 'react';
import styles from "./placePhotoSlider.module.scss"

const PlacesPhotoSlider = () => {
    const photos = [
        '/tmpData/3.jpg',
        '/tmpData/4.jpg',
        '/tmpData/5.jpg',
    ];
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const goToPreviousPhoto = () => {
        const newIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
        setCurrentPhotoIndex(newIndex);
    };

    const goToNextPhoto = () => {
        const newIndex = (currentPhotoIndex + 1) % photos.length;
        setCurrentPhotoIndex(newIndex);
    };

    const photoUrl = photos[currentPhotoIndex];

    return (
        <section className={styles.placePhotos}>
            <div className={styles.placePhotos__slider}>
                <div onClick={goToPreviousPhoto} className={`${styles.arrow} ${styles.arrow__left}`}/>
                <div onClick={goToNextPhoto} className={`${styles.arrow} ${styles.arrow__right}`}/>
                <img src={photoUrl} alt=""/>
            </div>
        </section>
    );
};

export default PlacesPhotoSlider;