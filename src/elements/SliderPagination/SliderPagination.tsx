import React, {FC, useState} from 'react';

interface Props {
    dots: JSX.Element[],
    totalSlides: number,
    visibleSlides: number,
    currentSlide: number
    className?: string

}

const SliderPagination: FC<Props> = ({dots, totalSlides, visibleSlides, currentSlide, className}) => {
    const [state, setState] = useState(2)

    const startIndex = Math.max(currentSlide - state, 0);
    const endIndex = Math.min(startIndex + visibleSlides, totalSlides);

    let visibleDots = dots.slice(startIndex, endIndex);

    if (visibleDots.length < visibleSlides && currentSlide === totalSlides - 1) {
        const remainingDots = visibleSlides - visibleDots.length;
        const additionalDots = dots.slice(0, remainingDots);
        visibleDots = visibleDots.concat(additionalDots);
    }

    return (
        <ul className={className ?? ""}>
            {visibleDots.map((dot, index) => (
                <div key={index}
                    onClick={()=> {
                        if (dot == dots[totalSlides - 1]){
                            setState(3)
                            return
                        }

                        switch (index) {
                            case 0:
                            case 1:
                                setState(1)
                                break;
                            case 2:
                            case 3:
                                setState(2)
                                break;
                        }
                    }}
                >{dot}</div>
            ))}
        </ul>
    );
};

export default SliderPagination;