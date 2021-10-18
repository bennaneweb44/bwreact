import React, { useState } from 'react';
import Axios from 'axios'
import Validator from 'validator'
import '../App.scss';

function Contact() {
  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  const submit = () => {
    if (email && !Validator.isEmail(email)) {
      alert('Erreur : l\'adresse email est invalide !')
    }
    else if (telephone && !Validator.isNumeric(telephone, 'fr-FR')) {
      alert('Erreur : le téléphone est invalide !')
    }
    else if (name && email && Validator.isEmail(email) && telephone && message) {
      const headers = {
        'Content-Type': 'application/json'
      }

      let data = {
        nom: name,
        telephone: telephone,
        email: email,
        message: message
      }
      
      Axios.post('https://services.bennaneweb.fr/email/send', data, {
          headers: headers
      })
        .then((response) => {
          console.log('its ok ....');
          setName('');
          setTelephone('');
          setEmail('');
          setMessage('');
          setEmailSent(true);
          //TODO: toast here
      })
      .catch((error) => {
        //TODO: toast here
        console.error('ERROR ....'+error.message);
      })
    } else {
        alert('Au moins un des champs n\'est pas renseigné !');
    }
  }

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
                                    <input type="text" className={`form-control form-control-input border border-default`} value={name} onChange={e => setName(e.target.value)} placeholder="Nom" />
                                </div>                                
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group py-2">
                                    <input type="email" className={`form-control form-control-input border border-default`} value={telephone} onChange={e => setTelephone(e.target.value)} placeholder="Numéro de téléphone" />
                                </div>                                 
                            </div>
                        </div>
                        <div className="form-group py-1">
                            <input type="email" className={`form-control form-control-input border border-default`} value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
                        </div>  
                        <div className="form-group py-2">
                            <textarea className={`form-control form-control-input border border-default`} value={message} onChange={e => setMessage(e.target.value)} rows="6" placeholder="Message"></textarea>
                        </div>                            
                    </div>
                    <div className="my-3">
                        <button onClick={submit} className="btn form-control-submit-button">Envoyer</button>
                    </div>
                    <div className={`my-3 bg-success text-center rounded mt-4 border border-white ${emailSent ? "visible" : "d-none"}`} >
                        <span><i className="fa fa-check"></i> Demande reçue. Je vous contacterai dès que possible !</span>
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
