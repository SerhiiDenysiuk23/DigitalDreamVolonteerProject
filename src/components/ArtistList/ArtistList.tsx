import styles from "./ArtistList.module.scss";
import React, { useEffect, useState } from "react";

interface ExamplesListProps {
  type: "authors" | "musicians" | 'brand';
  onClick: (id: string) => void,
  data: {
    id?: string,
    imageUrl?: string,
    name?: string,
    description?: string,
  }[]
  height?: number
}

export const ArtistList = ({ type, onClick, data, height }: ExamplesListProps) => {
  const [activeAuthor, setActiveAuthor] = React.useState<number>(0);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const blockHeight = type === 'brand' ? (windowWidth > 1024 ? (height ?? 835) : 'fit-content') : 'auto'
  
  return (
    <div className={`${styles.block} ${styles[type]}`} style={{ height: blockHeight }}>
      <div className={styles.overlay}></div>
      <ul className={styles.list}>
        {data?.map((item, index) => (
          <li
            key={item.id}
            className={activeAuthor === index ? styles.active : ""}
            onClick={() => {
              setActiveAuthor(index);
              onClick(item.id || '');
            }}
          >
            <div className={`${styles.pictureWrapper} ${styles[type]} ${activeAuthor === index ? styles.active : ""}`}>
              <img src={item.imageUrl} alt={`${item.name}`} loading="lazy" />
            </div>
            <div className={styles.infoWrapper} style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
              <h5 className={`${styles.title} ${styles[type]} ${activeAuthor === index ? styles.active : ""}`}>{item.name?.split(' ').join('\n')}</h5>
              {item.description && (
                <p className={`p-small ${styles.description}`}>
                  {item.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
