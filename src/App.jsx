import { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.scss";
import LandingPage from "./components/Accueil/landingPage";


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
    <LandingPage/>
  );
};

export default App;
