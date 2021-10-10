import React from 'react'
import '../App.scss'

function FooterSecond() {
  return (    
    <div>
      <div className="bottom py-2 text-light" >
        <div className="container" >
          <div className="my-3 text-center">
              <p className="pt-3 pb-0">
                <span className="mr-3">Bennane Web © 2021 </span>                
                <a href="https://www.linkedin.com/in/aziz-bennane/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin fa-1x py-2"></i>
                </a>              
              </p>               
          </div>
        </div> 
      </div> 
    </div>
  );
}

export default FooterSecond;
