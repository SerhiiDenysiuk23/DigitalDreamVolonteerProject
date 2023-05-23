import styles from "./InfoBlock.module.scss";
import React from 'react'
import { BsWikipedia } from "react-icons/bs";
import { useQuery } from "@apollo/client";
import { getExampleInfo } from "../../queries/artistQueries";
import Popup from "../../elements/Popup/Popup";
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
 
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleModal = () => setShowModal(prev => !prev);

  return (
    <>
      <div className={styles.blockWrapper} onClick={handleModal}><div className={styles.overlay}></div>
        <div className={styles.block}>
          <div className={`${styles.pictureWrapper} ${styles[type]}`}>
            <img
              alt={`${q.data?.artist.name || ''}`}
              // src={picture}
              className={styles.picture}
              loading="lazy"
            />
          </div>
          <div style={{ width: '100%' }}>
            <h4 className={`${styles.title} ${styles[type]}`}>{q.data?.artist.name || ''}</h4>
            {/* {subtitle && <h5 className={styles.subtitle}>{subtitle}</h5>} */}
            <div className={styles.descrWrapper}>
              {formatParagraph(q.data?.artist.description || '').map((fragment) => (
                <p className={`p-small ${styles.paragraph}`} key={fragment.slice(0, -1)}>{fragment}</p>
              ))}
              <span className={styles.moreButton}>...<span>More</span></span>
            </div>

          </div>
          <div className={styles.socialLinks}>
            {q.data?.artist.links.map((l: string) => <a key={l} href={l}><BsWikipedia size={30} /></a>)}
          </div>
        </div>
      </div>
      {showModal && <Popup data={q.data.artist} handleModal={handleModal} />}
    </>
  );
};
