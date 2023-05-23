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
import YouTubeVideos from "./components/YouTubeVideos/YouTubeVideos";

function App() {
  return (
    <div className="app">
      <Banner />
      <MusicSection />
      <PlaceSection />
      <DonateSection />
      <SolutionsSection />

      {/* <MiddleSlider /> */}

      <DonateSectionSecond />

      <YouTubeVideos />
    </div>
  );
}

export default App;
