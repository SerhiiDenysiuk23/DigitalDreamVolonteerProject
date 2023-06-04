import React from 'react';
import SolutionsBlock from "../components/Solutions/SolutionsBlock";
import {ArtistList} from "../components/ArtistList/ArtistList";
import {useQuery} from "@apollo/client";
import {getExamplesList} from "../queries/artistQueries";
import {useWindowWidth} from "../hooks/useWindowWidth";

const SolutionsSection = () => {
    const {data, loading} = useQuery(getExamplesList);

    const winWidth = useWindowWidth()
    const breakpoint = 1023

    return (
        <section>
            <SolutionsBlock isShowArtists={(winWidth < breakpoint)} artists={data?.artists}/>
            {
                (winWidth > breakpoint) &&
                <ArtistList type={"authors"} onClick={() => {
                }} data={data?.artists ?? []}/>
            }
        </section>
    );
};

export default SolutionsSection;