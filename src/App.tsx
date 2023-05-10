import React from "react";
import Banner from "./components/Banner/Banner";

// import { ExamplesList } from "./components/ExamplesList/ExamplesList";
// import { InfoBlock } from "./components/InfoBlock/InfoBlock";

import DonateSection from "./components/DonateSection/DonateSection";
import DonateSectionSecond from "./components/DonateSectionSecond/DonateSectionSecond";
import MiddleSlider from "./components/MiddleSlider/MiddleSlider";
import { MusicSection } from "./components/MusicSection/MusicSection";
import PlaceSection from "./components/PlacesSection/PlaceSection";
import SolutionsSection from "./components/SolutionsSection/SolutionsSection";

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
