// src/components/Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../images/menu.png'; // ícone do menu

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/home">
            <img src={menuIcon} alt="Home" /> Home
          </Link>
        </li>
        <li>
          <Link to="/clientes">
            <img src={menuIcon} alt="Clientes" /> Clientes
          </Link>
        </li>
        <li>
          <Link to="/produtos">
            <img src={menuIcon} alt="Produtos" /> Produtos
          </Link>
        </li>
        {/* Adicionar mais itens conforme necessário */}
      </ul>
    </nav>
  );
};

export default Menu;
