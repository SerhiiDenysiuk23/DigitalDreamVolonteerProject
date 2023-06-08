import React, {useEffect, useState} from 'react';
import {ArtistList} from "../components/ArtistList/ArtistList";
import {useQuery} from "@apollo/client";
import BrandsBlock from "../components/Brands/BrandsBlock";
import {useWindowWidth} from "../hooks/useWindowWidth";
import {getCompanies} from "../queries/companyQueries";
import {CompanyKind} from "../types/Company";
import BrandList from "../components/Brands/BrandList";

const BrandsSection = () => {

    const winWidth = useWindowWidth()
    const breakpoint = 1023

    const [activeId, setActiveId] = useState<string | null>(null)

    const handleCompanyChange = (id: string) => {
        console.warn(id)
        setActiveId(id)
    }

    return (
        <section>
            <BrandsBlock isShowArtists={(winWidth < breakpoint)}
                         activeId={activeId ?? ""}
                         handleCompanyChange={handleCompanyChange}/>
            {
                (winWidth > breakpoint) &&
                <BrandList handleClick={handleCompanyChange}/>
                // <ArtistList type={"authors"} onClick={setActiveId} data={data?.companies ?? []}/>
            }
        </section>
    );
}
;

export default BrandsSection;