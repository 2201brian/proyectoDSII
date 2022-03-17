import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Employee from '../components/Employee';

const EmployeesList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(async ()=> {
        const res = await axios.get('http://localhost:3000/api/v1/ListaUser/all').then((res) =>{
            try{
                setEmployees(res.data);
            } catch(e){
                console.log(res, e);
            } 
        })
    },[]);
    return (
        <div className='request-list'>
            {employees.map(employee =>(
                <Employee employeeItem={employee} key={employee.id_empleado}/>
            ))}
        </div> 
    );
}

export default EmployeesList;