import React, {FC, useRef, useEffect, useLayoutEffect, useState} from 'react';
import styles from './styles/BrandsSection.module.scss'
import BrandsSlider from "./BrandsSlider";
import BrandsDescription from "./BrandsDescription";
import BrandList from "./BrandList";
import { useQuery } from "@apollo/client";
import { getCompany } from "../../queries/companyQueries";

interface Props {
    activeId: string,
    isShowArtists: boolean,
    handleCompanyChange(id: string): void,
    setHeight: (height: number) => void
}

const BrandsBlock: FC<Props> = ({ handleCompanyChange, activeId, isShowArtists, setHeight }) => {
    const { data, loading } = useQuery(getCompany, { variables: { companyId: activeId } });

    const blockRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (blockRef.current) {
            setHeight(blockRef?.current?.clientHeight);
        }
    }, [blockRef?.current?.clientHeight])

    return (
        <div className={`${styles.brandBlock} main-block`} ref={blockRef}>
            <h3>Do you know about Ukrainian <span>Brands</span>?</h3>
            {
                isShowArtists &&
                <BrandList handleClick={handleCompanyChange} />

            }
            {
                !!data?.company &&
                <div className={styles.brandContainer}>
                    <BrandsSlider company={data?.company} />
                    <BrandsDescription company={data?.company} />
                </div>
            }
        </div>
    );
};

export default BrandsBlock;