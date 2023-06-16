import React, {FC, useEffect, useState} from 'react';
import {ArtistList} from "../ArtistList/ArtistList";
import {useQuery} from "@apollo/client";
import {getCompanies} from "../../queries/companyQueries";
import {CompanyKind} from "../../types/Company";

const BrandList: FC<{handleClick(id: string): void, height?: number}> = ({handleClick, height}) => {
    const {data, loading} = useQuery(getCompanies, {variables:{data:{kinds: "Brand"} as CompanyKind}});

    const defaultActiveId = data?.companies[0]?.id ?? null;
    const [activeId, setActiveId] = useState(defaultActiveId);


    useEffect(() => {
        const defaultActiveId = data?.companies[0]?.id ?? null;
        setActiveId(defaultActiveId);
    }, [data]);


    useEffect(()=>{
        handleClick(activeId)
    }, [activeId])

    if (loading)
        return <div>Loading...</div>

    return (
        <ArtistList type={"brand"} onClick={setActiveId} data={data?.companies ?? []} height={height}/>
    );
};

export default BrandList;