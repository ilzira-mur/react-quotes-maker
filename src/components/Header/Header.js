import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';


function Header() {
    return (
        <div className="header">
            <a className="link" href="/" target="_self">
                <img className="header__logo" src={logo} alt="Логотип" />
            </a>  
        </div>
    )
}
export default Header;