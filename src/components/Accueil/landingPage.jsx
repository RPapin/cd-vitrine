import { useState, useEffect } from "react";
import { Navigation } from "../navigation";
import { Header } from "../header";
import { Contact } from "../contact";
import { Prestation } from "../prestation";
import JsonData from "../../data/data.json";
import './landingPage.scss'

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, [landingPageData]);

  return (
    <div className="">
      <section className="header-landing">
        <div className="row g-0">
          <div className="col-md-6 col-sm-12">
            <img src=".\img\acceuil\accueil-chloe-et-orphee.jpg" alt="Chloé donne un bonbon à Orphée" className="img-fluid"></img>
          </div>  
          <div className="col-md-6 col-sm-12 rigth-side-header">
            <p>Je m'appelle Chloé, et je suis comportementaliste équin sur Lyon</p>
            <a href="/contact" className="btn btn-classique">Me Contacter</a>
          </div>  
        </div> 
      </section>
      <div className="container">
        <div className="row propos-container">
          <div className="col-md-8 col-sm-10">
            <h2>A propos de moi</h2>
            <hr></hr>
            <p className="text-important">Propriétaire depuis maintenant de nombreuses années, j'ai rapidement eu envie de créer du lien avec mes chevaux. Petit à petit, je me suis intéressée à leur manière de communiquer.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <p>
            Comment écrire ce paragraphe sans vous parler de Fanie ! Fanie, c'est ma petite ponette toute pleine d'énergie que vous avez probablement déjà aperçue sur mes photos. 
            Elle m'a permis de vraiment comprendre les méthodes d'apprentissage des chevaux !
            <br/><br/>
            Aujourd'hui, elle est devenue une vraie ponette d'école pour tous les tours de cirque, elle adore l'interaction avec l'humain et elle est constamment en train de proposer de nouvelles choses. 
            Avec elle, je pars en balade en liberté à pied, comme on pourrait le faire avec un chien. Oui oui, avec le rappel et tout ça !
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src=".\img\acceuil\accueil-chloe-et-fanie.jpg" alt="Chloé avec Fannie" className="img-fluid"></img>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src=".\img\acceuil\accueil-chloe-et-charlie.jpg" alt="Chloé avec Charlie" className="img-fluid"></img>
          </div>
          <div className="col-md-6 col-sm-12">
            <p>
            Je ne vais pas vous parler de tous mes chevaux, mais je suis obligée de vous parler aussi de Charlie. Cette jument m'a rejoint après des années de centre équestre.
            <br/><br/>
            Elle y a développé des troubles, notamment la narcolepsie. À la vue d'une selle, ou même après un coup de brosse à crin sur sa crinière, Charlie devient impassible, comme si elle s'endormait, 
            et manque parfois de s'écrouler sur le sol. Des traumatismes lourds qui m'ont appris à prendre le temps, à écouter et à observer. Aujourd'hui Charlie va mieux et est plus épanouie. 
            Elle m'aura permis d'apprendre beaucoup.
            </p>
          </div>
        </div>
        <div className="row propos-container" >
          <div className="col-md-8 col-sm-10 ">
            <p className="text-important">Passionnée par ces animaux, je me suis formée au métier de comportementaliste équin. Alors, si votre cheval a 
            un soucis de comportement ou tout simplement, si vous souhaitez renforcer votre complicité avec lui, 
            contactez-moi ! Je serai très heureuse de pouvoir vous épauler !</p>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-12 parallax" style={{backgroundImage: 'url("./img/acceuil/accueil-kasmine.jpg")'}}>
          <div className="caption">
            <span className="parallax-text">« Écouter, observer, prendre le temps ... »</span>
          </div>
        </div>
      </div>
      <div className="container presta-container">
        <div className="row">
          <div className="col-12 ">
            <div className="d-flex align-items-center flex-column mb-2">
              <h2>MES PRESTATIONS</h2>
              <hr/>
            </div>
          </div>
        </div>
        <div className="row g-2 justify-content-space-around">
          <div className="col-md-5 col-sm-10 presta-colonne presta-red">
            
            <h3 className="title-colonne">ACCOMPAGNEMENT PERSONNALISÉ</h3>
            <hr/>
            <p>Votre cheval a des problèmes de comportement que vous aimeriez résoudre ? Vous avez envie de développer une relation de complicité avec lui ?<br/><br/>
            Je vous accompagne dans la résolution des problématiques comportementales de votre cheval et vous aide à renforcer votre relation de complicité avec lui !<br/><br/>
            N'hésitez pas à me contacter pour que l'on puisse en discuter !</p>
            <div className="prix">50€ par heure</div>
            <a className="btn btn-see-more">En savoir plus</a>
          </div>
          <div className="col-md-5 col-sm-10 presta-colonne presta-green">
            <h3 className="title-colonne">FUNNY-PONY</h3>
            <hr/>
            <p>Vous souhaitez faire découvrir le monde des poneys à votre enfant ? Je vous propose des  ½  journées en immersion avec les poneys !<br/><br/>
              <span className="underline bold text-align-center">Au programme :</span><br/><br/>
              <ul>
                <li>Quizz sur la vie du poney</li>
                <li>Brossage et gratouilles</li>
                <li>Activités ludiques à pied avec le poney</li>
                <li>Apprentissage des tours de cirque <br/> (coucher, assis, donne la patte, ...)</li>
              </ul>
            </p>
            <div className="prix">30€ par enfant (3h d'activité)</div>
            <a className="btn btn-see-more">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
