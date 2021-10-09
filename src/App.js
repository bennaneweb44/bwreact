import React, { useState, useEffect } from 'react';
import Accueil from './pages/Accueil.js'
import Technologies from './pages/Technologies.js'
import Realisations from './pages/Realisations.js'
import Contact from './pages/Contact.js'
import FooterFirst from './pages/FooterFirst.js'
import FooterSecond from './pages/FooterSecond.js'
import UpArrow from './pages/UpArrow/UpArrow.js'
import './App.css';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHideFrom = 1;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
      
    setIsVisible(false);
    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    }
  };

  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])

  return (  
    <div>
      <Accueil></Accueil>
      <Technologies></Technologies>
      <Realisations></Realisations>
      <Contact></Contact>
      <FooterFirst></FooterFirst>
      { isVisible &&
        <UpArrow></UpArrow>
      }
      <FooterSecond></FooterSecond>
    </div>
  );
}

export default App;
