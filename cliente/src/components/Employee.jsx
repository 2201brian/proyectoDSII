import React from 'react';
import '../styles/Request.scss';
import axios from 'axios';

const Employee = ({employeeItem}) => {
    
    const handleDelete = async (event) =>{
        event.preventDefalt();
        //BORRAR USUARIOS
        const res = await axios.post('http://localhost:3000/api/v1/Delete/user',employeeItem.id_empleado).then((res) =>{
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
                <span>{employeeItem.id_empleado}</span>
                <span>Nombre:</span>
                <span>{employeeItem.nombre}</span>
                <span>Email:</span>
                <span>{employeeItem.email}</span>
            </div>
            <div className="buttons-containers">
                <button className="delete-button"
                onClick={handleDelete}>
                    X
                </button>
            </div>
        </div>

    );
}

export default Employee;