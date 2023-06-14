import SliderItem from "./SliderItem/SliderItem"
import style from './MiddleSlider.module.scss'
import React from "react"
import { useState, useEffect, useRef, useCallback, RefObject } from "react"
import Slider, { InnerSlider, Settings } from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@apollo/client";
import { getArts, getExampleInfo } from "../../queries/artistQueries";
import Popup from "../../elements/Popup/Popup";
import { Artwork } from "../../types/Artwork"




interface Props {
    id: string
}

const MiddleSlider: React.FC<Props> = ({id}) => {
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const handleModal = () => setShowModal(prev => !prev);
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

    const [activeSlide, setActiveSlide] = React.useState<number>(0);


    const [slideCount, setSlideCount] = React.useState<number>(0);



    const settings: Settings = {
        dots: true,
        swipe: true,
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
                    swipe: true,
                    speed: 500,
                    slidesToShow: 2,
                    rows: 2,
                    slidesToScroll: 1,
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
                    afterChange: current => setActiveSlide(current)
                }
            },
        ]
    };


    
    // const [hasScrolled, setHasScrolled] = useState(false);
    // const handleSlideClick = () => {
    //     if (!hasScrolled) {
    //       setShowModal(true);
    //     }
    //   };
    // const handleMouseDown = () => {
    //     setHasScrolled(false);
    //   };
    
    //   const handleScroll = () => {
    //     setHasScrolled(true);
    //   };
   
    // const data = useQuery(getExampleInfo, { variables: { artistId: id },});
    console.log("ID -" +id );
    
      const{data}  = useQuery(getArts,{variables:{artistId: id}});
      console.warn(data?.artist.artworks);
    //   const artist = data?.artist as Artwork[]
      const [artist, setArtist] = useState<Artwork[]>([])

    useEffect(()=>{
        data?.artist&&
        setArtist(data?.artist.artworks);
    },[data])

    return (
        <div className={`${style.container} middle-slider-container`}>
            <div className={style.heading}>
                <h3 className={style.header}>Do you know about Ukrainian <span>ART</span>?</h3>
            </div>
            <div className={style.slide}>

                <div className={style.slideCount}> {activeSlide + 1} / {artist.length}</div>

                <Slider className={`${style.slider} middle-slider `} {...settings}>

                    {!!artist.length&&
                        artist.map((item:Artwork) => (
                            <SliderItem key={item.id} image={item.assetUrl} description={item.description} handleClick={handleModal} />
                         ))
                        // sliderItems.arts.map(item => (
                        //    <SliderItem key={item.img} image={item.img} description={item.description} handleClick={handleModal} />
                        // ))
                    }


                </Slider>


            </div>
            {showModal && <Popup data={arts} handleModal={handleModal} />}
        </div>
    )
}

export default MiddleSlider;