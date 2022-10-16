import { useState, useEffect } from "react";
import '../prestationOne/prestationShared.scss'
export const PrestationTwo = (props) => {

    return (
    <div className="frame-list">
        <div className="list-item list-title">Au programme :</div>
        <div className="list-item list-text">
            <span className="list-number"></span>
            <span className="list-text">
            <ul className="custom-list">
              <li>Quizz sur le poney : sa vie, comment il mange, ce qu'il fait dans une journée.</li>
              <li>Brossage du poney : comment bien s'en occuper et en prendre soin.</li>
              <li>Activités ludiques : parcours à pied en autonomie avec le poney.</li>
              <li>Apprentissages de tours de cirque et demandes en autonomie de jambettes, coucher, assis, ...</li>
            </ul>
            </span>
        </div>
        <div className="prestation-footer">
            <div className="prestation-footer-title">Objectifs :</div>
            <div className="prestation-footer-text"><b>Familiariser</b> votre enfant avec l'animal et le <b>responsabiliser</b></div>
        </div>
    </div>
    )
  }
  