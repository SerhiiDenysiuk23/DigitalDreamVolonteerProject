import React, {CSSProperties} from 'react';
import SolutionsSlider from "./SolutionsSlider";
import SolutionsDescription from "./SolutionsDescription";

const flexStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "91px 0 137px"
}

const SolutionsSection = () => {
    return (
        <section className={"solution-section"}>
            <h3>Do you know about Ukrainian SOLUTIONS?</h3>
            <div style={flexStyle}>
                <SolutionsSlider/>
                <SolutionsDescription/>
            </div>
        </section>
    );
};

export default SolutionsSection;