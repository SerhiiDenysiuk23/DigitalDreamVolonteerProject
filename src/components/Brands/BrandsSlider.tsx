import React, {FC, useState} from 'react';
import Slider, {Settings} from "react-slick";
import styles from "./styles/BrandsSection.module.scss";
import ArrowSliderBtn from "../../elements/ArrowSliderBtn/ArrowSliderBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popup from "../../elements/Popup/Popup";

const BrandsSlider: FC<{achievement: string}> = ({achievement})=> {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [currentSlide, setCurrentSlide] = useState(0)
    const handleModal = () => {
        setShowModal(!showModal)
    };
    const photos = [
        'https://picsum.photos/250',
        'https://picsum.photos/251',
        'https://picsum.photos/252',
        'https://picsum.photos/253'
    ];

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
            return <img src={photos[index]}/>
        },
        afterChange(currentSlide: number) {
            setCurrentSlide(currentSlide)
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

    const data = { name: "", description: "", link: photos[currentSlide] }
    const title = "TM byMe"
    const slogan = "З А К О Х У В А Т И"
    return (
        <div className={styles.sliderSide}>
            {showModal && <Popup data={data} handleModal={handleModal} />}
            <h2>{title}</h2>
            <div className={styles.slogan}>{slogan}</div>
            <Slider className={styles.brandSlider} {...settings}>
                {
                    photos.map((value: string) =>
                        <div key={value} className={styles.brandSlider__elem}>
                            <img src={value} alt=""/>
                        </div>)
                }
            </Slider>
        </div>
    );
};

export default BrandsSlider;