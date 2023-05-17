import React, {FC, useEffect, useState} from 'react';
import styles from "./styles/placesSection.module.scss"
import ArrowSliderBtn from "../../elements/ArrowSliderBtn/ArrowSliderBtn";
import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {default as testData} from "../../testDataPlaces.json"

const PlacesPhotoSlider: FC<{id: string}> = ({id}) => {
    // const {data, loading, refetch} = useQuery(query, {variables: {id}})

    const [data, setImagesURL] = useState<string[]>( [])

    useEffect(()=>{
        // refetch({id})
        setImagesURL(testData.find(item => item.id == id)?.imagesURL ?? [])
    },[id])


    const settings: Settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: <ArrowSliderBtn btnType={"big"} direction={"left"}/>,
        nextArrow: <ArrowSliderBtn btnType={"big"} direction={"right"}/>,
        responsive: [
            {
                breakpoint: 1304,
                settings: {
                    dots: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]

    };

    return (
        <div className={`${styles.placePhotos} main-block` }>
            {
                !!data &&
                <Slider className={styles.placePhotos__slider} {...settings}>
                    {
                        data.map(item =>
                            <div key={item} className={styles.imgContainer}>
                                <img src={item} alt=""/>
                            </div>
                        )
                    }
                </Slider>
            }
        </div>
    );
};

export default PlacesPhotoSlider;