/* src/App.js */
import React, { useEffect, useState } from 'react'
import LandingPage from './components/landingPage/landingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VideoDisplay from './components/videoDisplay/videoDisplay';


const App = ({ signOut, user }) => {

  return (
    <div className='App'>
      <LandingPage/> 
    </div>
  )
}

export default App;