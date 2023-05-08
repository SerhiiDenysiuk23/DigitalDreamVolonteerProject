import React, {CSSProperties} from 'react';
import SolutionsDescription from "./SolutionsDescription";
import SolutionsSlider from "./SolutionsSlider";

const flexStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "91px 0 137px",
    borderRadius: "inherit"
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