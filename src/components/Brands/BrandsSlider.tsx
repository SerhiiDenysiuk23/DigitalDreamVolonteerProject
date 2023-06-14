import React, {FC, useState} from 'react';
import Slider, {Settings} from "react-slick";
import styles from "./styles/BrandsSection.module.scss";
import ArrowSliderBtn from "../../elements/ArrowSliderBtn/ArrowSliderBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popup from "../../elements/Popup/Popup";
import {Company} from "../../types/Company";

const BrandsSlider: FC<{company: Company}> = ({company})=> {
    const [currentPugElem, setCurrentPugElem] = useState(2)

    const [showModal, setShowModal] = useState<boolean>(false);
    const [currentSlide, setCurrentSlide] = useState(0)
    const handleModal = () => {
        setShowModal(!showModal)
    };

    const settings: Settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        swipe: false,
        fade: true,
        slidesToScroll: 1,
        dots: true,
        dotsClass: `${styles.brandSliderPagination} brand-slider`,
        customPaging(index: number): JSX.Element {
            return <img src={company.mediaSlides[index]}/>
        },
        appendDots: (dots: JSX.Element[]) => {
            const maxVisibleDots = 4;
            const totalSlides = company.mediaSlides.length;
            const startIndex = Math.max(currentSlide - currentPugElem, 0);
            const endIndex = Math.min(startIndex + maxVisibleDots, totalSlides);

            let visibleDots = dots.slice(startIndex, endIndex);

            // Add additional dots if there are fewer than 4 on the last slide
            if (visibleDots.length < maxVisibleDots && currentSlide === totalSlides - 1) {
                const remainingDots = maxVisibleDots - visibleDots.length;
                const additionalDots = dots.slice(0, remainingDots);
                visibleDots = visibleDots.concat(additionalDots);
            }

            return (
                <ul>
                    {visibleDots.map((dot, index) => (
                        <div key={index} onClick={() => {
                            if (index == 3 || index == 2)
                                setCurrentPugElem(2)
                            else if (index == 0 || index == 1)
                                setCurrentPugElem(1)
                        }}>{dot}</div>
                    ))}
                </ul>
            );
        },
        beforeChange(currentSlide: number, nextSlide: number) {
            setCurrentSlide(nextSlide)
        },
        responsive: [
            {
                breakpoint: 995,
                settings:{
                    arrows: false
                }
            }
        ]
    };

    const data = { name: "", description: "", link: "" }
    return (
        <div className={styles.sliderSide}>
            {showModal && <Popup data={data} handleModal={handleModal} />}
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