import React, {FC, useState} from 'react';
import Slider, {Settings} from "react-slick";
import styles from "./styles/BrandsSection.module.scss";
import ArrowSliderBtn from "../../elements/ArrowSliderBtn/ArrowSliderBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popup from "../../elements/Popup/Popup";
import {Company} from "../../types/Company";
import SliderPagination from "../../elements/SliderPagination/SliderPagination";
import PopupSlider from "../../elements/Popup/PopupSlider";


const BrandsSlider: FC<{ company: Company }> = ({company}) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [currentSlide, setCurrentSlide] = useState(0)
    const handleModal = () => {
        setShowModal(!showModal)
    };

    const settings: Settings = {
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        swipe: false,
        fade: true,
        slidesToScroll: 1,
        dots: true,
        dotsClass: `${styles.brandSliderPagination} brand-slider`,
        customPaging(index: number): JSX.Element {
            return <img src={company.mediaSlides[index]}/>
        },
        appendDots: (dots: JSX.Element[]) => <SliderPagination
            dots={dots}
            totalSlides={company.mediaSlides.length}
            visibleSlides={4}
            currentSlide={currentSlide}
            className={`${styles.brandSliderPagination} brand-slider`}
        />,
        beforeChange(currentSlide: number, nextSlide: number) {
            setCurrentSlide(nextSlide)
        },
        responsive: [
            {
                breakpoint: 995,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className={styles.sliderSide}>
            {showModal && <PopupSlider mediaList={company.mediaSlides.map(item => ({link: item}))}
                                       currentMedia={currentSlide}
                                       handleModal={handleModal}/>}
            <h2>{company.name}</h2>
            <Slider className={styles.brandSlider} {...settings}>
                {
                    company.mediaSlides.map((value: string) =>
                        <div key={value} className={styles.brandSlider__elem}>
                            <img onClick={handleModal} src={value} alt=""/>
                        </div>)
                }
            </Slider>
        </div>
    );
};

export default BrandsSlider;