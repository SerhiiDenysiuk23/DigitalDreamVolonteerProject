import SliderItem from "./SliderItem/SliderItem"
import style from './MiddleSlider.module.scss'
import { useState, useEffect, useRef, useCallback } from "react"
import Slider, { InnerSlider } from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Paginator from "./Paginator/Paginator";





const MiddleSlider = () => {

    const sliderRef = useRef<Slider>(null);



    const goToNextSlide = () => {
        sliderRef.current?.slickNext();
    };

    const goToPrevSlide = () => {
        sliderRef.current?.slickPrev();
    };


    interface CustomInnerSlider extends InnerSlider {
        props: {

            children: [];
        };
        state: {
            currentSlide: number;
            slideCount: number;
        };
    }


    const renderDots = (): JSX.Element[] | null => {
        const slider = sliderRef.current;
        console.log(slider);
        if (slider) {
            const slideCount = (slider.innerSlider as CustomInnerSlider).props.children
            let currentSlide = (slider.innerSlider as CustomInnerSlider).state.currentSlide
            console.log(currentSlide);
            console.log(slideCount);
            let dots = [];
            for (let i = 0; i < slideCount.length / 3; i++) {
                console.log('Итерация ' + i)
                const className = i === currentSlide ? "active" : "";
                dots.push(
                    <li key={i}
                        className={`${className}`}
                        onClick={() => slider.slickGoTo(i * 3)}
                    />

                );
            }
            return dots;

        }
        return null;
    }

    const [dots, setDots] = useState<JSX.Element[] | null>(null);

    useEffect(() => {
        setDots(renderDots())
    }, [sliderRef]);



    const settings = {


        speed: 500,
        slidesToShow: 3,
        rows: 2,
        slidesToScroll: 3,


    };


    let sliderItems = {
        arts: [
            { img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/img-3.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/img-4.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that" },
            
            { img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/img-3.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/img-4.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that" },

            { img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/img-3.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/img-4.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that" },
            { img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that" },







        ]
    }

    console.log(dots);
    return (
        <div className={`${style.container} middle-slider-container`} >
            <div className={style.heading}>
                <h3>Do you know about Ukrainian ART?</h3>
                <div>
                    <Paginator Next={goToNextSlide} Prew={goToPrevSlide} dots={dots} />
                </div>
            </div>
            <div className={style.slide}>
                <Slider ref={sliderRef} className={`${style.slider}  `} {...settings}>
                    {

                        sliderItems.arts.map(item => (
                            <SliderItem key={item.img} image={item.img} description={item.description} />
                        ))
                    }

                </Slider>

            </div>
        </div>
    )
}

export default MiddleSlider;