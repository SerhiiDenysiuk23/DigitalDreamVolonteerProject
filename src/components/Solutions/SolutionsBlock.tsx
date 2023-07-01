import React, {CSSProperties, FC, useState} from 'react';
import SolutionsDescription from "./SolutionsDescription";
import SolutionsSlider from "./SolutionsSlider";
import styles from './styles/SolutionsSection.module.scss'
import {ArtistList} from "../ArtistList/ArtistList";
import {Artist} from "../../types/Artist";


const SolutionsBlock: FC<{ artists: any[], isShowArtists: boolean }> = ({artists, isShowArtists}) => {
    const achievement = "In two rounds, Grammarly raised $ 200 million. Forbes experts estimated the company at $ 2.5 billion."


    return (
        <div className={`${styles.solutionBlock} main-block`}>
            <h3>Do you know about Ukrainian <span>SOLUTIONS?</span></h3>
            {
                isShowArtists &&
                <ArtistList type={"authors"} onClick={() => {
                }} data={artists ?? []}/>
            }
            <div className={styles.solutionContainer}>
                <SolutionsSlider achievement={achievement}/>
                <SolutionsDescription achievement={achievement}/>
            </div>

            <div className={`${styles.solutionContainer} ${styles.maxW1279}`}>
                <p className={"p-18-hind " + styles.starBefore}><img src="./assets/icons/star.svg" alt=""/>{achievement}
                </p>
                <a className={styles.moreDetails} href="#">
                    <div>More details <span>→</span></div>
                </a>
            </div>
        </div>
    );
};

export default SolutionsBlock;