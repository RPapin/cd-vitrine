import { useState, useEffect } from "react";
import './accompagnementBloc.scss'

export const AccompagnementBloc = (props) => {
    function createMarkup(text) {
        return {__html: text};
      }
    return (
        <div className="block-accompagnement">
            <div className="row row-title">
                <div className="col-sm-2">
                    <img src={"img/testimonials/" + props.data.imgSrc} alt={props.data.imgAlt} />
                </div>
                <div className="col-sm-9 col-sm-offset-1 title-container">
                    <h3 className="title-accompagnement">{props.data.title}</h3>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-sm-9 col-md-offset-3">
                    <p className="text-accompagnement" dangerouslySetInnerHTML={createMarkup(props.data.text)}></p>
                </div>
            </div>
        </div>
    )
  }
  