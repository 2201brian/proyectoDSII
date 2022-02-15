import React, { useRef } from 'react';
import '../styles/PrintService.scss';

const PrintService = () => {
    const form =useRef(null);

    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            file: formData.get('uploadedFile'),
            description: formData.get('description'),
            quantity: formData.get('quantity'),
            color: formData.get('color'),
            laminate: formData.get('laminado')
        }
        console.log(data);
        //ingresar(data);
    }

    return (
        <div className="print-service-container">
            <div className="image-container">
                <img src="https://www.ofimaticasz.com/wp-content/uploads/2020/12/Historial-de-impresiones.jpg" alt="service"/>
            </div>
            <div className="service-tittle-container">
                <label for="serviceName" className="service-name">Impresiones y laminados</label>
            </div>
            <form className="form-print" ref={form}>
                <fieldset className="form-basic">
                    <legend>Describa la solicitud de impresión</legend>

                    <section className="section-form">
                        <label for="input-file-lbl" className="lbl-form">Archivo:</label>
                        <input className="files" type="file" name="uploadedFile"/>
                    </section>

                    <section className="section-form">
                        <label for="description-lbl" className="lbl-form">Descripción:</label>
                        <textarea name="description" className="description" cols="45" rows="8" maxlength="500" required="required" spellcheck="false" data-ms-editor="true" ></textarea>
                    </section>

                    <section className="section-form">
                        <label for="quantity-lbl" className="lbl-form">Cantidad de copias:</label>
                        <input className="files" type="number" name="quantity" min="1" max="10"/>
                    </section>

                    <section className="section-form">
                        <label for="color-lbl" className="lbl-form">Opciones de color:</label>
                        <div className="color-selection">    
                            <input type="radio" name="color"  id="color-choice1" value="color"/>
                            <label for="color-choice1" >Color</label>
                            <input type="radio" name="color" id="color-choice2" value="byn"/>
                            <label for="color-choice2">Blanco y Negro</label>
                        </div>
                    </section>

                    <section className="section-form">
                        <label for="laminado-lbl" className="lbl-form">Desea laminar las impresiones:</label>
                        <div className="color-selection">    
                            <input type="radio" name="laminado"  id="laminado-choice1" value="true"/>
                            <label for="laminado-choice1" >Sí</label>
                            <input type="radio" name="laminado" id="laminado-choice2" value="false"/>
                            <label for="laminado-choice2">No</label>
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

export default PrintService;