import { useEffect, useState } from "react";
import { ArtistList } from "../../components/ArtistList/ArtistList";
import { InfoBlock } from "../../components/InfoBlock/InfoBlock";
import MiddleSlider from "../../components/MiddleSlider/MiddleSlider";
import { useQuery } from "@apollo/client";
import { getExamplesList } from "../../queries/artistQueries";
import styles from './MusicSection.module.scss'

export const MusicSection = () => {
  const { data, loading } = useQuery(getExamplesList, {
    variables: {
      data: {
        kinds: "Musician"
      }
    }
  });
  const defaultActiveId = data?.artists[0]?.id ?? null;
  const [activeId, setActiveId] = useState(defaultActiveId);

  useEffect(() => {
    const defaultActiveId = data?.artists[0]?.id ?? null;
    setActiveId(defaultActiveId);
  }, [data]);

  if (loading)
    return <div>Loading...</div>
    
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h3>Do you know about ukrainian <span>MUSIC</span>?</h3>
      </div>
      <InfoBlock type="musician" id={activeId} />
      <MiddleSlider id={activeId} />
      <ArtistList
        type={"musicians"}
        onClick={setActiveId}
        data={data?.artists}
      />
    </section>
  );
};
