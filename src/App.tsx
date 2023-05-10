import React from "react";
import Banner from "./components/Banner/Banner";
import PlaceInfo from "./components/PlacesSection/PlaceInfo";
import PlacesPhotoSlider from "./components/PlacesSection/PlacesPhotoSlider";
import SolutionsSection from "./components/SolutionsSection/SolutionsSection";

// import { ExamplesList } from "./components/ExamplesList/ExamplesList";
// import { InfoBlock } from "./components/InfoBlock/InfoBlock";

import DonateSection from "./components/DonateSection/DonateSection";
import DonateSectionSecond from "./components/DonateSectionSecond/DonateSectionSecond";
import MiddleSlider from "./components/MiddleSlider/MiddleSlider";
import { MusicSection } from "./components/MusicSection/MusicSection";

function App() {
  return (
    <div className="app">

      <Banner />
      <SolutionsSection />
      <PlaceInfo />
      <PlacesPhotoSlider />
      <MiddleSlider />
      <MusicSection />
      <DonateSection />
      <DonateSectionSecond />
    </div>
  );
}

export default App;
