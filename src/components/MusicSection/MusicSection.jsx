import { useEffect, useState } from "react";
import { ExamplesList } from "../ExamplesList/ExamplesList";
import { InfoBlock } from "../InfoBlock/InfoBlock";
import MiddleSlider from "../MiddleSlider/MiddleSlider";
import { Section } from "../Section/Section";
import { useQuery } from "@apollo/client";
import { getExamplesList } from "./queries";

export const MusicSection = () => {
  const q = useQuery(getExamplesList);
  const defaultActiveId = q.data?.artists[0].id ?? null;
  const [activeId, setActiveId] = useState(defaultActiveId);

  useEffect(() => {
    const defaultActiveId = q.data?.artists[0].id ?? null;
    setActiveId(defaultActiveId);
  }, [q.data]);

  return (
    <Section>
      <InfoBlock type="author" id={activeId} />
      <MiddleSlider />
      <ExamplesList
        type="musicisans"
        onClick={setActiveId}
        data={q.data ? q.data.artists : []}
      />
    </Section>
  );
};
