import React, {useEffect, useState} from 'react';
import {ArtistList} from "../components/ArtistList/ArtistList";
import {useQuery} from "@apollo/client";
import {getExamplesList} from "../queries/artistQueries";
import BrandsBlock from "../components/Brands/BrandsBlock";

const BrandsSection = () => {
    const {data, loading} = useQuery(getExamplesList);
    const [isShowArtists, setIsShowArtists] = useState<boolean>(window.innerWidth > 1198)

    window.onresize = () => {
        setIsShowArtists(window.innerWidth > 1198)
    }

    return (
        <section>
            <BrandsBlock isShowArtists={!isShowArtists} artists={data?.artists}/>
            {
                isShowArtists &&
                <ArtistList type={"authors"} onClick={() => {
                }} data={data?.artists ?? []}/>
            }
        </section>
    );
};

export default BrandsSection;