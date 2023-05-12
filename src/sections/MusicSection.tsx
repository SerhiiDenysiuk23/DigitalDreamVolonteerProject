import { useEffect, useState } from "react";
import { ArtistList } from "../components/ArtistList/ArtistList";
import { InfoBlock } from "../components/InfoBlock/InfoBlock";
import MiddleSlider from "../components/MiddleSlider/MiddleSlider";
import { useQuery } from "@apollo/client";
import {getExamplesList} from "../queries/artistQueries";

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
    <section>
      <InfoBlock type="musician" id={activeId} />
      <MiddleSlider />
      <ArtistList
        type={"musicians"}
        onClick={setActiveId}
        data={data?.artists}
      />
    </section>
  );
};
