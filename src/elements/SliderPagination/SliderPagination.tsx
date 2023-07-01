import React, {FC, useEffect, useLayoutEffect, useState} from 'react';

interface Props {
    dots: JSX.Element[],
    totalSlides: number,
    visibleSlides: number,
    currentSlide: number
    className?: string

}

const SliderPagination: FC<Props> = ({dots, totalSlides, visibleSlides, currentSlide, className}) => {
    const [state, setState] = useState(2)
    const [direction, setDirection] = useState(0)

    const startIndex = Math.max(currentSlide - state, 0);
    const endIndex = Math.min(startIndex + visibleSlides, totalSlides);

    let visibleDots = dots.slice(startIndex, endIndex);

    if (visibleDots.length < visibleSlides && currentSlide === totalSlides - 1) {
        const remainingDots = visibleSlides - visibleDots.length;
        const additionalDots = dots.slice(0, remainingDots);
        visibleDots = visibleDots.concat(additionalDots);
    }

    useEffect(()=>{
        switch (currentSlide){
            case totalSlides - 1:
                setState(visibleSlides - 1); break
            case totalSlides - 2:
                setState(visibleSlides - 2); break
            case 0:
            case 1:
                setState(1); break
            default: setState(Math.floor(visibleSlides / 2) - (visibleSlides % 2 == 0 ? direction : 0))
        }
    },[currentSlide])

    return (
        <ul className={className ?? ""}>
            {visibleDots.map((dot, index) => (
                <div key={index}
                    onClick={()=> {
                        if (index < (visibleSlides / 2))
                            setDirection(1)
                        else
                            setDirection(0)
                    }}
                >{dot}</div>
            ))}
        </ul>
    );
};

export default SliderPagination;