import React from 'react';
import '../styles/Request.scss';
import axios from 'axios';

const Request = ({request, type}) => {

    const handleDelete = async (event) =>{
        event.preventDefalt();
        //BORRAR USUARIOS
        const res = await axios.post('http://localhost:3000/api/v1/Delete/user',{id: request.id_sol, tipo:type}).then((res) =>{
            try{
                console.log(res.data);
            } catch(e){
                console.log(res, e);
            } 
        })
    }

    return (
        <div className="request-container">
            <div className="info-request">
                <span>ID:</span>
                <span>{request.id_sol}</span>
                <span>Estado:</span>
                <span> {request.completado}</span>
                <span>Fecha:</span>
                <span>{request.tiempo}</span>
            </div>
            <div className="buttons-containers">
                <button className="delete-button">
                    X
                </button>
                <button className="button-revisar" onClick={handleDelete}>
                    Revisar
                </button>
            </div>
        </div>
    );
}

export default Request;