import React, {useEffect, useRef, useState} from 'react';
import Slider, {Settings} from "react-slick";
import ArrowSliderBtn from "../ArrowSliderBtn/ArrowSliderBtn";
import styles from "./PopupSlider.module.scss";

interface Props {
    mediaList: {
        link: string
        name?: string
    }[]
    currentMedia: number
    handleModal: () => void;
    isModalOpen?: boolean;
}

type SliderRef = Slider | null;

const PopupSlider: React.FC<Props> = ({mediaList, currentMedia, handleModal, isModalOpen}) => {
    const [nav1, setNav1] = useState<SliderRef>(null);
    const [nav2, setNav2] = useState<SliderRef>(null);
    const slider1 = useRef<SliderRef>(null);
    const slider2 = useRef<SliderRef>(null);
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const body = document.body;

        if (isModalOpen) {
            body.classList.add("lock");
        } else {
            body.classList.remove("lock");
        }

        return () => {
            // Clean up the body class when the component unmounts
            body.classList.remove("lock");
        };
    }, [isModalOpen]);

    useEffect(()=>{
        nav2?.slickGoTo(currentMedia)
    },[nav2])

    const settings: Settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: true,
        fade: false,
        swipe: true,
        prevArrow: <ArrowSliderBtn btnType={"big"} direction={"left"}/>,
        nextArrow: <ArrowSliderBtn btnType={"big"} direction={"right"}/>,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 539,
                settings: {
                    arrows: false,
                    appendDots(dots: React.ReactNode): JSX.Element {
                        return <div>{currentSlide + 1} / {mediaList.length}</div>
                    },
                    beforeChange(currentSlide: number, nextSlide: number) {
                        setCurrentSlide(nextSlide)
                    },
                }
            },
            {
                breakpoint: 499,
                settings: {
                    arrows: false,
                    appendDots(dots: React.ReactNode): JSX.Element {
                        return <div>{currentSlide + 1} / {mediaList.length}</div>
                    },
                    beforeChange(currentSlide: number, nextSlide: number) {
                        setCurrentSlide(nextSlide)
                    },
                }
            }
        ],
        // @ts-ignore
        asNavFor: nav1

    };

    const settingsName: Settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: false,
        fade: true,
        swipe: false,
        arrows: false,
        // @ts-ignore
        asNavFor: nav2
    }

    return (
        <div className={styles.popup__background}>
            <div className={`main-block ${styles.popup}`}>
                {
                    !!mediaList[0].name &&
                    <Slider className={styles.popup__sliderNames} {...settingsName} ref={slider => {
                        setNav1(slider);
                        slider1.current = slider;
                    }}>
                        {mediaList.map(item => <div key={item.link}
                                                    className={styles.popup__sliderNames__slide}>{item.name}</div>)}
                    </Slider>
                }


                <Slider className={styles.popup__slider} {...settings} ref={slider => {
                    setNav2(slider);
                    slider2.current = slider;
                }}>
                    {
                        mediaList.map(item =>
                            <div key={item.link} className={styles.imgContainer}>
                                <img src={item.link} alt=""/>
                            </div>
                        )
                    }
                </Slider>
                <div className={styles.cross} onClick={handleModal}>
                    <span/>
                </div>
            </div>
            <div onClick={handleModal} className={styles.background}/>
        </div>
    );
};

export default PopupSlider;