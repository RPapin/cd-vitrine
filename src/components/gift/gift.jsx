import React, { useState, useEffect } from 'react'
import './gift.scss'


const Gift = () => {
    const lastar_keycode = [76, 65, 83, 84, 65]
    const [show, setShow] = useState(false)
    const [keyPressed, setKeyPressed] = useState([])

    useEffect( () => {
        
        
        console.log("useEffect");
        function handleKeyDown(e) {
            console.log(keyPressed.toString());
            console.log(lastar_keycode.toString());

            if(keyPressed.toString() === lastar_keycode.toString()){
                console.log("SURPRISE");
                setShow(true)
            }
            if(lastar_keycode.includes(e.keyCode)){
                setKeyPressed(keyPressed.push(e.keyCode))
            } else setKeyPressed([])
          }
        document.addEventListener("keydown", handleKeyDown);
         // Don't forget to clean up
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [show])
    return (
        <>
            {show &&
                <div className={'gift-container'} >
                    <div class="card">
                        <div class="back"></div>
                        <div class="front">
                            <div class="cover-shape-large">
                            <div class="shape-diamond"></div>
                            <div class="shape-block"></div>
                            </div>
                            <div class="cover-shape-small">
                            <div class="shape-diamond"></div>
                            <div class="shape-block">
                                <div class="cake">
                                <div class="layer layer-bottom"></div>
                                <div class="layer layer-middle"></div>
                                <div class="layer layer-top"></div>
                                <div class="icing"></div>
                                <div class="drip drip1"></div>
                                <div class="drip drip2"></div>
                                <div class="drip drip3"></div>
                                <div class="candle">
                                    <div class="flame"></div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        <div class="text-container">
                            <p id="head">Joyeux anniversaire ma star !</p>
                            <p>Je t'offre une magnifique journée tous les deux avec au programme
                                <ul>
                                    <li>Restaurant</li>
                                    <li>Shopping</li>
                                    <li>Cinéma</li>
                                </ul>
                            </p>

                            <p>Trop hate !!!</p>
                        </div>
                        </div>
                </div>
            }
        </>
    )

}

export default Gift