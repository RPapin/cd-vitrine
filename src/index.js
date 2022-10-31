import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Presentation } from './components/presentation/presentation';
import { Contact } from './components/contact';
import JsonData from "./data/data.json";
import { Navigation } from './components/navigation';
import { OffreFullFunny } from './components/OffreFullFunny/offreFullFunny';
import { OffreFullAccompagnement } from './components/OffreFullAccompagnement/offreFullAccompagnement';

const routing = (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Routes >
        <Route path="/" element={<App/>} />
        <Route path="/presentation" element={<Presentation/>} />
        <Route path="/funnypony" element={<OffreFullFunny data={JsonData.FullFunny} />} />
        <Route path="/accompagnement" element={<OffreFullAccompagnement data={JsonData.FullAccompagnement}/>} />
        {/* <Route component={Notfound} /> */}
      </Routes >
      <Contact data={JsonData.Contact} />
    </div>
  </Router>
);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/presentation",
//     element: <Presentation />,
//   },
// ]);

require('dotenv').config()
// ReactDOM.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
