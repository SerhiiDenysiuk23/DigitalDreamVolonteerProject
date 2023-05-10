import styles from "./InfoBlock.module.scss";

import { BsWikipedia } from "react-icons/bs";
import { useQuery } from "@apollo/client";
import {getExampleInfo} from "../../queries/artistQueries";

interface InfoBlockProps {
  type: "author" | "musician" | "band";
  id: string
}

let formatParagraph: (text: string) => string[];

formatParagraph = (text) => {
  const fragments = text.split(".").map((element, index, array) => {
    if (index % 2 === 0) {
      return `${element}.${array[index + 1] || ""}`;
    } else return "";
  });
  console.log(fragments);

  return fragments.filter((el) => el !== "" && el !== ".");
};

export const InfoBlock = ({ type, id }: InfoBlockProps) => {
  const q = useQuery(getExampleInfo, {
    variables: { artistId: id },
  });

  return (
    <div className={styles.block}>
      <div className={`${styles.pictureWrapper} ${styles[type]}`}>
        <img
          alt={`${q.data?.artist.name || ''}`}
          // src={picture}
          className={styles.picture}
          loading="lazy"
        />
      </div>
      <h4 className={`${styles.title} ${styles[type]}`}>{q.data?.artist.name || ''}</h4>
      {/* {subtitle && <h5 className={styles.subtitle}>{subtitle}</h5>} */}
      {formatParagraph(q.data?.artist.description || '').map((fragment) => (
        <p className={`p-small ${styles.paragraph}`}>{fragment.slice(0, -1)}</p>
      ))}
      <ul className={styles.socialLinks}>
        {q.data?.artist.links.map((l: string) => <a key={l} href={l}><BsWikipedia size={30} /></a>)}
      </ul>
    </div>
  );
};
