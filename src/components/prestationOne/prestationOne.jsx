import { useState, useEffect } from "react";
import './prestationShared.scss'
export const PrestationOne = (props) => {

    return (
    <div className="frame-list">
        <div className="list-item">
            <span className="list-number">1</span> 
            <span className="list-text">{props.data.One}</span>
        </div>
        <div className="list-item">
            <span className="list-number">2</span> 
            <span className="list-text">{props.data.Two}</span>
        </div>
        <div className="list-item list-text">
            <span className="list-number"></span>
            <span className="list-text">
            <ul className="custom-list">
              <li>échange autour de votre cheval et de vos attentes,</li>
              <li>analyse de ses problématiques s'il en a (et proposition de solutions),</li>
              <li>accompagnement au travail à pied,</li>
              <li>exercices pour renforcer votre relation.</li>
            </ul>
            </span>
        </div>
    </div>
    )
  }
  