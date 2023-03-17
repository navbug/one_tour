import React, {useRef} from "react";

import classes from "./HeroSection.module.css";
import fort_image from "../assets/fort.jpg";


const HeroSection = (props) => {
  const placeRef = useRef("");

  const searchPlaceHandler = () => {
    console.log(placeRef.current.value);

    props.addPlaceName(placeRef.current.value);
  }

  return (
    <div className={classes.container}>
      <h2>TOP_ATTRACTIONS_OF_<span>RISHIKESH</span></h2>
      <input ref={placeRef} type="text" placeholder="search places..."/>
      <button onClick={searchPlaceHandler}>Search</button>
    </div>
  )
}

export default HeroSection;