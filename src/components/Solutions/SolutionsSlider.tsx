import React, {FC} from 'react';
import Slider, {Settings} from "react-slick";
import styles from "./SolutionsSection.module.scss";
import ArrowSliderBtn from "../../elements/ArrowSliderBtn/ArrowSliderBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SolutionsSlider: FC<{achievement: string}> = ({achievement})=> {
    const photos = [
        '/assets/background.png',
        '/assets/background1.png',
        '/assets/background2.png',
        '/assets/background3.png',
        '/assets/background4.png',
        '/assets/background4.png'
    ];

    const settings: Settings = {
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <ArrowSliderBtn direction={"left"}/>,
        nextArrow: <ArrowSliderBtn direction={"right"}/>,
        dots: true,
        dotsClass: `${styles.solutionSliderPagination} solution-slider`,
        customPaging(index: number): JSX.Element {
            return <img src={photos[index]}/>
        },
        responsive: [
            {
                breakpoint: 1024,
                settings:{
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className={styles.sliderSide}>
            <Slider className={styles.solutionSlider} {...settings}>
                {
                    photos.map((value: string) =>
                        <div key={value} className={styles.solutionSlider__elem}>
                            <img src={value} alt=""/>
                        </div>)
                }
            </Slider>
            <p className={"p-18-hind " + styles.starBefore}>{achievement}</p>
        </div>
    );
};

export default SolutionsSlider;