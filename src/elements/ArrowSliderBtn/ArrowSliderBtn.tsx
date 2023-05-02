import React, {FC} from 'react';
import "./ArrowSliderBtn.scss"

interface PropType {
    direction: "left" | "right",
    handleOnClick(): void
}

const ArrowSliderBtn: FC<PropType> = ({direction, handleOnClick}) => {
    return (
        <div onClick={handleOnClick} className={`arrowSliderBtn arrowSliderBtn__${direction}`}/>
    );
};

export default ArrowSliderBtn;