import React, {CSSProperties} from 'react';
import SolutionsDescription from "./SolutionsDescription";
import SolutionsSlider from "./SolutionsSlider";
import styles from './SolutionsSection.module.scss'


const SolutionsBlock = () => {
    const achievement = "In two rounds, Grammarly raised $ 200 million. Forbes experts estimated the company at $ 2.5 billion."

    return (
        <div className={`${styles.solutionBlock} main-block`}>
            <h3>Do you know about Ukrainian SOLUTIONS?</h3>
            <div className={styles.solutionContainer}>
                <SolutionsSlider achievement={achievement}/>
                <SolutionsDescription achievement={achievement}/>
            </div>
        </div>
    );
};

export default SolutionsBlock;