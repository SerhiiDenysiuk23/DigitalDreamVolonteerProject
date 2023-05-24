import SliderItem from "./SliderItem/SliderItem"
import style from './MiddleSlider.module.scss'
import { useState, useEffect, useRef, useCallback, RefObject } from "react"
import Slider, { InnerSlider, Settings } from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@apollo/client";
import { getExampleInfo } from "../../queries/artistQueries";


let sliderItems = {
    arts: [
        { img: 'https://picsum.photos/300', description: "Society that" },
        { img: 'https://picsum.photos/200', description: "Society that" },
        { img: 'https://picsum.photos/400', description: "Society that" },
        { img: 'https://picsum.photos/500', description: "Society that" },
        { img: 'https://picsum.photos/100', description: "Society that" },
        { img: 'https://picsum.photos/600', description: "Society that" },
        // {img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that"},
        // {img: '/assets/MiddleSliderImages/arts/img-3.png', description: "Society that"},
        // {img: '/assets/MiddleSliderImages/arts/img-4.png', description: "Society that"},
        // {img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that"},
        // {img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that"},

        { img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that" },
        { img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that" },
        { img: '/assets/MiddleSliderImages/arts/img-3.png', description: "Society that" },
        { img: '/assets/MiddleSliderImages/arts/img-4.png', description: "Society that" },
        { img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that" },
        { img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that" },

        { img: 'https://picsum.photos/800', description: "Society that" },
        { img: 'https://picsum.photos/900', description: "Society that" },
        { img: 'https://picsum.photos/1000', description: "Society that" },
        { img: 'https://picsum.photos/1100', description: "Society that" },
        { img: 'https://picsum.photos/1200', description: "Society that" },
        { img: 'https://picsum.photos/1300', description: "Society that" },
        { img: 'https://picsum.photos/1400', description: "Society that" },

        // {img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that"},
        // {img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that"},
        // {img: '/assets/MiddleSliderImages/arts/img-3.png', description: "Society that"},
        // {img: '/assets/MiddleSliderImages/arts/img-4.png', description: "Society that"},
        // {img: '/assets/MiddleSliderImages/arts/img-2.png', description: "Society that"},
        // {img: '/assets/MiddleSliderImages/arts/forSlider.png', description: "Society that"}
    ]
}

interface MiddleSliderProps{
    id: string
}

const MiddleSlider = (id : MiddleSliderProps) => {



    function SampleNextArrow(props: any) {
        const { onClick } = props;
        return (

            <img src="/assets/MiddleSliderImages/arts/Arrow.png" alt="" onClick={onClick} className={`${style.prevnext}, ${style.next}`} />
        );
    }

    function SamplePrevtArrow(props: any) {
        const { onClick } = props;
        return (

            <img src="/assets/MiddleSliderImages/arts/Arrow.png" alt="" onClick={onClick} className={`${style.prevnext}, ${style.prev}`} />
        );
    }

    const settings: Settings = {
        dots: true,
        arrows: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevtArrow />,
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
            {
                breakpoint: 500,
                settings: {
                    dots:false,
                    speed: 500,
                    slidesToShow: 2,
                    rows: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const a = useQuery(getExampleInfo, {
        variables: { artistId: id },
      });

      console.log(a.data?.artist.artworks[0].assetUrl)

    return (
        <div className={`${style.container} middle-slider-container`}>
            <div className={style.heading}>
                <h3 className={style.header}>Do you know about Ukrainian ART?</h3>
            </div>
            <div className={style.slide}>
                <Slider className={`${style.slider} middle-slider `} {...settings}>
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