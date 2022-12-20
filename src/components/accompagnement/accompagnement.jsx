import { useState, useEffect } from "react";
import { Navigation } from "../navigation";
import { Header } from "../header";
import { Contact } from "../contact";
import { Prestation } from "../prestation";
import JsonData from "../../data/data.json";
import './accompagnement.scss'

const Accompagnement = () => {

  return (
    <div className="">
      <div className="row g-0 accompagnement-header">
        <div className="col-xl-6 offset-xl-0 col-lg-8 offset-lg-2 col-md-12 col-sm-12 right-panel">
          <img src=".\img\accompagnement\accompagnement-chloe-deschamps-comportementaliste-equi.jpg" alt="Chloé caresse Orphée" className="img-fluid"></img>
        </div>
        <div className="col-xl-6 offset-xl-0 col-lg-8 offset-lg-2 col-md-12 col-sm-12 left-panel">
          {/*  */}
          <h1>Accompagnement personnalisé</h1>
          <p>
            Les séances d'accompagnement personnalisé permettent de vous accompagner tout au long de la vie avec votre cheval. Que ce soit dans les moments difficiles ou
            lorsque tout va bien, je vous aide à améliorer votre relation avec votre cheval.<br/><br/>
          <b>Séance chez vous ou en visio !</b>
          </p>
          <a className="btn btn-contact">ME CONTACTER</a>
        </div>
      </div>
      <div className="container container-mission">
        <div className="row">
          <div className="col-12 block-mission">
            <h2>Ma Mission</h2>
            <hr/>
            <p>
            Les chevaux que nous rencontrons dans nos vies nous apprennent, nous remettent en question et appuient sur des points que nous devons travailler. <br/><br/>
            Ma mission est de vous aider à comprendre leurs maux et à traduire leurs messages pour leur apporter plus de confort et vous permettre de mieux intéragir avec eux. 
            Je vous aide à communiquer clairement, dans le calme, la décontraction et la confiance.
            </p>
          </div>
        </div>
      </div>
      <div className="row g-0 container-pillier full-img-background" style={{backgroundImage: 'url("./img/accompagnement/accompagnement-piliers-travail-du-cheval-relation-chloe-deschamps.jpg")'}}>
        <div className="header-pillier">
          <h3>MES TROIS PILIERS</h3>
          <hr/>
        </div>
        <div className="col-md-3 offset-md-1 col-sm-12 block-pillier">
          <h3>Liberté d'expression</h3>
          <hr/>
          <p>
            Le cheval doit pouvoir être libre d'exprimer ses émotions, ses envies, sa frustration.
          </p>
        </div>
        <div className="col-md-3 offset-md-1 col-sm-12 block-pillier">
          <h3>Adaptation</h3>
          <hr/>
          <p>
          Je cherche pourquoi il réagit ainsi et j'adapte ensuite mes interactions avec lui.
          </p>
        </div>
        <div className="col-md-3 offset-md-1 col-sm-12 block-pillier">
          <h3>Communication</h3>
          <hr/>
          <p>
            Je communique mes intentions et mes émotions avec un langage corporel clair.
          </p>
        </div>
      </div>
      <div className="container container-mission">
        <div className="row">
          <div className="col-12 block-mission">
            <h2>LES SÉANCES D'ACCOMPAGNEMENT</h2>
            <hr/>
            <p>
            Une séance dure environ 1h. On pourra travailler aussi bien sur des problèmes de comportement que sur du travail à pied, ce sera en fonction de vous et de vos besoins !
            </p>
            <a className="btn btn-contact">QUELQUES VIDÉOS DE MON TRAVAIL</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accompagnement;
