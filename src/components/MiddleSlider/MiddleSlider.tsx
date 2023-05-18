import SliderItem from "./SliderItem/SliderItem"
import style from './MiddleSlider.module.scss'
import {useState, useEffect, useRef, useCallback, RefObject} from "react"
import Slider, {InnerSlider, Settings} from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Paginator from "./Paginator/Paginator";




let sliderItems = {
    arts: [
        {img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/img-3.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/img-4.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that"},

        {img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/img-3.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/img-4.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that"},

        {img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/img-3.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/img-4.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that"},
        {img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that"}
    ]
}


interface CustomInnerSlider extends InnerSlider {
    props: {

        children: [];
    };
    state: {
        currentSlide: number;
        slideCount: number;
    };
}

const MiddleSlider = () => {
    // Состояние для текущего слайда и количества слайдов
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideCount, setSlideCount] = useState(0);

    const sliderRef = useRef<Slider>(null)

    // Функция для обновления состояния при изменении слайда
    const updateState = (current: number, count: number) => {
        setCurrentSlide(current);
        setSlideCount(count);
    };


    const goToNextSlide = () => {
        sliderRef.current?.slickNext();
    };

    const goToPrevSlide = () => {
        sliderRef.current?.slickPrev();
    };

    const goToSlide = (index: number) => {
        sliderRef.current?.slickGoTo(index);
    };



    const settings: Settings = {
        dots: false, // Отключаем стандартные точки навигации
        arrows: false, // Отключаем стандартные стрелки навигации
        infinite: false, 
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 2,
        beforeChange: (current, next) => updateState(next, slideCount), // Обновляем состояние перед изменением слайда
        afterChange: (current) => updateState(current, slideCount), // Обновляем состояние после изменения слайда
        onReInit: () => updateState(currentSlide, (sliderRef.current?.innerSlider as CustomInnerSlider)?.state.slideCount), // Обновляем состояние при повторной инициализации слайдера
        onInit: () => updateState(currentSlide, (sliderRef.current?.innerSlider as CustomInnerSlider)?.state.slideCount), // Обновляем состояние при первой инициализации слайдера
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    speed: 500,
                    slidesToShow: 2,
                    rows: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };


   
    return (
        <div className={`${style.container} middle-slider-container`}>
            <div className={style.heading}>
                <h3 className={style.header}>Do you know about Ukrainian ART?</h3>
                <div>
                    <Paginator goTo={goToSlide} prev={goToPrevSlide} next={goToNextSlide} currentSlide={currentSlide} slideCount={slideCount}/>
                </div>
            </div>
            <div className={style.slide}>
                <Slider ref={sliderRef} className={`${style.slider}  `} {...settings}>
                    {

                        sliderItems.arts.map(item => (
                            <SliderItem key={item.img} image={item.img} description={item.description}/>
                        ))
                    }

                </Slider>

            </div>
        </div>
    )
}

export default MiddleSlider;