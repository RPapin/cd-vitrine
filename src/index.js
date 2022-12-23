import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Contact } from './components/contact/contact';
import JsonData from "./data/data.json";
import { Navigation } from './components/navigation';
import Accompagnement from './components/accompagnement/accompagnement';
import FunnyPony from './components/funnypony/funnyPony';
import Propos from './components/propos/propos';
import Footer from './components/footer/footer';

const routing = (
  <Router>
    <div>
      <Navigation />
      <Routes >
        <Route path="/" element={<App/>} />
        <Route path="/accompagnement" element={<Accompagnement/>} />
        <Route path="/funnypony" element={<FunnyPony/>} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route component={Notfound} /> */}
      </Routes >
      <Footer />
    </div>
  </Router>
);


require('dotenv').config()

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
