import React from 'react';
import '../styles/global.css';

function Message ({mensaje}){
    return (
        <span className='mensaje-aviso'>
            {mensaje}
        </span>
    );
}

export default Message;