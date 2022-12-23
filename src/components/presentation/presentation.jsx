import { useState, useEffect } from "react";
import './presentation.scss'
export const Presentation = (props) => {

    return (
        <div className="full-container presentation">
            <div className="header img-background" style={{ backgroundImage: "url(/img/photoDrive/testBackground.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 header-text-container">
                            <div className="presentation-header">
                                <h1 className="h1-title">À propos de moi</h1>
                                <p className="header-text">Si vous souhaitez en savoir plus sur mon cheminement avec les chevaux, sur les raisons qui m'ont poussées à devenir comportementaliste équin, vous êtes au bon endroit !</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container presentation-bloc">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="h2-title">
                            Mon histoire
                        </h2>
                        <p cl
                        ssName="presentation-text">Tout a commencé en centre équestre, j'étais cette petite fille qui voulait monter les chevaux.
                         J'ai passé mes 4 galops puis j'ai eu envie de descendre de cheval pour passer du temps avec lui et apprendre à mieux le connaitre. 
                         Malheureusement ma demande n'a pas été accepté au club alors j'avais deux choix... Continuer l'équitation et culpabiliser de monter à cheval ou tout arrêter et ne plus avoir de contact avec les chevaux. 
                         J'ai choisi la deuxième option, j'ai tout stoppé, même mon option équitation noté du bac. Et j'ai fais un break, j'ai cherché des demi-pensions mais il fallait venir travailler le cheval, 
                         j'ai cherché des clubs plus éthique mais il n'y en avais pas... Tout ce que je cherchais était pourtant simple : passer du temps à pied et créer une relation. En 2016, après beaucoup de réflexion 
                         j'ai décidé d'acquérir un équidé pour enfin pouvoir faire ce que je veux ! C'est Fanie qui est entrée dans ma vie, elle avait 1 an et moi 17 ans. Elle était inapprochable et agressive mais en faite elle était incomprise. 
                         C'est avec elle que j'ai vécu mes plus beaux moments de complicité. La vraie. Celle ou le cheval est libre de s'exprimer, ou les décisions se font d'un commun accord et ou le plaisir est partagé. 
                         Je vivais un rêve avec elle, elle l'avait réalisé. Elle m'a appris à écouter les chevaux, à les comprendre et à construire une relation fusionnelle. Des balades à pied en liberté, des séances de jeux dans le pré, 
                         des moments câlins, des baignades dans l'eau, des rencontres extraordinaires grâce aux réseaux sociaux. En parallèle je travaillais dans une structure hospitalière avec des chevaux ou l'ont pratiquait la médiation équine. 
                         Après avoir été formée, j'ai formé les chevaux à la médiation. et les chevaux aidaient les patient de l'hôpital à aller mieux.<br/><br/> En 2018 j'ai eu envie de d'acheter un autre cheval pour lui offrir la même vie que Fanie et 
                         partager notre bonheur à plusieurs ! Je rencontre Charlie, elle a 12 ans et a déjà cumuler les propriétaires et enchainé 3 clubs différents. C'est une jument rempli de tristesse et qui se laisse vivre... 
                         Elle avait beaucoup de problème de santé, emphysème, narcolepsie, headshaking... Je l'ai récupérer pour la sauver, pour lui redonner gout à la vie et sauf que ça ne s'est pas passé comme prévu... 
                         Après 2 ans avec des conditions de vies idéales, un alimentation adaptée, à faire uniquement des balades et du travail à pied elle était toujours aussi éteinte et lassée par la vie... Je ne comprenait pas pourquoi elle était 
                         si mal et je ne voyais pas ce que je pouvais faire de plus pour la rendre heureuse.... Charlie a été mon déclic, ma plus belle remise en question, celle qui a fait tomber mes croyances et qui m'a fait ouvrir les yeux. 
                         Guidée par une communication animale on a tout repris à 0 pendant 2 ans on a tout reconstruit ensemble, on a eu des hauts et des bas, j'ai beaucoup réfléchi, j'ai pris des cours, je me suis faite encadré et j'ai appris 
                         beaucoup grâce à elle. (quand je vous dis que les chevaux ne croisent pas notre route pour rien...) Et aujourd'hui en 2022 je peux dire qu'on sort la tête de l'eau, qu'elle va mieux, ses problèmes de santé ont quasi disparu 
                         (sans traitement) qu'elle est pétillante et a retrouvé gout à la vie ! Je me suis formée à la communication animale après ça ! C'est le mental qui donne la force au corps, c'est ce que j'ai eu envie de transmettre et 
                         d'apprendre encore plus ces animaux fabuleux ! Alors j'ai passé la formation de comportementaliste équin avec Marie Sutter en 2021/2022 pour aider à mon tour les chevaux qui ont besoin d'aide et en faire mon métier car maintenant 
                         je sais comment faire. En parallèle j'ai travaillé dans une ferme pédagogique et équestre ou j'ai donné cours à des plus jeunes et j'ai adoré leur transmettre mon savoir, les guider dans la relation avec le cheval pour que à 
                         leur tour, ils puissent transmettre ! Je fais un petit retour dans le temps, en 2020 alors que j'aide une amie dans son élevage de trotteurs une petite pouliche nait et c'est deux ans plus tard en 2022 qu'elle rejoindra la 
                         famille. En parallèle j'aide les chevaux grâce à des sauvetages, je récupère des cas comportementaux compliqués pour les rééduquer et leur donner une seconde en chance en les replaçant dans des familles. 
                         J'en ai accueilli 5 depuis 2019. Ma vocation c'est d'aider les chevaux, aider les humains à les comprendre et transmettre mon savoir et mes connaissances !</p>
                    </div>
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
                        <div class="card">
                            <div class="card-body">
                                <div id="content">
                                    <ul class="timeline">
                                        <li class="event" >
                                            <span className="data-date">Comportementaliste équin (2022)</span>
                                            <p>Formée par Animho avec Marie Sutter. Durant 1 an des cours à distance et une semaine de pratique d'évaluation en présentiel. 
                                                Je recommande cette super formation qui m'a appris beaucoup de choses malgré mes nombreuses connaissances et qui va me permettre aujourd'hui d'exercer le métier dont j'ai toujours rêver !
                                            </p>
                                        </li>
                                        <li class="event" >
                                            <span className="data-date">Savoirs éthologiques 1 à 4 (2018-2022)</span>
                                            <p>Il me semblait important de passer mes savoirs éthologiques pour faire valoir mes acquis et apprendre avec d'autres professionnels et chevaux.<br/>
                                            Avec Florence Serre et Chloé Bureau Roubaud.</p>
                                        </li>
                                        <li class="event">
                                            <span className="data-date">Communication animale et soins énergétique (2019)</span>
                                            <p>Mes expériences positives avec la communication animale m'ont amenée à me former avec Lucie Perriolat. Le niveau 1 et 2 en poche je pratique uniquement pour mes animaux ou ceux de mes proches.</p>
                                        </li>
                                        <li class="event" >
                                            <span className="data-date">Attelage et traction animale (2018)</span>
                                            <p>Une discipline qui me plait beaucoup et pour laquelle j'aimerais avoir plus souvent !<br/>
                                                Avec Denis Beaumelle</p>
                                        </li>
                                        <li class="event">
                                            <span className="data-date">Médiation équine (2017)</span>
                                            <p>J'ai découvert la médiation équine au seins de l'association Equi-Liance avec Patricia Faure. J'aime aider les personnes en situation de handicap avec des chevaux volontaires qui aiment faire ça, toujours dans l'optique d'un mieux être. 
                                                Je forme les chevaux à cette pratique ainsi que des professionnels de santé lors de formations organisées par l'association.</p>
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
                        <div class="card">
                            <div class="card-body">
                                <div id="content">
                                    <ul class="timeline">
                                        <li class="event" >
                                            <span className="data-date">Soigneuse animalière/médiation équine/monitrice d'équitation (2022)</span>
                                            <p>Responsable de la ferme pédagogique, prise en charge et soins des animaux. <br/>
                                                Encadrement des stagiaires et bénévoles.<br/>
                                                Visites guidées de la ferme.<br/>
                                                Séances de médiations équine avec plusieurs structures et les chevaux du site.<br/>
                                                Encadrements cours d'équitation, travail à pied, balade, cours monté.</p>
                                        </li>
                                        <li class="event" >
                                            <span className="data-date">Médiation équine (2021)</span>
                                            <p>Dans un Institut d'Education Sensorielle<br/>
                                                Encadrement des séances de médiation avec des oiseaux, poissons et cochon d'inde.<br/>
                                                Rédaction de comptes rendus et création des séances<br/>
                                                Prise en charge et soins des animaux</p>
                                        </li>
                                        <li class="event">
                                            <span className="data-date">Soigneuse animalière (2017/2021)</span>
                                            <p>Dans le parc d'un hôpital psychiatrique<br/>
                                                Prise en charge et soins aux animaux<br/>
                                                Nourrissage, entretient, maintenance, optimisation des espaces, gestion des stocks et achats.<br/>
                                                Gestion du planning d'activité des chevaux.</p>
                                        </li>
                                        <li class="event" >
                                            <span className="data-date">Médiation équine (2019/2020)</span>
                                            <p>Encadré par l'association Equi-Liance dans une structure hospitalière. <br/>
                                                Supervisions des bénévoles.<br/>
                                                Accueil des patients en séances de médiation.<br/>
                                                Travail avec le cheval médiateur.<br/>
                                                Rédaction de comptes rendus et suivi des séances.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
  }
  