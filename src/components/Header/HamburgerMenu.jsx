// src/components/HamburgerMenu.jsx

import React from 'react';
import menuIcon from '../../assets/images/menu.png'; // Ícone do menu hamburguer
import './HamburgerMenu.css';

const HamburgerMenu = ({ toggleSidebar }) => {
    return (
        <div className="hamburger-menu" onClick={toggleSidebar}>
            <img src={menuIcon} alt="Menu" className="menu-icon" />
            <span className="system-name">Oficina</span>
        </div>
    );
};

export default HamburgerMenu;
