import { useState, useEffect } from "react";
import { AccompagnementBlock, FunnyBlock } from "./funnyBlock/funnyBlock";
import './offreFullFunny.scss'
export const OffreFullFunny = (props) => {
    useEffect(() => {
        console.log(props)
      });
    return (
        <div className="full-container">
            <div className="header img-background" style={{ backgroundImage: "url(/img/photoDrive/testBackground.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 header-text-container">
                            <h1 className="h1-title">​Immersion autour du poney</h1>
                            <p className="header-text">Profitez d'un après midi pour laisser votre enfant découvrir le monde du poney. Apprendre à s'en occuper, 
                            à en prendre soins, à le mener en main, en longe ou en liberté, connaitre son langage et son comportement tout en s'amusant !</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container funny-pony">
                <FunnyBlock data={props.data.BlockUn} side="left"/>
                <FunnyBlock data={props.data.BlockDeux} side="right"/>
                <FunnyBlock data={props.data.BlockTrois} side="left"/>
                <FunnyBlock data={props.data.BlockQuatre} side="right"/>
                <FunnyBlock data={props.data.BlockCinq} side="left"/>
                <FunnyBlock data={props.data.BlockSix} side="right"/>
            </div>
        </div>
    )
  }
  