import style from './Paginator.module.scss'
import React, {FC} from "react";

type Props = {
    currentSlide: number,
    slideCount: number,
    prev(): void,
    next(): void,
    goTo(index: number): void
}


const Paginator: FC<Props> = ({prev, next, goTo, currentSlide, slideCount}) => {
    const dots = Array.from({length: slideCount});

    return (
        <div className={style.container}>
            <img onClick={prev} src="/assets/MiddleSliderImages/arts/Arrow.png" alt=""/>
            <ul className={style.dots}>
                {
                    dots.map((_, index) => (
                        <li
                            key={index}
                            className={`dot ${index === currentSlide ? "active" : "inactive"}`}
                            onClick={() => {
                                goTo(index);
                            }}
                        />
                    ))
                }
            </ul>
            <img onClick={next} className={style.right} src="/assets/MiddleSliderImages/arts/Arrow.png" alt=""/>
        </div>

    )
}


export default Paginator;