import React, { Children, useState, useRef } from 'react';
import '../styles/LayoutEmployees.scss';
import EmployeeIndex from '../pages/EmployeeIndex.jsx';
import RequestList from '../pages/RequestList';
import CreateAccount from '../pages/CreateAccount';
import UpdateUser from '../pages/UpdateUser';
import EmployeesList from '../pages/EmployeesList';
import RequestPrintList from '../pages/RequestPrintList';
import RequestRedacList from '../pages/RequestRedacList';
import RequestCitaList from '../pages/RequestCitaList';
import RequestReceiptList from '../pages/RequestReceiptList';
import '../styles/BarEmployee.scss';

const LayoutEmployees = () => {
    const [element, setElement] = useState(<EmployeeIndex/>);

    const handleRegister = async (event) => {
        event.preventDefault();
        setElement(<CreateAccount/>)
    }

    const handleModify = async (event) => {
        event.preventDefault();
        setElement(<UpdateUser/>)
    }
    const handleListEmpleados = async (event) => {
        event.preventDefault();
        setElement(<EmployeesList/>)
    }

    const handlePrint = async (event) => {
        event.preventDefault();
        setElement(<RequestPrintList/>)
    }
    const handleRedaction = async (event) => {
        event.preventDefault();
        setElement(<RequestRedacList/>)
    }
    const handleAppointment = async (event) => {
        event.preventDefault();
        setElement(<RequestCitaList/>)
    }
    const handleReceipt = async (event) => {
        event.preventDefault();
        setElement(<RequestReceiptList/>)
    }

    return (
    <div className="layout-container">
        <div className="container">
            <div className="button-bar">
                <button className="button-b" onClick={handleRegister}>
                    Registrar Empleado
                </button>
                <button className="button-b" onClick={handleModify}>
                    Modificar Empleado
                </button>
                <button className="button-b" onClick={handleListEmpleados}>
                    Consultar Empleados
                </button>
                <button className="button-b" onClick={handlePrint}>
                    Solicitudes Impresiones
                </button>
                <button className="button-b" onClick={handleRedaction}>
                    Solicitudes Redacción
                </button>
                <button className="button-b" onClick={handleAppointment}>
                    Solicitudes Citas
                </button>
                <button className="button-b" onClick={handleReceipt}>
                    Solicitudes Recibos
                </button>
                <button className="button-b">
                    <a href="http://localhost:8080/login">LogOut</a>
                </button>
            </div>
            <div className='panelRight'>
                {element}
            </div>
        </div>
    </div>
    );
}

export default LayoutEmployees;