import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from "../pages/NotFound";
import CreateAccount from '../pages/CreateAccount';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/api/v1/login" element={<Login/>}/>
                    <Route exact path="/api/v1/createAcount" element={<CreateAccount/>}/>
                    <Route exact path="*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;