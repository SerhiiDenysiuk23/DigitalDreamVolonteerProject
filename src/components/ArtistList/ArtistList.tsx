import styles from "./ArtistList.module.scss";
import React, { useEffect, useState } from "react";

interface ExamplesListProps {
  type: "authors" | "musicians";
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

  const blockHeight = windowWidth > 1024 ? (height ?? 835) : 'fit-content'
  
  return (
    <div className={styles.block} style={{ height: blockHeight }}>
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
            <div className={`${styles.pictureWrapper} ${styles[type]}`}>
              <img src={item.imageUrl} alt={`${item.name}`} loading="lazy" />
            </div>
            <div style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
              <h5 className={`${styles.title} ${styles[type]}`}>{item.name}</h5>
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
