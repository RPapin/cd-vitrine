import { useState, useEffect } from "react";
import './accompagnementLayer.scss'

export const AccompagnementLayer = (props) => {
    function createMarkup(text) {
        return {__html: text};
      }
    return (
        <div className={"layer-accompagnement " + props.className}>
            <div className="row">
                <div className="col-md-12 icon-block">
                    <img src={"img/testimonials/" + props.data.imgSrc} alt={props.data.imgAlt} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 title-container">
                    <h3 className="title-accompagnement">{props.data.title}</h3>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-md-12">
                    <p className="text-accompagnement" dangerouslySetInnerHTML={createMarkup(props.data.text)}></p>
                </div>
            </div>
        </div>
    )
  }
  