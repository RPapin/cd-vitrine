import './snackbar.scss'
import { useState, useEffect } from "react";

export const Snackbar = (props) => {
    useEffect(() => {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
      
        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      });

    return (
      <div id='snackbar-container' className='text-center'>
        <div id="snackbar">Votre message à bien été envoyé</div>
      </div>
    )
  }