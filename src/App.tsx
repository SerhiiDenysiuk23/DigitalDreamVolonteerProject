
import React from "react";
import Banner from "./components/Banner/Banner";
import PlaceInfo from "./components/PlacesSection/PlaceInfo";
import PlacesPhotoSlider from "./components/PlacesSection/PlacesPhotoSlider";
import SolutionsSection from "./components/SolutionsSection/SolutionsSection";

function App() {
  return (
    <div className="app">
      <Banner />
      <SolutionsSection/>
      <PlaceInfo/>
        <PlacesPhotoSlider/>
    </div>
  );
}

export default App;