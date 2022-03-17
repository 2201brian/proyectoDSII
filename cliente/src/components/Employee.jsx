import React from 'react';
import '../styles/Request.scss';

const Employee = ({employeeItem}) => {
    const handleDelete = (event) =>{
        event.preventDefalt();
        //BORRAR USUARIOS
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