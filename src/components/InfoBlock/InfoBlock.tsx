import styles from "./InfoBlock.module.scss";

import { BsWikipedia } from "react-icons/bs";
import { useQuery } from "@apollo/client";
import { getExampleInfo } from "../MusicSection/queries";
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
    <>
      <div className={styles.blockWrapper}><div className={styles.overlay}></div>
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
            <p className={`p-small ${styles.paragraph}`} key={fragment.slice(0, -1)}>{fragment.slice(0, -1)}</p>
          ))}
          <div className={styles.socialLinks}>
            {q.data?.artist.links.map((l: string) => <a key={l} href={l}><BsWikipedia size={30} /></a>)}
          </div>
        </div>
      </div>
      {/* {showModal && <Modal data={q.data.artist} onClose={() => setShowModal(false)}/>} */}
    </>
  );
};
