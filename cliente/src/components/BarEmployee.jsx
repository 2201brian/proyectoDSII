import React from 'react';
import '../styles/BarEmployee.scss'

const BarEmployee = () => {
    return (
    <div className="button-bar">
        <button className="button-b">
            <a href="/users/registerUser">Empleados</a>
        </button>
    </div> 
    );
}

export default BarEmployee;