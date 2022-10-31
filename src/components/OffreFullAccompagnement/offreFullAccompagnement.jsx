import { useState, useEffect } from "react";
import { AccompagnementBloc } from "./accompagnementBlock/accompagnementBloc";
import { AccompagnementLayer } from "./accompagnementLayer/accompagnementLayer";
import './offreFullAccompagnement.scss'

export const OffreFullAccompagnement = (props) => {

    return (
        <div className="full-container">
            <div className="header img-background" style={{ backgroundImage: "url(/img/photoDrive/testBckgrdAccompagnement.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 only-background">

                        </div>
                    </div>
                </div>
            </div>
            <div className="container" id="block-container">
                <div className="row">
                    <div className="col-md-6">
                        <AccompagnementBloc data={props.data.BlockUn} />
                    </div>
                    <div className="col-md-6">
                        <AccompagnementBloc data={props.data.BlockDeux} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <AccompagnementBloc data={props.data.BlockUn} />
                    </div>
                    <div className="col-md-6">
                        <AccompagnementBloc data={props.data.BlockDeux} />
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="layer-container">
                <div className="row no-gutters align-items-stretch">
                    <div className="col-md-3 col-sm-12">
                        <AccompagnementLayer data={props.data.LayerUn} className="dark"/>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <AccompagnementLayer data={props.data.LayerDeux} className="grey"/>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <AccompagnementLayer data={props.data.LayerUn} className="white"/>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <AccompagnementLayer data={props.data.LayerDeux} className="green"/>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  