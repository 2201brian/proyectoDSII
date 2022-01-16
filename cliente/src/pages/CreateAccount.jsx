import React, {useRef} from 'react';
import '../styles/CreateAccount.scss';


const CreateAccount = () => {
	const form = useRef(null)

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
						<input type="text" name="id" placeholder="papeleria@example.com" className="input input-email" />
						<label for="password" className="label">Password</label>
						<input type="password" name="password" placeholder="*********" className="input input-password" />
					</div>
					<button className="primary-button login-button"
							onClick={handleSubmit}>
						Registrar
					</button>
				</form>
			</div>
		</div>
    );
}

export default CreateAccount;