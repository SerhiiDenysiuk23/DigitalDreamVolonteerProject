import { useEffect, useState } from "react";
import { ArtistList } from "../../components/ArtistList/ArtistList";
import { InfoBlock } from "../../components/InfoBlock/InfoBlock";
import MiddleSlider from "../../components/MiddleSlider/MiddleSlider";
import { useQuery } from "@apollo/client";
import {getExampleInfo, getExamplesList} from "../../queries/artistQueries";
import styles from './MusicSection.module.scss'

export const MusicSection = () => {
  const {data, loading} = useQuery(getExamplesList);
  const defaultActiveId = data?.artists[0].id ?? null;
  const [activeId, setActiveId] = useState(defaultActiveId);

 

  useEffect(() => {
    const defaultActiveId = data?.artists[0].id ?? null;
    setActiveId(defaultActiveId);
  }, [data]);

  
  if (loading)
      return <div>Loading...</div>
      

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>Do you know about ukrainian MUSIC?</h1>
      </div>
      <InfoBlock type="musician" id={activeId} />
      <MiddleSlider  id= {activeId}/>
      <ArtistList
        type={"musicians"}
        onClick={setActiveId}
        data={data?.artists}
      />
    </section>
  );
};
