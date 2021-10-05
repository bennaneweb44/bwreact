import React from 'react';
import '../App.scss';

function Technologies() {
  return (    
    <div>
      <section className="services d-flex align-items-center " id="technologies">        
        <div className="container text-light">            
            <br className="d-xl-none d-xxl-block d-lg-none d-xl-block" />
            <h2 className="py-2"><i className="fas fa-microchip"></i><span className="home_text"> Technologies</span></h2>
            <div className="row gy-4 py-2" data-aos="zoom-in">
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <i className="fas fa-code fa-2x p-0"></i>
                        <h4 className="py-2">Frameworks</h4>
                        <p className="para-light">Application des principes de la méthode Agile sous les frameworks Laravel/Symfony côté Backend et Vue.js en Front.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <i className="fas fa-mobile-alt fa-2x p-0"></i>
                        <h4 className="py-2">Responsive design</h4>
                        <p className="para-light">Respect de la contrainte de l'utilisation du produit final sur tous les supports du moment (PC, tablette, smartphone).</p>
                    </div>                    
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <i className="fas fa-lock fa-2x p-0"></i>
                        <h4 className="py-2">Sécurité</h4>
                        <p className="para-light">Utilisation du protocole "https" qui permet un chiffrement des données transportées entre le client et le serveur.</p>
                    </div>                    
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <i className="fas fa-rss fa-2x p-0"></i>
                        <h4 className="py-2">Api REST</h4>
                        <p className="para-light">Exposition d'URL de ressources avec authentification et autorisations. Implémentation de clients REST en PHP.</p>
                    </div>                    
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <i className="fas fa-code-branch fa-2x p-0"></i>
                        <h4 className="py-2">Test & versionning</h4>
                        <p className="para-light">Test unitaire et fonctionnel du code métier produit (PhpUnit, VueTestUtils) et utilisation de "Git/Github/Gitlab" pour le versionning.</p>
                    </div>                    
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <i className="fas fa-bezier-curve fa-2x p-0"></i>
                        <h4 className="py-2">Domain Driven Design</h4>
                        <p className="para-light">Logique orientée objet de la persistance des entités métier, en utlisant des ORM PHP couplés avec le pattern "Repository".</p>
                    </div>                    
                </div>
            </div> 
        </div> 
      </section> 
    </div>
  );
}

export default Technologies;
