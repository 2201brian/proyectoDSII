import React from 'react';
import '../styles/ServicesButtons.scss';

const ServicesButtons = () => {
    return (
        <div className="service-name-container">
						<button className="secondary-button">Impresiones y laminados</button>
						<button className="secondary-button">Redacción de documentos</button>
						<button className="secondary-button">Agendamiento de citas</button>
						<button className="secondary-button">Expedición de documentos</button>
		</div>
    );
}

export default ServicesButtons;