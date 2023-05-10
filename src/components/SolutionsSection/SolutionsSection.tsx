import React from 'react';
import SolutionsBlock from "./SolutionsBlock";
import {ExamplesList} from "../ExamplesList/ExamplesList";
import {useQuery} from "@apollo/client";
import {getExamplesList} from "../MusicSection/queries";

const SolutionsSection = () => {
    const {data, loading} = useQuery(getExamplesList);
    return (
        <section>
            <SolutionsBlock/>
            <ExamplesList type={"authors"} onClick={()=>{}} data={data.artists}/>
        </section>
    );
};

export default SolutionsSection;