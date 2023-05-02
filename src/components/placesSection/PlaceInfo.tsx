import React from 'react';
import styles from "./placesSection.module.scss"
import PlaceChangeSlider from "./PlaceChangeSlider";

const PlaceInfo = () => {

    const description = "The Tunnel of Love (Ukrainian: Туне́ль Коха́ння, Tunel Kokhannya) is a section of industrial railway located near Klevan, Ukraine, that links it with Orzhiv. It is a railway surrounded by green arches[1] and is three to five kilometers in length. It is known for being a favorite place for couples to take walks since trains pass thrice a day."
    const geo = "Q22V+6H Клевань, Рівненська область, Україна"

    return (
        <section className={styles.placeInfo}>
            <h3>Do you know about Ukrainian MUSIC?</h3>
            <h2>Tunnel of Love</h2>
            <p className="p-large">{description}</p>
            <a className={styles.geo} href={"geo:"+geo}>{geo}</a>
            <PlaceChangeSlider/>
        </section>
    );
}

export default PlaceInfo;