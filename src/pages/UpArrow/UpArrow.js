import React from 'react'
import upButton from './up-arrow.png'
import '../../App.scss'

function topFunction() {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

function FooterSecond(props) {
  return (    
    <div>
      <button onClick={topFunction} className="myBtn">
        <img src={upButton} alt="alternative" />
      </button>                  
    </div>
  );
}

export default FooterSecond;
