import React, {useEffect, useState} from 'react';
import SolutionsBlock from "../components/Solutions/SolutionsBlock";
import {ArtistList} from "../components/ArtistList/ArtistList";
import {useQuery} from "@apollo/client";
import {getExamplesList} from "../queries/artistQueries";

const SolutionsSection = () => {
    const {data, loading} = useQuery(getExamplesList);
    const [isShowArtists, setIsShowArtists] = useState<boolean>(window.innerWidth > 1198)

    window.onresize = () => {
        setIsShowArtists(window.innerWidth > 1198)
    }

    return (
        <section>
            <SolutionsBlock isShowArtists={!isShowArtists} artists={data?.artists}/>
            {
                isShowArtists &&
                <ArtistList type={"authors"} onClick={() => {
                }} data={data?.artists ?? []}/>
            }
        </section>
    );
};

export default SolutionsSection;