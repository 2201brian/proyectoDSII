import React, {useRef, useState} from 'react';
import '../styles/CreateAccount.scss';
import axios from 'axios';
import Message from '../components/Message';
import Error from '../components/Error';


const CreateAccount = () => {
	const form = useRef(null);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
			username: formData.get('id'),
			password: formData.get('password'),
        }
        console.log(data);
        registrar(data);
    }
	let componente;
	const registrar = async (info) => {
        const res = await axios.post('http://localhost:3000/api/v1/createAcount/create',info).then((res) => {
            try{
                console.log(res.data);
                if (res.data == 'created'){
                    componente=<Message mensaje='Registrado correctamente'/>
                } else{
                    componente=<Error mensaje='No fue posible registrarlo'/>
                }
            }
            catch(e) {
                console.log(res, e)
            }
          })
    }

    return (
        <div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">Registrar Empleado</h1>
				<form action="/" className="form" ref={form}>
					<div>
						<label for="name" className="label">Nombre</label>
						<input type="text" name="name" className="input input-name" />
						<label for="email" className="label">Email</label>
						<input type="text" name="email" placeholder="papeleria@example.com" className="input input-email" />
                        <label for="id" className="label">ID</label>
						<input type="text" name="id" placeholder="1234567891" className="input input-email" />
						<label for="password" className="label">Password</label>
						<input type="password" name="password" placeholder="*********" className="input input-password" />
					</div>
					<button className="primary-button login-button"
							onClick={handleSubmit}>
						Registrar
					</button>
                    {componente}
				</form>
			</div>
		</div>
    );
}

export default CreateAccount;