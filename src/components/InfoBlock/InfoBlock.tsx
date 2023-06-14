import styles from "./InfoBlock.module.scss";
import React from 'react'
import { BsWikipedia } from "react-icons/bs";
import { useQuery } from "@apollo/client";
import { getArtistInfo } from "../../queries/artistQueries";
import Popup from "../../elements/Popup/Popup";
import Loader from "../Loader/Loader";
interface InfoBlockProps {
  type: "author" | "musician" | "band";
  id: string,
  loading: boolean
}

export const InfoBlock = ({ type, id, loading }: InfoBlockProps) => {
  const { data } = useQuery(getArtistInfo, {
    variables: { artistId: id },
  });

  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleModal = () => setShowModal(prev => !prev);

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <div className={styles.blockWrapper} onClick={handleModal}><div className={styles.overlay}></div>
        <div className={styles.block}>
          <div className={`${styles.pictureWrapper} ${styles[type]}`}>
            <img
              alt={`${data?.artist.name || ''}`}
              src={data?.artist.imageUrl || ''}
              className={styles.picture}
              loading="lazy"
            />
          </div>
          <div style={{ width: '100%' }}>
            <h4 className={`${styles.title} ${styles[type]}`}>{data?.artist.name || ''}</h4>
            <div className={styles.descrWrapper}>
              <p className={`p-18-hind ${styles.paragraph}`}>{data?.artist.description}</p>
            </div>

          </div>
          <div className={styles.socialLinks}>
            {data?.artist.links.map((link: { id: string, url: string }) => <a key={link.id} href={link.url}><BsWikipedia size={30} /></a>)}
          </div>
        </div>
      </div>
      {showModal && <Popup data={data.artist} handleModal={handleModal} />}
    </>
  );
};
