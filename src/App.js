import React, {useState} from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import List from "./components/List";

const App = () => {
  const [placeName, setPlaceName] = useState("");

  const placeNameHandler = (placeName) => {
    console.log(placeName);
    setPlaceName(placeName);
  }

  return (
    <>
      <Header />
      <HeroSection addPlaceName={placeNameHandler}/>
      <List placeName={placeName}/>
    </>
  );
}

export default App;
