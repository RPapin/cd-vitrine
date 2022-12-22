import { useState, useEffect } from "react";
import { Navigation } from "../navigation";
import { Header } from "../header";
import { Contact } from "../contact";
import { Prestation } from "../prestation";
import JsonData from "../../data/data.json";
import './accompagnement.scss'
import '../accueil/landingPage.scss'

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
      <div className="row g-0 container-domino">
        <div className="col-xl-6 col-lg-12 col-sm-12 block-domino-text">
          <h3>Résolution de problèmes de comportement</h3>
          <p>
            Les problèmes de comportement peuvent être variés. Votre cheval :<br/><br/>
            <ul>
              <li>
                Manque de motivation
              </li>
              <li>
                Fuit le licol
              </li>
              <li>
                Vous mords
              </li>
              <li>
                A des traumatismes
              </li>
              <li>
                A du mal à sortir seul
              </li>
              <li>
                Etc...
              </li>
            </ul>
            <span className="important">Objectif :</span><br/>
            Analyser pourquoi votre cheval se comporte ainsi et mettre en place des exercices pour résoudre les problématiques.
          </p>
        </div>
        <div className="col-xl-6 col-lg-12 col-sm-12 block-domino-img">
          <img src=".\img\accompagnement\accompagnement-chloe-deschamps-cheval-qui-mord.jpg" alt="Orphée sourit à coté de Chloé " className="img-fluid"></img>
        </div>
      </div>
      <div className="row g-0 container-domino">
        <div className="col-xl-6 col-lg-12 col-sm-12 order-xl-last block-domino-text">
          <h3>Travail à pied et éducation</h3>
          <p>
          Envie de vous améliorer dans vos séances de travail à pied ?<br/>
          Besoin d'être épaulé(e) dans l'éducation de votre poulain ?<br/><br/>
            <ul>
              <li>
              Répondre aux pressions
              </li>
              <li>
              S'arrêter à l'épaule
              </li>
              <li>
              Tours de cirques
              </li>
              <li>
              Varier l'énergie
              </li>
              <li>
              Exercices en liberté
              </li>
              <li>
               et autres selon vos besoins
              </li>
            </ul>
          </p>
        </div>
        <div className="col-xl-6 col-lg-12 col-sm-12  block-domino-img">
          <img src=".\img\accompagnement\accompagnement-travail-a-pied-chloe-deschamps.jpg" alt="Chloé fait sauter Fanie" className="img-fluid"></img>
        </div>
      </div>
      
      <div className="row g-0 container-domino">
        <div className="col-xl-6 col-lg-12 col-sm-12 block-domino-text">
          <h3>Renforcement de votre relation</h3>
          <p>
           Lors de ces séances, je vous aiderai à prendre du "crédit social" auprès de votre cheval et à créer des émotions positives
           pour qu'il ait envie d'être avec vous !<br/><br/>
            <ul>
              <li>
              Avoir un cheval enthousiaste
              </li>
              <li>
              Lui permettre de donner le meilleur au travail
              </li>
              <li>
              Partager des moments agréables
              </li>
              <li>
              Développer votre complicité
              </li>
            </ul>
            <span className="important">Objectif :</span><br/>
            Que vous deveniez son humain de confiance, celui avec qui il a envie d'être et avec qui c'est agréable !
          </p>
        </div>
        <div className="col-xl-6 col-lg-12 col-sm-12 block-domino-img">
          <img src=".\img\accompagnement\accompagnement-renforcement-relation-complicite-chloe-deschamps.jpg" alt="Chloé caresse Kasmine " className="img-fluid"></img>
        </div>
      </div>
      <div className="container container-tableau">
        <div className="row justify-content-space-around">
          <div className="col-md-5 col-sm-10 col-xs-10 presta-colonne ">
            <h3 className="title-colonne">Chez vous</h3>
            <hr/>
            <p>Je me déplace chez vous, dans un rayon de 20 km autour de la Tour de Salvagny (69).</p><br/>
            <ul>
              <li>
              On fixe une date ensemble
              </li>
              <li>
              Je vous envoie un questionnaire pour en apprendre plus sur vous et votre cheval en amont de notre séance
              </li>
              <li>
              On se retrouve à l'endroit où vit votre cheval pour une séance d'1h
              </li>
            </ul>
            <p>Pour tout déplacement de plus de 20km, l'indemnité kilométrique est de 0,42€ /km</p>
          </div>
          <div className="col-md-5 col-sm-10 col-xs-10 presta-colonne">
            <h3 className="title-colonne">En visio</h3>
            <hr/>
            <p>Si vous souhaitez faire une séance en visio, c'est possible aussi !</p><br/>
            <ol>
              <li>
              On fixe une date ensemble
              </li>
              <li>
              Je vous envoie un questionnaire sur vous et votre cheval ET je vous demanderai des extraits vidéos de moments précis avec votre cheval pour que je puisse bien préparer en amont notre séance
              </li>
              <li>
              On se rejoint en visio pour la séance d'1h (pas besoin d'être avec votre cheval)
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="row g-0 container-container-discute">
        <div className="container container-discute">
          <div className="row">
            <div className="col-12 block-discute">
              <h1>Contactez-moi</h1>
              <p className="text-important">
                Quelque soit votre besoin, n'hésitez pas à me contacter.<br/>Je serai ravie de vous aider à avancer avec votre cheval !
              </p>
              <a className="btn btn-contact" >CONTACT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accompagnement;
