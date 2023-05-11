import React, {CSSProperties} from 'react';
import PlacesPhotoSlider from "../components/Places/PlacesPhotoSlider";
import PlaceInfo from "../components/Places/PlaceInfo";
import styles from "../components/Places/placesSection.module.scss"

const PlaceSection = () => {
    return (
        <section className={styles.placeSection}>
            <PlacesPhotoSlider/>
            <PlaceInfo/>
        </section>
    );
};

export default PlaceSection;