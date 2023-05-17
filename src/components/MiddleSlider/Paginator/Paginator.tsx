import { log } from 'console';
import style from './Paginator.module.scss'
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";

type Props = {
    currentSlide: number,
    slideCount: number,
    prev(): void,
    next(): void,
    goTo(index: number): void
}


const Paginator: FC<Props> = ({ prev, next, goTo, currentSlide, slideCount }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleIndexes, setVisibleIndexes] = useState<number[]>([0, 1, 2, 3]);

    // const handleDotClick = (index: number) => {
    //     setActiveIndex(index);
    //     const half = Math.floor(visibleIndexes.length / 2);
    //     const offset = index - half;
    //     setVisibleIndexes(visibleIndexes.map((i: number) => i + offset));
        
    // };
    const handleDotClick = (index:number) => {
        setActiveIndex(index);
        if (index >= 2) {
           
          setVisibleIndexes([
            index - 2,
            index - 1,
            index,
            index + 1,
          ]);
        } else {
          setVisibleIndexes([0, 1, 2, 3]);
        }
      };




    const dots = Array.from({ length: slideCount });

    // const dotsArray = dots.map((_, index) => (
    //     <li
    //         key={index}
    //         className={`dot ${index === currentSlide ? "active" : " "}`}
    //         onClick={() => {
    //             goTo(index);
    //             handleDotClick(index)
    //         }}

    //     />
    // ))
    const handlePrevClick = () => {
        if (activeIndex > 0) {
          setActiveIndex(activeIndex - 1);
          if (activeIndex === 2) {
            setVisibleIndexes([0, 1, 2, 3]);
          }
        }
      };

      const handleNextClick = () => {
        if (activeIndex < dots.length - 1) {
          setActiveIndex(activeIndex + 1);
          if (activeIndex === 1) {
            setVisibleIndexes([0, 1, 2, 3]);
          }
        }
      };





    const prevBtn = useRef<HTMLImageElement>(null)
    const nextBtn = useRef<HTMLImageElement>(null)
    const dotsRef = useRef<HTMLUListElement>(null)
    const dotsContainer = dotsRef.current;




    // prevBtn.current?.addEventListener('click', () => {

    //     dotsContainer!.style.transform += `translateX(+15px)`;
    // });
    // nextBtn.current?.addEventListener('click', () => {

    //     dotsContainer!.style.transform += `translateX(-15px)`;
    // });








    return (
        <div className={style.container}>
            <img id='prevBtn' onClick={() => {
                prev()
                handlePrevClick()
            }

            } src="/assets/MiddleSliderImages/arts/Arrow.png" alt="" ref={prevBtn} />
            <div className={style.dotsContainer}>
                <ul className={style.dots} ref={dotsRef}>

                    {
                        // dots.map((_, index) => (
                        //     <li
                        //         key={index}
                        //         className={`dot ${index === currentSlide ? "active" : " "}`}
                        //         onClick={() => {
                        //             goTo(index);
                        //             handleDotClick(index)
                        //         }}

                        //     />
                        // ))

                        visibleIndexes.map((i: number) => (
                            <li
                                key={i}
                                className={`dot ${i === currentSlide ? "active" : " "}`}
                                onClick={() => {
                                    goTo(i);
                                    handleDotClick(i)
                                }}

                            />
                        ))

                    }
                </ul>
            </div>

            <img id='nextBtn' onClick={() => {
                next()
                handleNextClick()
            }} className={style.right} src="/assets/MiddleSliderImages/arts/Arrow.png" alt="" ref={nextBtn} />

        </div>


    )


}


export default Paginator;