import React, {useRef} from 'react';
import '../styles/PrintService.scss';

import axios  from 'axios';

const RedactionService = () => {

    const form =useRef(null);

    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(form.current);

        const url = "http://localhost:3000/api/v1/redact/request";
        const config ={
            headers: { /// importante para enviar archivos
                'content-type': 'multipart/form-data'
            },                    
        }
        axios.post(
            url,
            formData,
            config
        )
        .then(res=>{
            console.log(`Success`+res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    /*
    var n =  new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    var d1 = d+7;
    if (d < 10) {
        d = '0' + d;
     }
     
     if (m < 10) {
        m = '0' + m;
     } 
        
    var datemin = y + "-" + m + "-" + d;
    var datemax = y + "-" + m + "-" + d1;
     */
    return (
        <div className="print-service-container">
            <div className="image-container">
                <img src="https://www.65ymas.com/uploads/s1/32/52/25/como-redactar-una-reclamacion-de-forma-correcta.jpeg" alt="service"/>
            </div>
            <div className="service-tittle-container">
                <label for="serviceName" className="service-name">Redacción de documentos</label>
            </div>
            <form className="form-print" ref={form}>
                <fieldset className="form-basic">
                    <legend>Describa el documento que quiere sea redactado, sea específico:</legend>

                    <section className="section-form">
                        <label for="input-file-lbl" className="lbl-form">Archivos:</label>
                        <input className="files" type="file" name="uploadedFiles" multiple="multiple"/>
                    </section>

                    <section className="section-form">
                        <label for="description-lbl" className="lbl-form">Descripción:</label>
                        <textarea name="description" className="description" cols="45" rows="8" maxlength="500" required="required" spellcheck="false" data-ms-editor="true" ></textarea>
                    </section>

                    <section className="section-form">
                        <label for="date-lbl" className="lbl-form">Fecha límite:</label>
                        <input type="date" name="date"/>
                    </section>

                    <section className="section-form">
                        <label for="correo-lbl" className="lbl-form">Solicita que el documento se le envíe por correo:</label>
                        <div className="color-selection">    
                            <input type="radio" name="correo"  id="correo-choice1" value="Si"/>
                            <label for="correo-choice1" >Sí</label>
                            <input type="radio" name="correo" id="correo-choice2" value="No"/>
                            <label for="correo-choice2">No</label>
                        </div>
                    </section>

                </fieldset>
            </form>
            <div className="btn-container">
				<button className="primary-button"
                onClick={handleSubmit}>Solicitar</button>
		    </div>
        </div>
    );
}

export default RedactionService;