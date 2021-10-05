import React from 'react';
import Accueil from './pages/Accueil.js'
import Technologies from './pages/Technologies.js'
import Realisations from './pages/Realisations.js'
import Contact from './pages/Contact.js'
import './App.css';

function App() {
  return (  
    <div>
      <Accueil></Accueil>
      <Technologies></Technologies>
      <Realisations></Realisations>
      <Contact></Contact>
    </div>  
  );
}

export default App;
