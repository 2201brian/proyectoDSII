import React, { Component, useState } from 'react';
import AppointmentService from '../components/AppointmentService';
import IssuanceService from '../components/IssuanceService';
import PrintService from '../components/PrintService';
import RedactionService from '../components/RedactionService';
import '../styles/Home.scss';
import '../styles/ServicesButtons.scss';

const Home = () => {

	const [showPrint, setShowPrint] = React.useState(true);
	const [showRedaction, setShowRedaction] = React.useState(false);
	const [showAppointment, setShowAppointment] = React.useState(false);
	const [showExpedition, setShowExpedition] = React.useState(false);

	var component = <RedactionService/>;
	console.log(component);

	const handlePrint = () =>{
		setShowPrint(true)
		setShowRedaction(false)
		setShowAppointment(false)
		setShowExpedition(false)
	};
	const handleRedaction = () => {
		setShowPrint(false)
		setShowRedaction(true)
		setShowAppointment(false)
		setShowExpedition(false)
	};
	const handleAppointment = () => {
		setShowPrint(false)
		setShowRedaction(false)
		setShowAppointment(true)
		setShowExpedition(false)
	};
	const handleExpedition = () =>{
		setShowPrint(false)
		setShowRedaction(false)
		setShowAppointment(false)
		setShowExpedition(true)
	};

	return (
		<div className="home">
			<div className="services-container">
				<div className="service-container">
					<div className="service-name-container">
						<button className="secondary-button" type="button"
								onClick={() => handlePrint()}>Impresiones y laminados</button>
						<button className="secondary-button" type="button"
								onClick={() =>handleRedaction()}>Redacción de documentos</button>
						<button className="secondary-button" type="button"
								onClick={() =>handleAppointment()}>Agendamiento de citas</button>
						<button className="secondary-button" type="button"
								onClick={() =>handleExpedition()}>Expedición de documentos</button>
					</div>
					{ showPrint ? <PrintService /> : null }
					{ showRedaction ? <RedactionService /> : null }
					{ showAppointment ? <AppointmentService /> : null }
					{ showExpedition ? <IssuanceService /> : null }
				</div>                
			</div>
		</div>
	);
	
}

export default Home;