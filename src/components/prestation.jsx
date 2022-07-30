import './prestation.scss'
import { useState, useEffect } from "react";
export const Prestation = (props) => {

    return (
      <div id='prestation' className='text-center section-full-container'>
        {props.data && 
        <div className={'container ' + props.className}>
            {props.data.sectionTitle && 
            <div className='row'>
                <div className='col-md-10 col-md-offset-1 section-title'>
                     <h2>{props.data.sectionTitle}</h2>
                </div>
            </div>
            }
          <div className='row frame-container'>
            <div className="title">
                <span>{props.data.title1}</span>
            </div>
            <hr></hr>
            <div className="sub-title">
            <span>{props.data.paragraph}</span>
            </div>
            <div className="frame-list">
                <div className="list-item">
                    <span className="list-number">1</span>
                    <span className="list-text">{props.data.One}</span>
                </div>
                <div className="list-item">
                    <span className="list-number">2</span>
                    <span className="list-text">{props.data.Two}</span>
                </div>
                <div className="list-item last-child">
                    <span className="list-number ">3</span>
                    <span className="list-text">{props.data.Three}</span>
                </div>
            </div>
            <hr></hr>
            <div className="tarif-title title">
                <span>{props.data.title2}</span>
            </div>
            <div className="tarif">
                <span><button type="button" className="btn btn-presta">{props.data.fakeButton}</button></span>
            </div>
          </div>
        </div>
        }
      </div>
    )
  }
  