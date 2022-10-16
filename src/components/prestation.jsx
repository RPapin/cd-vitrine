import './prestation.scss'
import { useState, useEffect } from "react";
import { PrestationOne } from './prestationOne/prestationOne';
import { PrestationTwo } from './prestationTwo/prestationTwo';
export const Prestation = (props) => {

    return (
      <div id='prestation' className='text-center section-full-container'>
        {props.data && 
        <div className={'container ' + props.className}>
            {props.data.sectionTitle && 
            <div className='row'>
                <div className='col-md-10 col-md-offset-1 section-title'>
                     <h2>{props.data.sectionTitle}
                    
                     </h2>
                </div>
            </div>
            }
          <div className='row frame-container'>
            <div className="title">
                <span>{props.data.title1} 
                {props.className !== "accompagnement" && <> &#128052;</>}
                
                </span>
                {props.className !== "accompagnement" &&
                  <div className='title-bis'>(pour les enfants de 6 à 10 ans/groupe de 4 max)</div>
                }

            </div>
            <hr></hr>
            <div className="sub-title">
              {props.className === "accompagnement" ? 
                <>Votre cheval a des <span className='bold'>problèmes de comportement</span> que vous aimeriez résoudre ?<br></br>
                Vous avez envie de développer une <span className='bold'>relation de complicité </span>avec lui ?<br></br>
                Vous souhaitez être accompagné(e) dans le <span className='bold'>travail</span> ?<br></br><br></br>
                Je vous propose des séances d'accompagnement avec votre cheval !</> : 
                <>Vous souhaitez faire découvrir le monde des poneys à votre enfant ? <br></br> Je vous propose des ½ journées en immersion avec les poneys ! </>}
            </div>
            {props.className === "accompagnement" ?
              <PrestationOne data={props.data}/> : <PrestationTwo data={props.data}/>
            }
            <hr></hr>
            <div className="tarif-title title">
                <span id='only-tarif'>{props.data.title2 + " : " + props.data.tarifValue}</span>
                {props.className === "accompagnement" &&
                <div className='sub-title-price'>Pack 5 séances : 200€</div>}
            </div>
            {/* <div className="tarif">
                <span><button type="button" className="btn btn-presta">{props.data.fakeButton}</button></span>
            </div> */}
          </div>
        </div>
        }
      </div>
    )
  }
  