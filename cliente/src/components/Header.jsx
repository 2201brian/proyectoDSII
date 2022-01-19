import React from 'react';
import '../styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo.png';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
    
            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo" />
                
                <ul>
                    <li>
                    <a href="/api/v1/createAcount">Servicios</a>
                    </li>
                    <li>
                    <a href="/">Quienes somos</a>
                    </li>
                    <li>
                    <a href="/">Contactanos</a>
                    </li>
                    <li>
                    <a href="/">Ayuda</a>
                    </li>
                </ul>
            </div>
    
            <div className="navbar-right">
            <ul>
                <li className="navbar-idempleado">
                    <a href="/api/v1/login">Empleados</a>
                </li>
                <li className="navbar-shopping-cart">
                <img src={shoppingCart} alt="shopping cart" />
                <div>2</div>
                </li>
            </ul>
            </div>
        </nav>
    );
}

export default Header;