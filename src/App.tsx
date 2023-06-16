import React from "react";
import Banner from "./sections/Banner/Banner";
import DonateSection from "./sections/DonateSection/DonateSection";
import DonateSectionSecond from "./sections/DonateSectionSecond/DonateSectionSecond";
import ArtistsSection from "./sections/ArtistsSection/ArtistsSection";
import PlaceSection from "./sections/PlaceSection";
import SolutionsSection from "./sections/SolutionsSection";
import BrandsSection from "./sections/BrandsSection";
import YouTubeVideos from "./components/YouTubeVideos/YouTubeVideos";
import PlacesPhotoSlider from "./components/Places/PlacesPhotoSlider";

function App() {
  return (
    <div className="app">
      <Banner />
      <ArtistsSection kind='Illustrator'/>
      <PlaceSection />
      <BrandsSection />
      <DonateSection />
      <ArtistsSection kind='Painter' />
      <SolutionsSection />
      <ArtistsSection />
      <DonateSectionSecond />
      <YouTubeVideos />
    </div>
  );
}

export default App;
