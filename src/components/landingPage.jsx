import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Contact } from "./contact";
import { Prestation } from "./prestation";
import JsonData from "../data/data.json";
import { Description } from "./description";


const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, [landingPageData]);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <div id="all-prestations"></div>
      <Prestation data={landingPageData.Prestation1} className="accompagnement"/>
      <Prestation data={landingPageData.Prestation2} className="funny"/>
      <Description />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default LandingPage;
