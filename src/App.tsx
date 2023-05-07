import React from "react";
import Banner from "./components/Banner/Banner";
import PlaceInfo from "./components/PlacesSection/PlaceInfo";
import PlacesPhotoSlider from "./components/PlacesSection/PlacesPhotoSlider";
import SolutionsSection from "./components/SolutionsSection/SolutionsSection";
import DonateSection from "./components/DonateSection/DonateSection";
import DonateSectionSecond from "./components/DonateSectionSecond/DonateSectionSecond";

function App() {
  return (
    <div className="app">

      <Banner />
      <SolutionsSection/>
      <PlaceInfo/>
        <PlacesPhotoSlider/>

      {/*<Banner />*/}
      {/*  <PlaceInfo/>*/}
      {/*  <PlacesPhotoSlider/>*/}
      <SolutionsSection />
      {/* <DonateSection />
      <DonateSectionSecond /> */}

    </div>
  );
}

export default App;
