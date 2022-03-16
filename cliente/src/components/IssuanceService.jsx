import React, {useRef} from 'react';
import '../styles/PrintService.scss';
import axios from "axios";

const IssuanceService = () => {

    const form =useRef(null);
    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(form.current);

        const url = "http://localhost:3000/api/v1/Issuance/receipt";
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

   

    return (
        <div className="print-service-container">
            <div className="image-container">
                <img src="https://media.istockphoto.com/photos/signing-a-form-picture-id479490102?k=20&m=479490102&s=612x612&w=0&h=YxXxD91HVjHGpGISwAsXbOY12bKAJjNozTf8ZuTpvN8=" alt="service"/>
            </div>
            <div className="service-tittle-container">
                <label htmlFor="serviceName" className="service-name">Expedición de facturas de servicios públicos</label>
            </div>
            <form className="form-print" ref={form}>
                <fieldset className="form-basic">
                    <legend>Especifique la factura que desea solicitar:</legend>

                    <section className="section-form">
                        <label htmlFor="quantity-lbl" className="lbl-form">Cédula:</label>
                        <input className="files" type="text" name="identification"/>
                    </section>

                    <section className="section-form">
                        <label htmlFor="quantity-lbl" className="lbl-form">Número de contrato:</label>
                        <input className="files" type="text" name="contract"/>
                    </section>

                    <section className="section-form">
                        <label htmlFor="quantity-lbl" className="lbl-form">No. Pago Electrónico:</label>
                        <input className="files" type="text" name="pay"/>
                    </section>

                    <section className="section-form">
                        <label htmlFor="description-lbl" className="lbl-form">Descripción:</label>
                        <textarea name="description" className="description" cols="45" rows="8" maxLength="500" required="required" spellCheck="false" data-ms-editor="true" ></textarea>
                    </section>

                    <section className="section-form">
                        <label htmlFor="laminado-lbl" className="lbl-form">Desea recibir el documento al correo:</label>
                        <div className="color-selection">    
                            <input type="radio" name="correo"  id="laminado-choice1" value="true"/>
                            <label htmlFor="laminado-choice1" >Sí</label>
                            <input type="radio" name="correo" id="laminado-choice2" value="false"/>
                            <label htmlFor="laminado-choice2">No</label>
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

export default IssuanceService;