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
            <h3>Do you know about Ukrainian SOLUTIONS?</h3>
            {
                isShowArtists &&
                <ArtistList type={"authors"} onClick={() => {
                }} data={artists ?? []}/>
            }
            <div className={styles.solutionContainer}>
                <SolutionsSlider achievement={achievement}/>
                <SolutionsDescription achievement={achievement}/>
            </div>
        </div>
    );
};

export default SolutionsBlock;