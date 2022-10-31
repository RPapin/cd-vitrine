import { useState, useEffect } from "react";
import './funnyBlock.scss'
export const FunnyBlock = (props) => {
    const [css1, setCss1] = useState("");
    const [css2, setCss2] = useState("");
    function createMarkup(text) {
        return {__html: text};
      }
    useEffect(() => {
        if(props.side === "right"){
            setCss1("order-last")
            setCss2("order-first")
        }
      });
    return (
        <>
        <div className="">
            <div className={"block-container row " + props.side } >
                <div className={"img-container col-md-6 " + css1}>
                    <img src={"img/photoDrive/" + props.data.imgSrc} alt={props.data.imgAlt} />
                </div>
            
                <div className={"block-text-container col-md-6 " + css2}>
                    <h3 className="h3-title">{props.data.title}</h3>
                    <p className="header-text" dangerouslySetInnerHTML={createMarkup(props.data.text)}></p>
                </div>
                
            </div>
        
        </div>
        <hr></hr>
        </>
    )
  }
  