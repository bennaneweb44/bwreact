import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios'
import Validator from 'validator'
import '../App.scss';

const ToastErrorStyle = { 
  color: '#ff7562', 
  border: '1px solid #ff7562' 
}

const ToastSuccessStyle = { 
  color: '#94ebb8', 
  border: '1px solid #94ebb8' 
}

function Contact() { 

  // Form
  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  // Toasts
  const [toastStyle, setToastStyle] = useState(ToastErrorStyle)
  const [toastActive, setToastActive] = useState(false)

  // Loader
  const [loaderActive, setLoaderActive] = useState(false)

  const showToast = (message, withError) => {
    setToastActive(true)

    withError ? setToastStyle(ToastErrorStyle) : setToastStyle(ToastSuccessStyle)

    toast(message, {
      onClose: () => {
        setToastActive(false)
      },
      theme: 'dark',
      hideProgressBar: true,
      autoClose: 2000
    })
  }
  
  const submit = (e) => {
    e.preventDefault()

    if (email && !Validator.isEmail(email)) {      
      !toastActive && showToast('L\'adresse e-mail est invalide !', true)                    
      return
    }
    else if (telephone && !Validator.isNumeric(telephone, 'fr-FR')) {      
      !toastActive && showToast('Le téléphone est invalide !', true)            
      return
    }
    else if (name && email && Validator.isEmail(email) && telephone && message) {
      setLoaderActive(true)

      const headers = {
        'Content-Type': 'application/json'
      }

      let data = {
        nom: name,
        telephone: telephone,
        email: email,
        message: message
      }
      
      Axios.post('http://localhost:8000/email/send', data, {
          headers: headers
      })
        .then((response) => {
          setName('');
          setTelephone('');
          setEmail('');
          setMessage('');
          setEmailSent(true);

          !toastActive && showToast('Demande reçue. Je vous contacterai bientôt.', false)
          setLoaderActive(false)
          setToastActive(false)
      })
      .catch((error) => {
        !toastActive && showToast('Une erreur interne s\'est produite, message non envoyé !', true)
      })
    } else {
      !toastActive && showToast('Au moins un des champs est vide !', true)
    }
  }

  return (    
    <div>
      <div className="services d-flex text-light align-items-center" id="contact">
        <div className="container mt-5">
          <ToastContainer toastStyle={toastStyle} />
          <div className="row pt-6">
            <div className="col-lg-6 d-flex align-items-center px-lg-7" data-aos="fade-right">
                <div className="w-90 mr-0">
                    <div className="text-center text-lg-start py-4 pt-lg-0">                  
                        <h2 className="py-2"><span className="home_text"><i className="fas fa-envelope"></i> Ecrivez-moi !</span></h2>
                        <p className="para-light">Une questions, une demande d'informations ? </p>
                    </div>
                    <div>
                      <div className="row" >
                        <div className="col-md-12">
                          <div className={`my-3 bg-success text-center rounded mt-4 border border-white ${emailSent && 1==2 ? "visible" : "d-none"}`} >
                            <span><i className="fa fa-check"></i> Demande reçue. Je vous contacterai bientôt !</span>
                          </div> 
                        </div>
                        <div className="col-md-6">
                          <div className="form-group py-2">
                            <input type="text" className={`form-control form-control-input border border-default`} value={name} onChange={e => setName(e.target.value)} placeholder="Nom" />
                          </div>                                
                        </div>
                        <div className="col-md-6">
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
                      <button onClick={submit} disabled={toastActive || loaderActive} className="btn form-control-submit-button">
                        { loaderActive &&  
                          <div className="spinner-border spinner-grow-sm text-pink mr-5">
                            <span className="sr-only">Loading...</span>
                          </div> } Envoyer
                      </button>
                    </div>             
                </div>
            </div>
            <div className="col-md-6 d-flex align-items-center" data-aos="fade-down">
              <img className="img-fluid d-none d-lg-block" src="./assets/images/contact.jpg" alt="contact" />        
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default Contact;
