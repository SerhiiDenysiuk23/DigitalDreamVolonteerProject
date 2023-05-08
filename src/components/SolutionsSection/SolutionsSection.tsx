import React, {CSSProperties} from 'react';
import SolutionsDescription from "./SolutionsDescription";
import SolutionsSlider from "./SolutionsSlider";
import styles from './SolutionsSection.module.scss'

const flexStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "91px 0 137px",
    borderRadius: "inherit"
}

const SolutionsSection = () => {
    return (
        <div className={`${styles.solutionSection} main-block`}>
            <h3>Do you know about Ukrainian SOLUTIONS?</h3>
            <div style={flexStyle}>
                <SolutionsSlider/>
                <SolutionsDescription/>
            </div>
        </div>
    );
};

export default SolutionsSection;