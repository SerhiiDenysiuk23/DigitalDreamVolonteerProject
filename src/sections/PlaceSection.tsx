import React, {useState} from 'react';
import PlacesPhotoSlider from "../components/Places/PlacesPhotoSlider";
import PlaceInfo from "../components/Places/PlaceInfo";
import styles from "../components/Places/placesSection.module.scss"


const PlaceSection = () => {
    const [id, setId] = useState<string>("test1")
    const handleChangeId = (elemId: string) => {
        setId(elemId)
    }

    return (
        <section className={styles.placeSection}>
            <PlacesPhotoSlider id={id}/>
            <PlaceInfo handlePlacePhotosChange={handleChangeId}/>
        </section>
    );
};

export default PlaceSection;