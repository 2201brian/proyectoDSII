import React, {useRef} from 'react';
import '../styles/PrintService.scss';

const AppointmentService = () => {
    const form =useRef(null);

    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(form.current);
    }

    var n =  new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate() +1;
    var d1 = d+14;
    if (d < 10) {
        d = '0' + d;
     }
     
     if (m < 10) {
        m = '0' + m;
     } 
        
    var datemin = y + "-" + m + "-" + d;
    var datemax = y + "-" + m + "-" + d1;

    return (
        <div className="print-service-container">
            <div className="image-container">
                <img src="https://www.grandespymes.com.ar/wp-content/uploads/2020/07/agenda.jpg" alt="service"/>
            </div>
            <div className="service-tittle-container">
                <label htmlFor="serviceName" className="service-name">Agendamiento de Citas</label>
            </div>
            <form className="form-print" ref={form}>
                <fieldset className="form-basic">
                    <legend>Describa la cita que desea solicitar</legend>

                    <section className="section-form">
                        <label htmlFor="input-file-lbl" className="lbl-form">Documentos de soporte, si los considera necesarios:</label>
                        <input className="files" type="file" name="uploadedFile"/>
                    </section>

                    <section className="section-form">
                        <label htmlFor="description-lbl" className="lbl-form">Descripción:</label>
                        <textarea name="description" className="description" cols="45" rows="8" maxLength="500" required="required" spellCheck="false" data-ms-editor="true" ></textarea>
                    </section>

                    <section className="section-form">
                        <label htmlFor="entidad" className="lbl-form">Entidad:</label>
                        <input className="files" type="text" name="entidad" maxLength="20"/>
                    </section>

                    <section className="section-form">
                        <label htmlFor="tipoCita" className="lbl-form">Tipo de cita:</label>
                        <input className="files" type="text" name="tipoCita" maxLength="20"/>
                    </section>


                    <section className="section-form">
                        <label for="date-lbl" className="lbl-form">Rango de fechas:</label>
                        <p>Fecha Inicial:</p>
                        <input type="date" id="dateinicio" name="-inicio" min={datemin} max={datemax}/>
                        <p>Plazo máximo:</p>
                        <input type="date" name="date-fin" min={datemin} max={datemax}/>
                    </section>

                    <section className="section-form">
                        <label for="correo-lbl" className="lbl-form">Horario preferible:</label>
                        <div className="color-selection">    
                            <input type="radio" name="correo"  id="correo-choice1" value="morning"/>
                            <label for="correo-choice1" >Mañana</label>
                            <input type="radio" name="correo" id="correo-choice2" value="afternoon"/>
                            <label for="correo-choice2">Tarde</label>
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

export default AppointmentService;