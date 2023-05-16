import React, {FC, useEffect, useState} from 'react';
import styles from "./placesSection.module.scss"
import PlaceChangeSlider from "./PlaceChangeSlider";

import {default as testData} from "../../testDataPlaces.json";


const googleMapURL = "https://www.google.com/maps/search/?api=1&query="

const PlaceInfo: FC<{handlePlacePhotosChange(elemId: string): void}> = ({handlePlacePhotosChange}) => {
    const [id, setId] = useState<string>("test1") //("")
    // const {data, loading, refetch} = useQuery(query, {variables: {id}})

    const [data, setData] = useState<Place | undefined>(testData.find(item => item.id == id)) //("")


    const handlePlaceChange = (elemId: string) => {
        setId(elemId)
        handlePlacePhotosChange(elemId)
    }

    useEffect(()=>{
        // refetch({id})
        setData(testData.find(item => item.id == id))
    },[id])

    return (
        <div className={`${styles.placeInfoContainer} main-block`}>
            <h3>Do you know about Ukrainian Places?</h3>

            <div className={styles.placeInfo}>
                {
                    !!data &&
                    <div>
                        <h2>{data.name}</h2>
                        <p className="p-large">{data.description}</p>
                        <a target="_blank"
                           className={styles.geo}
                           href={googleMapURL + data.geo.replace('+', '%2B')}
                        >
                            {data.geo}
                        </a>
                    </div>
                }
                <PlaceChangeSlider handleOnClick={handlePlaceChange}/>
            </div>
        </div>
    );
}

export default PlaceInfo;