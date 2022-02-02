import React, { Children } from 'react';
import BarEmployee from '../components/BarEmployee';
import '../styles/LayoutEmployees.scss';

const LayoutEmployees = ({children}) => {
    return (
    <div className="layout-container">
        <div className="container">
            <BarEmployee/>
            {children}
        </div>
    </div>
    );
}

export default LayoutEmployees;