import React from "react";
import Banner from "./sections/Banner/Banner";
import DonateSection from "./sections/DonateSection/DonateSection";
import DonateSectionSecond from "./sections/DonateSectionSecond/DonateSectionSecond";
import { MusicSection } from "./sections/MusicSection/MusicSection";
import PlaceSection from "./sections/PlaceSection";
import SolutionsSection from "./sections/SolutionsSection";
import BrandsSection from "./sections/BrandsSection";
import YouTubeVideos from "./components/YouTubeVideos/YouTubeVideos";
import PlacesPhotoSlider from "./components/Places/PlacesPhotoSlider";

function App() {
  return (
    <div className="app">
      {/*<PlacesPhotoSlider id={"test"}/>*/}
      {/*<Banner />*/}
      {/*<MusicSection />*/}
      <PlaceSection />
      {/*<BrandsSection />*/}
      {/*<DonateSection />*/}
      {/*<MusicSection />*/}
      {/*<SolutionsSection />*/}
      {/*<MusicSection />*/}
      {/*<DonateSectionSecond />*/}
      {/*<YouTubeVideos />*/}
    </div>
  );
}

export default App;
