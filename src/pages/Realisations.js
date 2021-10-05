import React from 'react';
import '../App.scss';

function Realisations() {
  return (    
    <div>
      <section className="services d-flex align-items-center " id="realisations">        
        <div className="container text-light mt-5">            
            <h2><i className="fas fa-palette"></i><span className="home_text"> Réalisations</span></h2>
            <div className="row gy-4 py-2" data-aos="zoom-in">
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <h4 className="py-1">Pricing</h4>
                        <p className="para-light">Outil de placement de produits face à la concurrence.<br />- <u>Stack</u> : Symfony 4.3, Twig, JQuery</p>
                        <div className="my-3">
                            <a className="btn float-end" target="_blank" rel="noopener noreferrer" href="https://pricing.bennaneweb.fr">Visiter</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <h4 className="py-1">My Spend</h4>
                        <p className="para-light">Outil de gestion des dépenses et charges mensuelles.<br />- <u>Stack</u> : Symfony 5.2, Vuejs 2</p>
                        <div className="my-3">
                            <a className="btn float-end" target="_blank" rel="noopener noreferrer" href="https://myspend.bennaneweb.fr">Visiter</a>
                        </div>
                    </div>                    
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <h4 className="py-1">Geolocip</h4>
                        <p className="para-light">Outil de géolocalisation des adresses IP publiques.<br />- <u>Stack</u> : React 17, Leaflet 1.7</p>
                        <div className="my-3">
                            <a className="btn float-end" target="_blank" rel="noopener noreferrer" href="https://geolocip.bennaneweb.fr">Visiter</a>
                        </div>
                    </div>                    
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <h4 className="py-1">Boutique</h4>
                        <p className="para-light">Boutique de démonstration.<br />- <u>Stack</u> : Prestashop, PHP 7.2, Smarty</p>
                        <div className="my-3">
                            <a className="btn float-end" target="_blank" rel="noopener noreferrer" href="https://boutique.bennaneweb.fr">Visiter</a>
                        </div>
                    </div>                    
                </div>                
            </div> 
        </div> 
      </section> 
    </div>
  );
}

export default Realisations;
