import { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.scss";
import LandingPage from "./components/landingPage";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  offset: 50
});

const App = () => {
  useEffect(() => {
    console.log('App useeffect')
  });

  return (
    <div>
        <LandingPage/>
    </div>
  );
};

export default App;
