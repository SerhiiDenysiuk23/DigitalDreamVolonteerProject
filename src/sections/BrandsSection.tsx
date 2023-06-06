import React, {useEffect, useState} from 'react';
import {ArtistList} from "../components/ArtistList/ArtistList";
import {useQuery} from "@apollo/client";
import {getExamplesList} from "../queries/artistQueries";
import BrandsBlock from "../components/Brands/BrandsBlock";
import {useWindowWidth} from "../hooks/useWindowWidth";

const BrandsSection = () => {
    const {data, loading} = useQuery(getExamplesList);

    const winWidth = useWindowWidth()
    const breakpoint = 1023

    return (
        <section>
            <BrandsBlock isShowArtists={(winWidth < breakpoint)} artists={data?.artists}/>
            {
                (winWidth > breakpoint) &&
                <ArtistList type={"authors"} onClick={() => {
                }} data={data?.artists ?? []}/>
            }
        </section>
    );
};

export default BrandsSection;