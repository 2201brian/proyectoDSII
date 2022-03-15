import React, { useRef } from 'react';
import '../styles/PrintService.scss';

/// SE INCORPORA axios PARA ENVIAR LA PETICION AL BACKEND (api)
/// SE SUGIERE UN MODULO/COMPONENTE PARA SOLICITUDES
/// UTILIZAR ALGUN PATRON DE DISEÑO
import axios from "axios";


const PrintService = () => {
    /// SE PUDE CONSIDERAR LA CREACIÓN DE COMPONENTES CON ESTADO
    const form =useRef(null); 

    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(form.current);
        
        const url = 'http://localhost:3000/api/v1/documents/print';
        const config ={
            headers: { /// importante para enviar archivos
                'content-type': 'multipart/form-data'
            },                    
        }
        axios.post(                      
            url,
            formData, /// SE SUGIERE ENVIAR TODO EL FORMULARIO
            config
        )
        .then(res => {
            console.log(`Success` + res.data);
        })
        .catch(err => {
            console.log(err);
        })

    }

    return (
       

        <div className="print-service-container">
            <div className="image-container">
                <img src="https://www.ofimaticasz.com/wp-content/uploads/2020/12/Historial-de-impresiones.jpg" alt="service"/>
            </div>
            <div className="service-tittle-container">
                <label className="service-name">Impresiones y laminados</label>
            </div>
            <form className="form-print" ref={form}> {/** Existe otra forma sin ref */}
                <fieldset className="form-basic">
                    <legend>Describa la solicitud de impresión</legend>

                    <section className="section-form">
                        <label className="lbl-form">Archivo:</label>
                        <input className="files" type="file" name="a_file"/>
                    </section>

                    <section className="section-form">
                        <label className="lbl-form">Descripción:</label>
                        <textarea name="description" className="description" cols="45" rows="8" maxLength="500" required="required" spellCheck="false" data-ms-editor="true" ></textarea>
                    </section>

                    <section className="section-form">
                        <label className="lbl-form">Cantidad de copias:</label>
                        <input className="files" type="number" name="quantity" min="1" max="10"/>
                    </section>

                    <section className="section-form">
                        <label className="lbl-form">Opciones de color:</label>
                        <div className="color-selection">    
                            <input type="radio" name="color"  id="color-choice1" value="color"/>
                            <label >Color</label>
                            <input type="radio" name="color" id="color-choice2" value="byn"/>
                            <label >Blanco y Negro</label>
                        </div>
                    </section>

                    <section className="section-form">
                        <label className="lbl-form">Desea laminar las impresiones:</label>
                        <div className="laminate-selection">    
                            <input type="radio" name="laminado"  id="laminado-choice1" value="true"/>
                            <label >Sí</label>
                            <input type="radio" name="laminado" id="laminado-choice2" value="false"/>
                            <label >No</label>
                        </div>
                    </section>

                </fieldset>
            </form>
            <div className="btn-container">
				<button className="primary-button"
                onClick={handleSubmit}>Solicitar</button> {/** Este boton debe ser un submit */}
		    </div>
        </div>
    );
}

export default PrintService;