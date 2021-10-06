import React from 'react';
import '../App.scss';

function Navigation() {
  return (    
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-secondary p-2 simple-linear" aria-label="Main navigation">
        <div className="container">
          <a className="navbar-brand logo-text" href="index.html"><i>Bennane Web</i></a>

          <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault" >
            <ul className="navbar-nav ms-auto navbar-nav-scroll">
              <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home"><i className="fas fa-home"></i> Accueil</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#technologies"><i className="fas fa-microchip"></i> Technologies</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#realisations"><i className="fas fa-palette"></i> Réalisations</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#contact"><i className="fas fa-envelope"></i> Contact</a>
              </li>
            </ul>
          </div> 
        </div>
      </nav> 

      <section className="home py-5 d-flex align-items-center" id="home">
        <div className="container text-light py-5 mt-5" data-aos="fade-right"> 
            <h1 className="headline"><span className="home_text">Aziz BENNANE</span><br />Développeur full-stack</h1>
            <p className="para para-light py-4">Développement backend et frontend sur mesure !</p>
            <div className="d-flex align-items-center">
              <p><span className="text-center"><i className="fas fa-edit fa-lg text-end logoEtude"></i></span> Etude du besoin.</p>
            </div>
            <div className="d-flex align-items-center">
              <p><span className="text-center"><i className="fas fa-circle fa-drafting-compass fa-lg logoConception"></i></span> Conception.</p>              
            </div>            
            <div className="d-flex align-items-center">
              <p><span className="text-center"><i className="fas fa-file-code fa-lg logoDev"></i></span> Développement.</p>              
            </div>
            <div className="my-5">
              <a className="btn" href="#realisations">Réalisations</a>
            </div>
        </div> 
      </section>
    </div>
  );
}

export default Navigation;
