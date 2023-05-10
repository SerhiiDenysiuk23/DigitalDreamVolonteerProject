import React, {CSSProperties} from 'react';
import PlacesPhotoSlider from "../components/Places/PlacesPhotoSlider";
import PlaceInfo from "../components/Places/PlaceInfo";

const PlaceSection = () => {
    return (
        <section>
            <PlacesPhotoSlider/>
            <PlaceInfo/>
        </section>
    );
};

export default PlaceSection;