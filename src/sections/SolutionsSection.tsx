import React from 'react';
import SolutionsBlock from "../components/Solutions/SolutionsBlock";
import {ArtistList} from "../components/ArtistList/ArtistList";
import {useQuery} from "@apollo/client";
import {getExamplesList} from "../queries/artistQueries";

const SolutionsSection = () => {
    const {data, loading} = useQuery(getExamplesList);

    return (
        <section>
            <SolutionsBlock/>
            <ArtistList type={"authors"} onClick={()=>{}} data={data?.artists ?? []}/>
        </section>
    );
};

export default SolutionsSection;