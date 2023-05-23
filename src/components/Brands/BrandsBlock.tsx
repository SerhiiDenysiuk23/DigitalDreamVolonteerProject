import React, {FC} from 'react';
import {ArtistList} from "../ArtistList/ArtistList";
import styles from './styles/BrandsSection.module.scss'
import BrandsSlider from "./BrandsSlider";
import BrandsDescription from "./BrandsDescription";


const BrandsBlock: FC<{ artists: any[], isShowArtists: boolean }> = ({artists, isShowArtists}) => {
    const achievement = "In two rounds, Grammarly raised $ 200 million. Forbes experts estimated the company at $ 2.5 billion."


    return (
        <div className={`${styles.brandBlock} main-block`}>
            <h3>Do you know about Ukrainian Brands?</h3>
            {
                isShowArtists &&
                <ArtistList type={"authors"} onClick={() => {
                }} data={artists ?? []}/>
            }
            <div className={styles.brandContainer}>
                <BrandsSlider achievement={achievement}/>
                <BrandsDescription achievement={achievement}/>
            </div>
        </div>
    );
};

export default BrandsBlock;