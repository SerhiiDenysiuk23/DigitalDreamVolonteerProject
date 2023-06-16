import React, {useState} from 'react';
import PlacesPhotoSlider from "../components/Places/PlacesPhotoSlider";
import PlaceInfo from "../components/Places/PlaceInfo";
import styles from "../components/Places/styles/placesSection.module.scss"


const PlaceSection = () => {
    // const [id, setId] = useState<string>("test1")
    const idState = useState<string>("test1")
    // const handleChangeId = (elemId: string) => {
    //     setId(elemId)
    // }
    return (
        <section className={styles.placeSection}>
            <PlacesPhotoSlider id={idState[0]}/>
            <PlaceInfo idState={idState}/>
        </section>
    );
};

export default PlaceSection;