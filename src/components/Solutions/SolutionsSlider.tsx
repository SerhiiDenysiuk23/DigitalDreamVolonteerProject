import React, {FC, useState} from 'react';
import Slider, {Settings} from "react-slick";
import styles from "./styles/SolutionsSection.module.scss";
import ArrowSliderBtn from "../../elements/ArrowSliderBtn/ArrowSliderBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popup from "../../elements/Popup/Popup";

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
        afterChange(currentSlide: number) {
            setCurrentSlide(currentSlide)
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

    const data = { name: "", description: "", link: photos[currentSlide] }
    const title = "Grammarly"
    const shortDesc = "Service for spell checking and correct communication"
    return (
        <div className={styles.sliderSide}>
            {showModal && <Popup data={data} handleModal={handleModal} />}
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
            <p className={"p-18-hind " + styles.starBefore}>{achievement}</p>
        </div>
    );
};

export default SolutionsSlider;