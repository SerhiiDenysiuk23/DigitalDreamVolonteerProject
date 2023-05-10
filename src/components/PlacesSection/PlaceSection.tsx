import React, {CSSProperties} from 'react';
import PlacesPhotoSlider from "./PlacesPhotoSlider";
import PlaceInfo from "./PlaceInfo";

// const sectionStyle: CSSProperties = {
//     display: "flex",
//     justifyContent: "space-between"
// }

const PlaceSection = () => {
    return (
        <section>
            <PlacesPhotoSlider/>
            <PlaceInfo/>
        </section>
    );
};

export default PlaceSection;