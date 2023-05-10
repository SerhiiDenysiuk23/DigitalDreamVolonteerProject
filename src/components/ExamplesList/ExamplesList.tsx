import styles from "./ExamplesList.module.scss";
import React from "react";

interface ExamplesListProps {
  type: "authors" | "musicians";
  onClick: (id: string ) => void,
  data: {
    id?: string,
    picture?: string,
    name?: string,
    description?: string,
  }[]
}

export const ExamplesList = ({ type, onClick, data }: ExamplesListProps) => {
  const [activeAuthor, setActiveAuthor] = React.useState<number>(0);
  return (
    <div className={styles.block}>
      <div className={styles.overlay}></div>
      <ul className={styles.list}>
        {data.map((item, index) => (
          <li
            key={item.id}
            className={activeAuthor === index ? styles.active : ""}
            onClick={() => {
              setActiveAuthor(index);
              onClick(item.id || '');
            }}
          >
            <div className={`${styles.pictureWrapper} ${styles[type]}`}>
              <img src={item.picture} alt={`${item.name}`} loading="lazy" />
            </div>
            <div style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
              <h5 className={`title ${styles[type]}`}>{item.name}</h5>
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
