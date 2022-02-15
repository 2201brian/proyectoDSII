import React, {useRef, useState} from 'react';
import '../styles/Login.scss';
import logo from '@logos/logo.png';
import axios from 'axios';
import Error from '../components/Error';
import Message from '../components/Message';

const Login = () => {
    const form = useRef(null);
    const [error, setError] =useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('id'),
            password: formData.get('password'),
        }
        ingresar(data);
    }

    
    const ingresar = async (info) => {
        const res = await axios.post('http://localhost:3000/api/v1/login/check',info).then((res) => {
            try{
                console.log(res)
                if (res.data == 'Found'){
                    setError(false);
                    location.href='/users/';

                } else if  (res.data == 'Not Registered'){
                    setError(true);
                }
            }
            catch(e) {
              console.log(res, e)
              
            }
          }).catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
          );;
    }
    
    let componente;
    if (error){
        componente = <Error mensaje='Usuario y/o contrasena incorrectos'/>
    } else{
        componente = null;
    }

    return (
    <div className="login">
        <div className="form-container">
            <img src={logo} alt="logo" className="logo" />
            <form action="/" className="form" ref={form}>
                <label for="email" className="label">ID Empleado</label>
                <input type="text" name="id" placeholder="31837293" className="input input-cc" />
                <label for="password" className="label">Contraseña</label>
                <input type="password" name="password" placeholder="*********" className="input input-password" />
                <button className="primary-button login-button"
                onClick={handleSubmit}>
                    Ingresar
                </button>
                {componente}
                <a href="/">Olvidé mi contraseña</a>

            </form>
        </div>
    </div>
    );
}

export default Login;