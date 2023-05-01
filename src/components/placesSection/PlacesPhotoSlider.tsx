import React, {useState} from 'react';

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
        <div className="placePhotos">
            <div className="placePhotos__slider">
                <div onClick={goToPreviousPhoto} className="arrow arrow__left"/>
                <div onClick={goToNextPhoto} className="arrow arrow__right"/>
                <img src={photoUrl} alt=""/>
            </div>
        </div>
    );
};

export default PlacesPhotoSlider;