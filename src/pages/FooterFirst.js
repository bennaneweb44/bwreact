import React from 'react'
import { saveAs } from "file-saver"
import MyCV from '../documents/cv_dev_4.pdf'
import '../App.scss'

const saveFile = () => {
  saveAs(
    MyCV,
    "cv_aziz_bennane.pdf"
  );
}

function FooterFirst() {
  return (    
    <div>
      <section className="location text-light py-5">
        <div className="container"  >        
            <div className="my-3 text-center">
              <button className="btn form-control-submit-button" title="Format PDF" onClick={saveFile}>
                Télécharger mon CV
              </button>
            </div>         
        </div>
      </section>
    </div>
  );
}

export default FooterFirst;
