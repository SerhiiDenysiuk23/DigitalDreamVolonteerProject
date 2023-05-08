import styles from "./ExamplesList.module.scss";
import React from "react";
import { data } from "./data";

interface ExamplesListProps {
  type: "authors" | "musicians";
}

export const ExamplesList = ({ type }: ExamplesListProps) => {
  const [activeAuthor, setActiveAuthor] = React.useState<number>();
  return (
    <div className={styles.block}>
      <div className={styles.overlay}></div>
      <ul className={styles.list}>
        {data.map((item, index) => (
          <li
            key={item.id}
            className={activeAuthor === index ? styles.active : ""}
            onClick={() => setActiveAuthor(index)}
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
