import React from 'react';
import Axios from 'axios'
import '../App.scss';

window.addEventListener('click', function(e) {
  if (document.getElementById('sendEmail').contains(e.target)) {
    const headers = {
      'Content-Type': 'application/json'
    }

    let data = {
      'name': 'aziz',
      'telephone': '0760715758',
      'email': 'aziz44000@yahoo.fr',
      'message': 'ca va'
    }
    
    Axios.post('http://127.0.0.1:8000/email/send', data, {
        headers: headers
    })
      .then((response) => {
        console.log('its ok ....');
        console.log(response)
        //TODO: toast here
        //TODO: toast here
        //TODO: toast here
        //ok
    })
    .catch((error) => {
      //TODO: toast here
      //TODO: toast here
      //TODO: toast here
      console.error('ERROR ....'+error.message);
    })
  }
})

function Contact() {
  return (    
    <div>
      <div className="services d-flex text-light align-items-center" id="contact">
        <div className="container mt-5">
          <div className="row pt-6">
            <div className="col-lg-6 d-flex align-items-center px-lg-7" data-aos="fade-right">
                <div className="w-90 mr-0">
                    <div className="text-center text-lg-start py-4 pt-lg-0">                  
                        <h2 className="py-2"><span className="home_text"><i className="fas fa-envelope"></i> Ecrivez-moi !</span></h2>
                        <p className="para-light">Une questions, une demande d'informations ? </p>
                    </div>
                    <div>
                        <div className="row" >
                            <div className="col-lg-6">
                                <div className="form-group py-2">
                                    <input type="text" className="form-control form-control-input" id="exampleFormControlInput1" placeholder="Nom" />
                                </div>                                
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group py-2">
                                    <input type="email" className="form-control form-control-input" id="exampleFormControlInput2" placeholder="Numéro de téléphone" />
                                </div>                                 
                            </div>
                        </div>
                        <div className="form-group py-1">
                            <input type="email" className="form-control form-control-input" id="exampleFormControlInput3" placeholder="E-mail" />
                        </div>  
                        <div className="form-group py-2">
                            <textarea className="form-control form-control-input" id="exampleFormControlTextarea1" rows="6" placeholder="Message"></textarea>
                        </div>                            
                    </div>
                    <div className="my-3">
                        <button className="btn form-control-submit-button" id="sendEmail">Envoyer</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-down">
              <img className="img-fluid d-none d-lg-block" src="./assets/images/contact.jpg" alt="contact" />        
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default Contact;
