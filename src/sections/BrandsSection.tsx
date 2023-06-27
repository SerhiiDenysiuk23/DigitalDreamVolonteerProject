import React, { useEffect, useState } from 'react';
import { ArtistList } from "../components/ArtistList/ArtistList";
import { useQuery } from "@apollo/client";
import BrandsBlock from "../components/Brands/BrandsBlock";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { getCompanies } from "../queries/companyQueries";
import { CompanyKind } from "../types/Company";
import BrandList from "../components/Brands/BrandList";

const BrandsSection = () => {

    const winWidth = useWindowWidth()
    const breakpoint = 1023

    const [activeId, setActiveId] = useState<string | null>(null)

    const [brandBlockHeight, setBrandBlockHeight] = useState(835)

    const handleCompanyChange = (id: string) => {
        setActiveId(id)
    }

    const handleBlockHeightChange = (height: number) => {
        setBrandBlockHeight(height)
    }

    return (
        <section id={"brend"}>
            <BrandsBlock isShowArtists={(winWidth < breakpoint)}
                activeId={activeId ?? ""}
                handleCompanyChange={handleCompanyChange} setHeight={handleBlockHeightChange} />
            {
                (winWidth > breakpoint) &&
                <BrandList handleClick={handleCompanyChange} height={brandBlockHeight} />
                // <ArtistList type={"authors"} onClick={setActiveId} data={data?.companies ?? []}/>
            }
        </section>
    );
}
    ;

export default BrandsSection;