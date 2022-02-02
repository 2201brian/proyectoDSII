import React from 'react';
import '../styles/global.css';

function Error({mensaje}){
    return(
        <span className='error-message'>
            {mensaje}
        </span>
    )
}
export default Error;