import React, {FC, useEffect, useState} from 'react';
import styles from "./styles/BrandsSection.module.scss"
import {Company, Link} from "../../types/Company";

interface LinkWithIcon extends Link {
    iconUrl?: string
}

const BrandsDescription: FC<{ company: Company }> = ({company}) => {
    const [links, setLinks] = useState<LinkWithIcon[]>([])

    const address = "А серце – byMe у шоурумі. Шукай нас тут:\n" +
        `м. Київ, вул. Хрещатик 46, 2 поверх.`


    useEffect(() => {
        if (!company.links) {
            setLinks([])
            return
        }

        const linksWithIcon: LinkWithIcon[] = company.links.map((item) => {
            switch (item.kind) {
                case "Facebook":
                    return {...item, iconUrl: "./assets/icons/facebook.png"};
                case "Instagram":
                    return {...item, iconUrl: "./assets/icons/instagram.png"};
                case "Telegram":
                    return {...item, iconUrl: "./assets/icons/telegram.png"};
                case "WhatsApp":
                    return {...item, iconUrl: "./assets/icons/whatsapp.png"};
                case "Site":
                    return {...item}
            }
        })
        setLinks(linksWithIcon.sort((a, b) => {
            if (a.kind === "Site") return 1;
            if (b.kind === "Site") return -1;
            return 0;
        }))
    }, [company])

    return (
        <div className={styles.brandDescription}>
            <h2>{company.name}</h2>
            <p className={"p-18-hind " + styles.description}>{company.description}</p>
            <div className={styles.address}>{address}</div>
            <div className={styles.links}>
                {
                    links.map((item) =>
                        item.kind == "Site"
                            ? <a target="_blank" key={item.url} href={item.url}>{item.url.split("//")[1].split("/")[0]}</a>
                            : <a target="_blank" key={item.url} href={item.url}><img src={item?.iconUrl} alt={item.kind}/></a>
                    )
                }
            </div>
        </div>
    );
};

export default BrandsDescription;