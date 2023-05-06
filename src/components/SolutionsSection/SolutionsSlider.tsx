import React from 'react';
import {useSlider} from "../../hooks/useSlider";
import ArrowSliderBtn from "../../elements/ArrowSliderBtn/ArrowSliderBtn";

const SolutionsSlider = () => {
    const photos = [
        '/tmpData/img.png',
        '/tmpData/img_1.png',
        '/tmpData/img_2.png',
        '/tmpData/img_3.png',
        '/tmpData/img_4.png'
    ];

    const {currentPhoto, prevPhoto, nextPhoto, changePhoto} = useSlider(photos)

    return (
        <div className={"solution-slider"}>
            <div className={"solution-slider__elem"}>
                <ArrowSliderBtn direction={"left"} handleOnClick={prevPhoto}/>
                <ArrowSliderBtn direction={"right"} handleOnClick={nextPhoto}/>
                <img src={currentPhoto} alt=""/>
            </div>
            <div className={"solution-slider-nav"}>
                {
                    photos.map((item: string, index: number) =>
                        <div
                            onClick={()=>{changePhoto(index)}}
                            key={item}
                            className={`solution-slider-nav__elem ${item == currentPhoto ? "solution-slider-nav__elem__active" : ""}`}>
                            <img src={item} alt=""/>
                        </div>)
                }
            </div>
        </div>
    );
};

export default SolutionsSlider;