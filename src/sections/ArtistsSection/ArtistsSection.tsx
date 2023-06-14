import { useEffect, useState } from "react";
import { ArtistList } from "../../components/ArtistList/ArtistList";
import { InfoBlock } from "../../components/InfoBlock/InfoBlock";
import MiddleSlider from "../../components/MiddleSlider/MiddleSlider";
import { useQuery } from "@apollo/client";
import { getArtistsList } from "../../queries/artistQueries";
import styles from './ArtistsSection.module.scss'
import Loader from "../../components/Loader/Loader";

const ArtistsSection = ({ kind }: { kind?: string }) => {
  const { data, loading } = useQuery(getArtistsList, {
    variables: {
      data: {
        kinds: kind
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
    return <Loader/>

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h3>Do you know about ukrainian <span>MUSIC</span>?</h3>
      </div>
      <InfoBlock type="musician" id={activeId} loading={loading}/>
      <MiddleSlider id={activeId} />
      <ArtistList
        type={"musicians"}
        onClick={setActiveId}
        data={data?.artists}
      />
    </section>
  );
};

export default ArtistsSection