import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from "../pages/NotFound";
import CreateAccount from '../pages/CreateAccount';
import '../styles/global.css';
import LayoutEmployees from '../containers/LayoutEmployees';
import EmployeeIndex from '../pages/EmployeeIndex'
import PrintService from '../components/PrintService';

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Layout><Home><PrintService/></Home></Layout>}/>
                    <Route exact path="/login/" element={<Layout><Login/></Layout>}/>
                    <Route exact path="/createAcount/" element={<CreateAccount/>}/>
                    <Route exact path="*" element={<Layout><NotFound/></Layout>}/>
                    <Route exact path="/users/*" element={<Employee />}/>
                </Routes>
        </BrowserRouter>
    );
}

function Employee(){
    return (
    <LayoutEmployees>
        <Routes>
            <Route exact path="/" element={<EmployeeIndex/>}/>
            <Route exact path="/registerUser/" element={<CreateAccount/>}/>
            <Route exact path="*" element={<NotFound/>}/>
        </Routes>
    </LayoutEmployees>
    );
}

export default App;