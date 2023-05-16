import React, {FC} from 'react';
import styles from "./placesSection.module.scss"
import ArrowSliderBtn from "../../elements/ArrowSliderBtn/ArrowSliderBtn";
import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {default as testData} from "../../testDataPlaces.json";

const PlaceChangeSlider: FC<{handleOnClick(id:string): void}> = ({handleOnClick}) => {
    // const {data, loading} = useQuery(query)
    const data: Place[] = testData


    const settings: Settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <ArrowSliderBtn btnType={"shifted"} direction={"left"}/>,
        nextArrow: <ArrowSliderBtn btnType={"shifted"} direction={"right"}/>
    };

    return (
        <Slider className={styles.placeInfo__slider} {...settings}>
            {
                data.map((value) =>
                    <div key={value.id} className={styles.slideElem}>
                        <img onClick={()=>{handleOnClick(value.id)}} src={value.mainImageURL} alt=""/>
                        <div className={styles.placeName}>{value.name}</div>
                    </div>)
            }
        </Slider>
    );
}

export default PlaceChangeSlider;