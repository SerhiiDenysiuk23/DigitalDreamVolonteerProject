import React, {FC} from 'react';
import styles from './styles/BrandsSection.module.scss'
import BrandsSlider from "./BrandsSlider";
import BrandsDescription from "./BrandsDescription";
import BrandList from "./BrandList";
import {useQuery} from "@apollo/client";
import {getCompany} from "../../queries/companyQueries";

interface Props{
    activeId: string,
    isShowArtists: boolean,
    handleCompanyChange(id: string): void
}

const BrandsBlock: FC<Props> = ({handleCompanyChange, activeId, isShowArtists}) => {
    const {data, loading} = useQuery(getCompany, {variables:{companyId: activeId}});

    // if (loading)
    //     return <div>Loading...</div>

    return (
        <div className={`${styles.brandBlock} main-block`}>
            <h3>Do you know about Ukrainian <span>Brands</span>?</h3>
            {
                isShowArtists &&
                    <BrandList handleClick={handleCompanyChange}/>

            }
            {
                !!data?.company &&
                <div className={styles.brandContainer}>
                    <BrandsSlider company={data?.company}/>
                    <BrandsDescription company={data?.company}/>
                </div>
            }
        </div>
    );
};

export default BrandsBlock;