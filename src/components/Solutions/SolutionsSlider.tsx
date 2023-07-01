import React, {FC, useState} from 'react';
import Slider, {Settings} from "react-slick";
import styles from "./styles/SolutionsSection.module.scss";
import ArrowSliderBtn from "../../elements/ArrowSliderBtn/ArrowSliderBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popup from "../../elements/Popup/Popup";
import SliderPagination from "../../elements/SliderPagination/SliderPagination";
import PopupSlider from "../../elements/Popup/PopupSlider";

const SolutionsSlider: FC<{ achievement: string }> = ({achievement}) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [currentSlide, setCurrentSlide] = useState(0)
     const handleModal = () => {
         setShowModal(!showModal)
     };

    const photos = [
        'https://picsum.photos/450',
        'https://picsum.photos/451',
        'https://picsum.photos/452',
        'https://picsum.photos/453',
        'https://picsum.photos/454',
        'https://picsum.photos/455',
        'https://picsum.photos/456',
        'https://picsum.photos/457'
    ];

    // const photos = [
    //     "https://www.pngall.com/wp-content/uploads/2/1-Number-PNG-Pic.png",
    //     "https://www.freeiconspng.com/uploads/number-two-icon-18.jpg",
    //     "https://clipart-library.com/images/8cGbedjKi.jpg",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/4_green.svg/1024px-4_green.svg.png",
    //     "https://blognumbers.files.wordpress.com/2010/09/5.jpg",
    //     "https://static8.depositphotos.com/1338574/829/i/600/depositphotos_8293014-stock-photo-the-number-0-in-gold.jpg",
    //     "https://clipart-library.com/images/zTX5kpMpc.gif"
    // ]

    const settings: Settings = {
        arrows: true,
        swipe: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <ArrowSliderBtn btnType={"big"} direction={"left"}/>,
        nextArrow: <ArrowSliderBtn btnType={"big"} direction={"right"}/>,
        dots: true,
        dotsClass: `${styles.solutionSliderPagination} solution-slider`,
        customPaging(index: number): JSX.Element {
            return <img src={photos[index]}/>
        },
        appendDots: (dots: JSX.Element[]) => <SliderPagination
            dots={dots}
            totalSlides={photos.length}
            visibleSlides={5}
            currentSlide={currentSlide}
            className={`${styles.brandSliderPagination} brand-slider`}
        />,
        beforeChange(currentSlide: number, nextSlide: number) {
            setCurrentSlide(nextSlide)
        },
        responsive: [
            {
                breakpoint: 1023,
                settings:{
                    swipe: true
                }
            },
            {
                breakpoint: 995,
                settings: {
                    arrows: false,
                    swipe: true
                }
            }
        ]
    };

    const data = { name: "", description: "", link: photos[currentSlide] }
    const title = "Grammarly"
    const shortDesc = "Service for spell checking and correct communication"
    return (
        <div className={styles.sliderSide}>
            {showModal && <PopupSlider mediaList={photos.map(item => ({link: item, name: item}))} handleModal={handleModal} />}
            <h2>{title}</h2>
            <h5>{shortDesc}</h5>
            <Slider className={styles.solutionSlider} {...settings}>
                {
                    photos.map((value: string) =>
                        <div key={value} className={styles.solutionSlider__elem}>
                            <img onClick={handleModal} src={value} alt=""/>
                        </div>)
                }
            </Slider>
        </div>
    );
};

export default SolutionsSlider;