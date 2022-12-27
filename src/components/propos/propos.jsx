import "./propos.scss";
import "./timeline.scss";


const Propos = () => {
  return (
    <div>
      <div className="row g-0 header-propos">
        <div className="col-md-8 col-sm-12 text-propos">
          <h1>Bonjour !</h1>
          <p>
            Je m'appelle Chloé Deschamps, et je suis basée à La Tour de
            Salvagny, à proximité de Lyon. Si vous souhaitez en savoir plus sur
            mon cheminement avec les chevaux et sur les raisons qui m'ont
            poussées à devenir comportementaliste équin, vous êtes au bon
            endroit !<br />
            <br />
          </p>
          <p>Bonne lecture :)</p>
        </div>
        <div className="col-md-4 col-sm-12 order-md-first">
          <img
            src={"./img/propos/a-propos-chloe-deschamps-1.jpg"}
            alt="Chloé collée à un cheval"
            className="img-fluid"
          ></img>
        </div>
      </div>
      <div className="container container-roman">
        <div className="col-12">
          <h1>Mon histoire</h1>
          <p>
            Comme beaucoup d'entre nous, j'ai commencé à monter à cheval en
            centre équestre. J'y ai passé mes 4 galops. Et j'ai rapidement remis
            en question ma pratique : je montais à cheval, je travaillais les
            chevaux, on sautait, on dressait, mais pour quoi au juste, mis à
            part mon plaisir personnel ? J'ai eu envie de descendre de cheval
            pour passer du temps à pied avec eux et apprendre à mieux les
            connaitre. Malheureusement, je n'ai pas trouvé à ce moment là de
            structure où je pouvais faire ça. J'ai donc décidé de tout arrêter.
            Si si ! Même mon option "Équitation" au bac ! Et puisque je ne
            trouvais pas de moyen de simplement passer du temps à pied pour
            créer une relation avec un cheval, j'ai fait un break.
            <br />
            <br />
            En 2016, après pas mal de temps de réflexion, j'ai décidé de devenir
            propriétaire. C'était Fanie, une petite ponette Welsh. Elle avait 1
            an. J'en avais 17. Elle était inapprochable et agressive. Pas du
            tout la <b>Fanie</b> d'aujourd'hui. C'est avec elle que j'ai vécu
            mes plus beaux moments de complicité. La vraie. Celle où l'animal
            est libre de s'exprimer, où les décisions se font d'un commun accord
            et où le plaisir est partagé.
            <br />
            <br />
            Fanie m'a appris à écouter les chevaux, à les comprendre et à
            construire une relation fusionnelle. Des balades à pied en liberté,
            des séances de jeu dans le pré, des moments câlins, des baignades
            dans l'eau. En 2019, j'ai lancé mon compte Instagram @fanielastaar à
            son effigie, c'est dire la place qu'elle prend !<br />
            <br />
            En 2018, j'ai eu envie d'accueillir un autre cheval pour lui offrir
            la même vie que Fanie ! C'est <b>Charlie</b> qui nous a rejoint.
            Elle avait 12 ans à l'époque. Elle est passée par plusieurs
            propriétaires et plusieurs clubs. Elle était remplie de tristesse et
            donnait l'impression de se laisser mourir. S'ajoutaient aussi ses
            problèmes de santé : emphysème, narcolepsie, headshaking, entre
            autres. J'ai voulu la sauver et lui redonner l'envie. Rien ne s'est
            passé comme prévu. Après 2 ans dans des conditions de vie idéale où
            je ne faisais que de la balade montée et du travail à pied, elle
            était toujours éteinte. Mais pourquoi ? Charlie a été mon déclic.
            Elle a fait tomber mes croyances. Guidée par une communication
            animale, j'ai tout repris à zéro. Quelques hauts, pas mal de bas.
            J'ai beaucoup réfléchi. J'ai pris des cours. Je me suis faite
            encadrer. J'avais encore tellement de choses à apprendre.
            Aujourd'hui, on sort enfin la tête de l'eau : elle est pétillante et
            ses problèmes de santé ont quasi disparu, et sans traitement !<br />
            <br />
            Très récemment, <b>Kasmine</b> nous a rejoint, pouliche de 2 ans que
            j'avais vu naître dans l'élevage du père d'une amie. Avec elle,
            l'histoire ne fait que commencer. Je reprendrai ces lignes dans
            quelques années ;)
            <br />
            <br />
            En parallèle de mes chevaux, j'ai travaillé dans une structure
            hospitalière avec des équidés où l'on pratiquait la médiation
            équine. Après avoir été moi-même formée, j'ai éduqué les chevaux à
            la médiation pour qu'ils puissent aider les patients à aller mieux.
            J'ai également travaillé dans une ferme pédagogique où j'ai adoré
            donner des cours et transmettre mon approche à des enfants. Les
            guider dès leur plus jeune âge vers une relation respectueuse de
            l'animal est pour moi essentiel.
            <br />
            <br />
            Passionnée par ces animaux fabuleux, je réalise des sauvetages.
            Depuis 2019, j'ai accueilli 5 chevaux !<br />
            <br />
            Avec l'histoire de Charlie, j'ai souhaité me former à la
            communication animale. Et enfin, j'ai passé la formation de
            comportementalisme équin avec Marie Sutter pour aider à mon tour les
            propriétaires en quête d'une meilleure compréhension de leur cheval.
            <br />
            <br />
            Aujourd'hui, j'accompagne les propriétaires vers une écoute
            améliorée de leur animal, aussi bien sur des problématiques de
            comportement du cheval que sur du travail à pied.
          </p>
        </div>
      </div>
      <div
        className="row g-0 full-img-background container-pretty-quote"
        style={{
          backgroundImage: 'url("./img/propos/a-propos-chloe-deschamps-2.jpg")',
        }}
      >
        <div className="pretty-quote quote">
          « Ma vocation ? Aider les chevaux et les humains à mieux se comprendre
          ! »
        </div>
      </div>
      <div className="premier-bloc">
        <div className="container history-bloc">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h2-title">Diplômes et formations</h2>
            </div>
          </div>
          <div className="row history-diagram">
            <div class="col-md-12">
              <div class="card card-bck">
                <div class="card-body">
                  <div id="content">
                    <ul class="timeline">
                      <li class="event">
                        <span className="data-date">
                          Comportementaliste équin <br/> <span className="date-txt">(2022)</span>
                        </span>
                        <p>
                          Formée par Animho avec Marie Sutter. Durant 1 an des
                          cours à distance et une semaine de pratique
                          d'évaluation en présentiel. Je recommande cette super
                          formation qui m'a appris beaucoup de choses malgré mes
                          nombreuses connaissances et qui va me permettre
                          aujourd'hui d'exercer le métier dont j'ai toujours
                          rêver !
                        </p>
                      </li>
                      <li class="event">
                        <span className="data-date">
                          Savoirs éthologiques 1 à 4 <br/> <span className="date-txt">(2018-2022)</span>
                        </span>
                        <p>
                          Il me semblait important de passer mes savoirs
                          éthologiques pour faire valoir mes acquis et apprendre
                          avec d'autres professionnels et chevaux.
                          <br />
                          Avec Florence Serre et Chloé Bureau Roubaud.
                        </p>
                      </li>
                      <li class="event">
                        <span className="data-date">
                          Communication animale et soins énergétique <br/> <span className="date-txt">(2019)</span>
                        </span>
                        <p>
                          Mes expériences positives avec la communication
                          animale m'ont amenée à me former avec Lucie Perriolat.
                          Le niveau 1 et 2 en poche je pratique uniquement pour
                          mes animaux ou ceux de mes proches.
                        </p>
                      </li>
                      <li class="event">
                        <span className="data-date">
                          Attelage et traction animale <br/> <span className="date-txt">(2018)</span>
                        </span>
                        <p>
                          Une discipline qui me plait beaucoup et pour laquelle
                          j'aimerais avoir plus souvent !<br />
                          Avec Denis Beaumelle
                        </p>
                      </li>
                      <li class="event">
                        <span className="data-date">
                          Médiation équine <br/> <span className="date-txt">(2017)</span>
                        </span>
                        <p>
                          J'ai découvert la médiation équine au seins de
                          l'association Equi-Liance avec Patricia Faure. J'aime
                          aider les personnes en situation de handicap avec des
                          chevaux volontaires qui aiment faire ça, toujours dans
                          l'optique d'un mieux être. Je forme les chevaux à
                          cette pratique ainsi que des professionnels de santé
                          lors de formations organisées par l'association.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container history-bloc second-bloc">
        <div className="row">
          <div className="col-md-12">
            <h2 className="h2-title">Où est-ce que j'ai travaillé avant ?</h2>
          </div>
        </div>
        <div className="row history-diagram">
          <div class="col-md-12">
            <div class="card card-bck">
              <div class="card-body">
                <div id="content">
                  <ul class="timeline">
                    <li class="event">
                      <span className="data-date">
                        Soigneuse animalière/médiation équine/monitrice
                        d'équitation<br/> <span className="date-txt">(2022)</span>
                      </span>
                      <p>
                        Responsable de la ferme pédagogique, prise en charge et
                        soins des animaux. <br />
                        Encadrement des stagiaires et bénévoles.
                        <br />
                        Visites guidées de la ferme.
                        <br />
                        Séances de médiations équine avec plusieurs structures
                        et les chevaux du site.
                        <br />
                        Encadrements cours d'équitation, travail à pied, balade,
                        cours monté.
                      </p>
                    </li>
                    <li class="event">
                      <span className="data-date">Médiation équine <br/> <span className="date-txt">(2021)</span></span>
                      <p>
                        Dans un Institut d'Education Sensorielle
                        <br />
                        Encadrement des séances de médiation avec des oiseaux,
                        poissons et cochon d'inde.
                        <br />
                        Rédaction de comptes rendus et création des séances
                        <br />
                        Prise en charge et soins des animaux
                      </p>
                    </li>
                    <li class="event">
                      <span className="data-date">
                        Soigneuse animalière <br/> <span className="date-txt">(2017/2021)</span>
                      </span>
                      <p>
                        Dans le parc d'un hôpital psychiatrique
                        <br />
                        Prise en charge et soins aux animaux
                        <br />
                        Nourrissage, entretient, maintenance, optimisation des
                        espaces, gestion des stocks et achats.
                        <br />
                        Gestion du planning d'activité des chevaux.
                      </p>
                    </li>
                    <li class="event">
                      <span className="data-date">
                        Médiation équine <br/> <span className="date-txt">(2019/2020)</span>
                      </span>
                      <p>
                        Encadré par l'association Equi-Liance dans une structure
                        hospitalière. <br />
                        Supervisions des bénévoles.
                        <br />
                        Accueil des patients en séances de médiation.
                        <br />
                        Travail avec le cheval médiateur.
                        <br />
                        Rédaction de comptes rendus et suivi des séances.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row g-0 full-img-background container-contact"
        style={{
          backgroundImage: 'url("./img/propos/a-propos-chloe-deschamps-3.jpg")',
        }}
      >
        <div className="text-contact">
          <p>Merci d'avoir lu jusqu'ici ! J'espère que cette page vous aura permis d'en apprendre plus sur mon histoire avec les chevaux. N'hésitez pas à me contacter si besoin.
             Je vous accompagnerai avec plaisir dans votre relation avec votre cheval !
          </p>
          <a className="btn btn-contact" href="/contact">CONTACT</a>
        </div>
      </div>
    </div>
  );
};
export default Propos;
