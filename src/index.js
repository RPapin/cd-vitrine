import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Contact } from './components/contact/contact';
import { Navigation } from './components/navigation/navigation';
import Accompagnement from './components/accompagnement/accompagnement';
import FunnyPony from './components/funnypony/funnyPony';
import Propos from './components/propos/propos';
import Footer from './components/footer/footer';
import { Mentions } from './components/mentions/mentions';
import { Confidentialite } from './components/confidentialite/confidentialite';

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
        <Route path="/mentions-legales" element={<Mentions />} />
        <Route path="/confidentialite" element={<Confidentialite />} />

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
