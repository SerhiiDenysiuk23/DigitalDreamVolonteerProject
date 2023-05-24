import React, {FC} from 'react';
import styles from "./styles/BrandsSection.module.scss"
import {FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";

const BrandsDescription: FC<{achievement: string}> = ({achievement}) => {
    const description = "™ byMe – це команда, яка цінує дружбу й розвиток; це покупці, які цінують щирість і надійність; це вклад кожного з нас у країну нашої мрії. Тому сьогодні byMe – місце нашого розвитку і вашого натхнення. Місце, де речі мають значення. Бо кожна капсульна колекція несе свою думку до людей."
    const address = "А серце – byMe у шоурумі. Шукай нас тут:\n" +
        `м. Київ, вул. Хрещатик 46, 2 поверх.`
    const title = "TM byMe"
    const slogan = "З А К О Х У В А Т И"
    const links = ["","","byme.ua"]
    return (
        <div className={styles.brandDescription}>
            <h2>{title}</h2>
            <div className={styles.slogan}>{slogan}</div>
            <p className={"p-18-hind " + styles.description}>{description}</p>
            <div className={styles.address}>{address}</div>
            <div className={styles.links}>
                <a className={styles.facebook} href={links[0]}><FaFacebookSquare/></a>
                <a className={styles.instagram} href={links[1]}><FaInstagramSquare/></a>
                <a href={links[2]}>{links[2]}</a>
            </div>
        </div>
    );
};

export default BrandsDescription;