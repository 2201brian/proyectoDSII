import React from 'react';
import '../styles/Request.scss';

const Request = ({request}) => {

    return (
        <div className="request-container">
            <div className="info-request">
                <span>{request.id_sol}</span>
                <span>{request.nombre_archivo}</span>
                <span>Solicitud de Impresión</span>
                <span> {request.completada}</span>
                <span>15-03-2022</span>
            </div>
            <div className="buttons-containers">
                <button className="delete-button">
                    X
                </button>
                <button className="button-b">
                    Revisar
                </button>
            </div>
        </div>
    );
}

export default Request;