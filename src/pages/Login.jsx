import React from 'react';
import '../styles/Login.scss';

import logo from '@logos/logo.png';

const Login = () => {
    return (
    <div className="login">
        <div className="form-container">
            <img src={logo} alt="logo" className="logo" />
            <form action="/" className="form">
                <label for="email" className="label">ID Empleado</label>
                <input type="text" id="email" placeholder="31837293" className="input input-cc" />
                <label for="password" className="label">Contraseña</label>
                <input type="password" id="password" placeholder="*********" className="input input-password" />
                <input type="submit" value="Ingresar" className="primary-button login-button" />
                <a href="/">Olvidé mi contraseña</a>
            </form>
        </div>
    </div>
    );
}

export default Login;