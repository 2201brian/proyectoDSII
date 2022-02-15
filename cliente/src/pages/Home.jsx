import React from 'react';
import ServicesButtons from '../components/ServicesButtons';
import '../styles/Home.scss';

const Home = ({ children }) => {
	return (
		<div className="home">
			<div className="services-container">
				<div className="service-container">
					<ServicesButtons/>
					{children}
				</div>                
			</div>
		</div>
	);
	
}

export default Home;