import React from "react";

import classes from "./Header.module.css";
import logo from "../assets/tour_logo.jpg";


const Header = () => {

  return (
    <div className={classes.container}>
        <img src={logo} alt="Tour logo" />
        <h2>Top Attractions Around The World</h2>
        <div>More</div>
    </div>
  )
}

export default Header;