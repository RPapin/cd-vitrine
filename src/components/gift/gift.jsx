import React, { useState, useEffect } from 'react'
import './gift.scss'



const Gift = () => {
    const lastar_keycode = [76, 65, 83, 84, 65]
    const [show, setShow] = useState(false)
    const [keyPressed, setKeyPressed] = useState([])

    const handleClose = () => setShow(false);
    useEffect( () => {
        
        function handleKeyDown(e) {
            if(keyPressed.toString() === lastar_keycode.toString()){
                setShow(true)
                document.getElementById("btnToggleModal").click();
            }
            if(lastar_keycode.includes(e.keyCode)){
                let tempKeyPressed = keyPressed
                tempKeyPressed.push(e.keyCode)
                setKeyPressed(tempKeyPressed)
            } else{
                setKeyPressed([]);
            } 
          }
        document.addEventListener("keydown", handleKeyDown);
         // Don't forget to clean up
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [keyPressed, show])
    return (
        <>
        <button type="button" className="btn btn-primary hide" data-toggle="modal" data-target="#myModal" id="btnToggleModal">Large modal</button>
        <div className="modal fade" tabIndex="-1" role="dialog" id="myModal" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className={'gift-container'} >
                    <div className="card">
                        <div className="back"></div>
                        <div className="front">
                            <div className="cover-shape-large">
                            <div className="shape-diamond"></div>
                            <div className="shape-block"></div>
                            </div>
                            <div className="cover-shape-small">
                            <div className="shape-diamond"></div>
                            <div className="shape-block">
                                <div className="cake">
                                <div className="layer layer-bottom"></div>
                                <div className="layer layer-middle"></div>
                                <div className="layer layer-top"></div>
                                <div className="icing"></div>
                                <div className="drip drip1"></div>
                                <div className="drip drip2"></div>
                                <div className="drip drip3"></div>
                                <div className="candle">
                                    <div className="flame"></div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        <div className="text-container">
                            <p id="head">Joyeux anniversaire ma star !</p>
                            <p>Je t'offre une magnifique journée tous les deux avec au programme:<br/>
                            - Restaurant <br/>
                            - Shopping <br/>
                            - Cinéma 
                            </p>

                            <p>Trop hate !!!</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )

}

export default Gift