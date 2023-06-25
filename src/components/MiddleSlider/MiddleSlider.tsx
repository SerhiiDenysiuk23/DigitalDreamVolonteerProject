import SliderItem from "./SliderItem/SliderItem"
import style from './MiddleSlider.module.scss'
import React from "react"
import { useState, useEffect, useRef, useCallback, RefObject } from "react"
import Slider, { InnerSlider, Settings } from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@apollo/client";
import { getArts,getArtistInfo } from "../../queries/artistQueries";
import Popup from "../../elements/Popup/Popup";
import { Artwork } from "../../types/Artwork";
import Error from "../Error/Error"





interface Props {
    id: string
}

const MiddleSlider: React.FC<Props> = ({ id }) => {
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [activeSlide, setActiveSlide] = React.useState<number>(0);
    const [artist, setArtist] = useState<Artwork[]>([])
    const { data ,error} = useQuery(getArtistInfo, { variables: { artistId: id } });
    const handleModal = () => setShowModal(!showModal);
    const sliderRef = useRef<Slider>(null)

    let arts = {
        name: '',
        description: '',
        link: ''
    }




    function SampleNextArrow(props: any) {
        const { onClick } = props;
        return (

            <img src="/assets/MiddleSliderImages/arts/Arrow-1.png" alt="" onClick={onClick} className={`${style.prevnext}, ${style.next}`} />
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
        swipe: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 2,
        beforeChange: (current, next) => setActiveSlide(next),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevtArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    swipe: true,
                    speed: 500,
                    slidesToShow: 2,
                    rows: 2,
                    slidesToScroll: 1,
                    beforeChange: (current, next) => setActiveSlide(next),
                }
            },
            {
                breakpoint: 500,
                settings: {
                    centerMode: true,
                    centerPadding: "25px",
                    swipe: true,
                    dots: false,
                    speed: 500,
                    slidesToShow: 1,
                    rows: 1,
                    slidesToScroll: 1,
                    // afterChange: current => setActiveSlide(current)
                    beforeChange: (current, next) => setActiveSlide(next)
                }
            },
        ]
    };

    useEffect(() => {
        
        data?.artist &&
            setArtist(data?.artist.artworks);
            setActiveSlide(0)
    }, [data])

    useEffect(() => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(activeSlide); 
        }
      }, [activeSlide]);

    if(error){
        return(
            <div className={`${style.container} middle-slider-container`}>
                <Error/>
            </div>
        )
    }else{
        return (
            <div className={`${style.container} middle-slider-container`}>
                <div className={style.heading}>
                    <h3 className={style.header}>Do you know about Ukrainian <span>ART</span>?</h3>
                </div>
                <div className={style.slide}>
                    <div className={style.slideCount}> {activeSlide + 1} / {artist.length}</div>
                    <Slider ref={sliderRef} className={`${style.slider} middle-slider `} {...settings}>
    
                        {!!artist.length &&
                            artist.map((item: Artwork) => (
                                <SliderItem  key={item.id} image={item.assetUrl} description={item.title} handleClick={handleModal} />
                            ))
                        }
                    </Slider>
                </div>
                {showModal && <Popup data={arts} handleModal={handleModal} />}
                
                
            </div>
        )
    }

}

export default MiddleSlider;