import React from "react";
import Banner from "./sections/Banner/Banner";

// import { ArtistList } from "./components/ArtistList/ArtistList";
// import { InfoBlock } from "./components/InfoBlock/InfoBlock";

import DonateSection from "./sections/DonateSection/DonateSection";
import DonateSectionSecond from "./sections/DonateSectionSecond/DonateSectionSecond";
import MiddleSlider from "./components/MiddleSlider/MiddleSlider";
import { MusicSection } from "./sections/MusicSection/MusicSection";
import PlaceSection from "./sections/PlaceSection";
import SolutionsSection from "./sections/SolutionsSection";

function App() {
  return (
    <div className="app">

      <Banner />
        <SolutionsSection/>
      <PlaceSection/>
      <MiddleSlider />
      <MusicSection />
      <DonateSection />
      <DonateSectionSecond />
    </div>
  );
}

export default App;
