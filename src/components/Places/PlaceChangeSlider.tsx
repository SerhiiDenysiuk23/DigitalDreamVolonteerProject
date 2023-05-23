import React, {FC} from 'react';
import styles from "./styles/placesSection.module.scss"
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
        nextArrow: <ArrowSliderBtn btnType={"shifted"} direction={"right"}/>,
        responsive: [
            {
                breakpoint: 1304,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 875,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    return (
        <Slider className={styles.placeInfo__slider} {...settings}>
            {
                data.map((value) =>
                    <div onClick={()=>{handleOnClick(value.id)}} key={value.id} className={styles.slideElem}>
                        <img src={value.mainImageURL} alt=""/>
                        <div className={styles.placeName}>{value.name}</div>
                    </div>)
            }
        </Slider>
    );
}

export default PlaceChangeSlider;