import React, {FC} from 'react';
import "./ArrowSliderBtn.scss"

interface PropType {
    direction: "left" | "right",
    btnType?: "" | "big" | "shifted"
    onClick?(): void
}

const ArrowSliderBtn: FC<PropType> = ({direction, onClick, btnType = ""}) => {
    return (
        <div onClick={onClick} className={`arrowSliderBtn arrowSliderBtn__${direction} ${btnType}`}/>
    );
};

export default ArrowSliderBtn;