import { useEffect, useState } from "react";
import { ArtistList } from "../../components/ArtistList/ArtistList";
import { InfoBlock } from "../../components/InfoBlock/InfoBlock";
import MiddleSlider from "../../components/MiddleSlider/MiddleSlider";
import { useQuery } from "@apollo/client";
import { getArtistsList } from "../../queries/artistQueries";
import styles from './ArtistsSection.module.scss'
import Loader from "../../components/Loader/Loader";

const ArtistsSection = ({ kind, id }: { kind?: string, id?: string }) => {
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

  const formattedKind = `${kind?.toUpperCase()}${kind !== 'Music' ? 's' : ''}`

  if (loading)
    return <Loader />

  return (
    <section className={styles.section} id={id}>
      <div className={styles.title}>
        <h3>Do you know about ukrainian <span>{formattedKind}</span>?</h3>
      </div>

      <InfoBlock type="musician" id={activeId} loading={loading} />
      <MiddleSlider id={activeId} kind={formattedKind} />
      <ArtistList
        type={"musicians"}
        onClick={setActiveId}
        data={data?.artists}
      />
    </section>
  );
};

export default ArtistsSection