import React, {useEffect} from 'react';
import Slider, {Settings} from "react-slick";
import ArrowSliderBtn from "../ArrowSliderBtn/ArrowSliderBtn";
import styles from "./PopupSlider.module.scss";

interface Props {
    mediaList: {
        link: string
        name?: string
    }[]
    handleModal: () => void;
    isModalOpen?: boolean;
}

const PopupSlider: React.FC<Props> = ({mediaList, handleModal, isModalOpen}) => {
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
            }
        ]

    };

    return (
        <div className={styles.popup__background}>
            <div className={`main-block ${styles.popup}`}>
                    <Slider className={styles.popup__slider} {...settings}>
                        {
                            mediaList.map(item =>
                                <div key={item.link} className={styles.imgContainer}>
                                    <img key={item.link} src={item.link} alt=""/>
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