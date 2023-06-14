import React from 'react';
import SolutionsBlock from "../components/Solutions/SolutionsBlock";
import {ArtistList} from "../components/ArtistList/ArtistList";
import {useQuery} from "@apollo/client";
import {useWindowWidth} from "../hooks/useWindowWidth";
import { getCompanies } from '../queries/companyQueries';

const SolutionsSection = () => {
    const {data, loading} = useQuery(getCompanies, {variables: {data: {kinds: 'Company'}}});

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