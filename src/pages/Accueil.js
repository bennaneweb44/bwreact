import React, {useState} from 'react';
import '../App.scss';
import Logo from '../images/favicon.png';

function Navigation() {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)
  const closeMenu = () => setIsNavCollapsed(true)

  window.addEventListener('click', function(e) {
    if (!document.getElementById('navbar').contains(e.target)) {
      // Clicked outside the box
      setIsNavCollapsed(true)
    }
  })

  return (
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light navbar-secondary fixed-top p-2 simple-linear rounded bg-light" aria-label="Main navigation">
        <div className="container">
          <a className="navbar-brand logo-text" onClick={closeMenu} href="index.html"><i>Bennane Web</i></a>

          <button className="custom-toggler p-0 border-0 text-light d-xs-block d-sm-block d-md-none" id="navbarSideCollapse" type="button" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse}>
              <span className="navbar-toggler-icon" ></span>
          </button>

          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExampleDefault" >
            <ul className="navbar-nav ms-auto navbar-nav-scroll">
              <li className="nav-item">
                  <a className="nav-link" onClick={closeMenu} href="#home" aria-current="page"><i className="fas fa-home"></i> Accueil</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" onClick={closeMenu} href="#technologies"><i className="fas fa-microchip"></i> Technologies</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" onClick={closeMenu} href="#realisations"><i className="fas fa-palette"></i> Réalisations</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" onClick={closeMenu} href="#contact"><i className="fas fa-envelope"></i> Contact</a>
              </li>
            </ul>
          </div>

        </div>
      </nav> 

      <section className="home py-5 d-flex" id="home">
        <div className="container text-light mt-5" data-aos="fade-right"> 
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
