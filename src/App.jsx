import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Prestation } from "./components/prestation";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

import "./App.scss";
// import Gift from "./components/gift/gift";
import { Description } from "./components/description";
import LandingPage from "./components/landingPage";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  offset: 50
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, [landingPageData]);

  return (
    <div>
        <LandingPage/>

    </div>
  );
};

export default App;
