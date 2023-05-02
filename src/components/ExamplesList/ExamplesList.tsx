import styles from "./ExamplesList.module.scss";
import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { ExamplesBlock } from "../../elements/ExamplesBlock/ExamplesBlock";

interface Example {
  id: number;
  title: string;
  picture: string;
  description?: string;
  audio?: string;
}

interface ExamplesListProps {
  data: Example[];
  type: "tracks" | "authors" | "genres";
}

export const ExamplesList = ({ data, type }: ExamplesListProps) => {
  const [activeAuthor, setActiveAuthor] = React.useState<number>();
  return (
    <ExamplesBlock>
      <ul className={styles.list}>
        {data.map((item, index) => (
          <li
            key={item.id}
            className={activeAuthor === index ? styles.active : ""}
            onClick={() => setActiveAuthor(index)}
          >
            <div className={`${styles.pictureWrapper} ${styles[type]}`}>
              <img src={item.picture} alt={`${item.title}`} loading="lazy" />
            </div>
            <div style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
              <h4 className={`title ${styles[type]}`}>{item.title}</h4>
              {item.description && (
                <p className={`p-small ${styles.description}`}>
                  {item.description}
                </p>
              )}
            </div>
            {item.audio && (
              <button className={styles.playButton}>
                <BsFillPlayCircleFill color="#FED501" size="100%" />
              </button>
            )}
          </li>
        ))}
      </ul>
    </ExamplesBlock>
  );
};
