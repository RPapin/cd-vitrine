import './funnyPony.scss'

const FunnyPony = () => {
  const imageUrl = window.innerWidth >= 768 ? "./img/funnypony/full_header.png" : "./img/funnypony/full_header_mobile.png";

  return (
    <div className="">
      <div className="row g-0">
        <div className="col-12 header-funnypony" style={{backgroundImage: `url(${imageUrl})` }}>
          {/* <img src={imageUrl} alt="Présentation funny pony" className="img-fluid"></img> */}
        </div>
      </div>
      <div className="container-fluid container-presentation-funny">
        <div className="row g-0  block-presentation-funny">
          <div className="col-md-4 offset-md-2 col-sm-12 ">
            <img src={"./img/acceuil/accueil-chloe-et-charlie.jpg"} alt="Observation de chevaux" className="img-fluid"></img>
          </div>
          <div className="col-md-5 col-sm-12 text-presentation-funny">
            <h2>Comprendre leur langage</h2>
            <hr/>
            <p>
              Avant d'établir un lien avec le poney, il est important de bien le connaître.
            </p>
            <ul>
              <li>Qu'est ce qu'il mange ?</li>
              <li>Combien de temps dort-il ?</li>
              <li>Comment reconnaître ses humeurs et ses émotions ?</li>
              <li>Quels sont ses besoins ?</li>
            </ul>
            <p>Nous ferons le tour de son pré pour observer son environnement et son comportement et on abordera, dans les grandes lignes, les bases de l'éthologie !</p>
          </div>
        </div>
        <div className="row g-0 block-presentation-funny background-full-width">
          <div className="col-md-4 col-sm-12 order-md-last">
            <img src={"./img/acceuil/accueil-chloe-et-charlie.jpg"} alt="Observation de chevaux" className="img-fluid"></img>
          </div>
          <div className="col-md-5 offset-md-2 col-sm-12 text-presentation-funny">
            <h2>Brossage et soins du poney</h2>
            <hr/>
            <p>
              Il apprendra à prendre soin du poney, à brosser le corps, la crinière,
              à curer ses pieds mais il découvrira aussi comment gratouiller le poney aux endroits que celui-ci préfère et ainsi favoriser les interactions pour développer leur complicité.<br/><br/>
              L'objectif de cette activité est également de faire découvrir à votre enfant les soins et l'entretien des poneys au quotidien et ainsi le responsabiliser. Au programme : entretien du pré, 
              remplissage de l'eau, ramassage de crottins, distribution de foin !
              </p>
          </div>
        </div>
        <div className="row g-0 block-presentation-funny">
          <div className="col-md-4 offset-md-2 col-sm-12 ">
            <img src={"./img/acceuil/accueil-chloe-et-charlie.jpg"} alt="Observation de chevaux" className="img-fluid"></img>
          </div>
          <div className="col-md-5 col-sm-12 text-presentation-funny">
            <h2>Activités ludiques</h2>
            <hr/>
            <p>Votre enfant apprendra à mener le poney en longe. Il réalisera un parcours d'embûches en autonomie à pied avec son poney. 
              Il pourra sauter des troncs, slalomer entre les arbres, monter sur une plateforme, passer sous un rideau de ruban, marcher sur une bâche, bref, il ne va pas s'ennuyer !<br/><br/>
              Il apprendra à créer une relation de confiance entre lui et son poney pour réussir à dérouler tous les exercices. Sa capacité d'écoute et son autonomie seront de mise !
              </p>
          </div>
        </div>
        <div className="row g-0 block-presentation-funny background-full-width">
          <div className="col-md-4 col-sm-12 order-sm-last">
            <img src={"./img/acceuil/accueil-chloe-et-charlie.jpg"} alt="Observation de chevaux" className="img-fluid"></img>
          </div>
          <div className="col-md-5 offset-md-2 col-sm-12 text-presentation-funny">
            <h2>Tours de cirque</h2>
            <hr/>
            <p>
              S'il y a bien un moment dont votre enfant se souviendra c'est bien celui là ! Il apprendra à demander au poney des figures de cirque comme assis, couché, 
              "lève la patte", "fais le sourire", recul en liberté, et même des cabrés !<br/><br/>
              Un moment magique en liberté, en symbiose avec le poney. Des demandes qu'il fera simplement avec sa gestuelle et sa voix.<br/><br/>
              Cette activité sera réalisée en fin de séance et vous aurez probablement l'occasion de voir votre enfant en plein spectacle !
              </p>
          </div>
        </div>
        <div className="row g-0 block-presentation-funny">
          <div className="col-md-4 offset-md-2 col-sm-12 ">
            <img src={"./img/acceuil/accueil-chloe-et-charlie.jpg"} alt="Observation de chevaux" className="img-fluid"></img>
          </div>
          <div className="col-md-5 col-sm-12 text-presentation-funny">
            <h2>Équipements à prévoir</h2>
            <hr/>
            <p>
            Prévoyez une tenue adaptée pour votre enfant :
            </p>
            <ul>
              <li>Des habits qu'il pourra salir,</li>
              <li>Un manteau chaud et imperméable,?</li>
              <li>Des bottes de pluie ou des baskets fermées qui tiennent bien aux pieds, résistantes à l'humidité et à la boue,</li>
              <li>Des gants et un bonnet.</li>
            </ul>
            <p>Prévoyez également un petit goûter et une bouteille d'eau (on fera une pause goûter) et pour que tout le monde se régale, vous pouvez emmener des carottes 🥕 ou des pommes 🍏 !</p>
          </div>
        </div>
      </div>
      <div className="row g-0 testimony-container full-img-background testimony-funny" style={{backgroundImage: 'url("./img/funnypony/funny-pony-temoignages-parents.jpg")'}}>
        <div className="col-md-4 col-sm-10 testimony-block">
          <div className="symbole-quote">
            ""
          </div>
          <p className="testimony-text">
          Louise a eu la chance de participer à une après-midi Funny-Pony. Elle avait déjà fait des séances en poney-club. Nous avons beaucoup aimé l'approche de Chloé. Elle apprend
          aux enfants à respecter les animaux avant tout, à voir quand ils aiment et quand ils n'aiment pas. Et elle leur permet même de jouer avec le poney et de lui demander des tours de cirque : magiques pour les enfants !
          </p>
          <div className="testimony-name">
            - Maman de Louise
          </div>
        </div>
        <div className="col-md-4 col-sm-10 testimony-block">
          <div className="symbole-quote">
            ""
          </div>
          <p className="testimony-text">
          Notre fille Lina a participé à une matinée de Funny-Pony avec 3 autres enfants. Elle est revenue vraiment ravie de cette demi-journée où elle a pu rencontrer Fanie, 
          la petite ponette dont elle a pu s'occuper le temps de quelques heures et à qui elle pu demander plein de tours de cirque. Un vrai émerveillement pour elle comme pour nous.
          </p>
          <div className="testimony-name">
            - Papa de Lina
          </div>
        </div>
        <div className="col-md-4 col-sm-10 testimony-block">
          <div className="symbole-quote">
            ""
          </div>
          <p className="testimony-text">
          Nous avons inscrit Mattéo au Funny-Pony 2 fois. Il a littéralement adoré et nous en parle encore souvent ! Matteo ne connaissait pas du tout le milieu équestre 
          mais Chloé lui a rapidement permis de prendre confiance et d'être à l'aise. C'est une superbe animatrice, très douce et absolument l'écoute des enfants ! Un régal pour eux.
          </p>
          <div className="testimony-name">
            - Mamy de Mattéo
          </div>
        </div>
      </div>
      <div className="container-background">
        <div className="container container-form-funny">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h2>Les prochaines dates</h2>
              <p>Plusieurs dates sont déjà planifiées pour les semaines à venir :</p>
              <ul>
                <li>23 décembre 2022, de 14h à 17h</li>
                <li>23 décembre 2022, de 14h à 17h</li>
                <li>23 décembre 2022, de 14h à 17h</li>
              </ul>
              <p>Les dates suivantes seront ajoutées fin décembre.<br/><br/>
                Pour être tenu(e) informé(e) dès que les prochaines dates seront planifiées, laissez-votre email juste ici :</p>
              <span className="merci">Merci pour votre email !</span>
            </div>
            <div className="col-md-6 col-sm-12 bordered">
              <h2>Réservez votre activité !</h2>
              <p>Merci de renseigner les informations suivantes.<br/>
              Une fois ce formulaire envoyé, je vous recontacte sous 24h pour vous confirmer votre inscription et vous donner les infos importantes pour le jour J !</p>
              <span className="merci">Merci pour votre inscription !</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container final-block-funny">
        <div className="row">
          <div className="col-md-12">
            <h1>Besoin d'échanger avant de vous inscrire ?</h1>
            <hr/>
            <p>Je suis disponible par mail à :<br/>
            <b>contact@chloe-deschamps.com</b><br/>
            <i>(réponse sous 24h)</i><br/><br/>
            Vous pouvez également me joindre par téléphone de 9h à 18h au :<br/>
            <b>06 24 18 12 06</b>
            </p>
            <hr/>
            <p>N'hésitez pas à me solliciter pour toute question concernant les Funny-Pony !<br/><br/>
              À bientôt,<br/>
              Chloé</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunnyPony;
