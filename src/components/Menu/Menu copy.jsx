import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../../assets/images/menu.png'; // Ícone do menu
import './Menu.css';

export default function Menu({ toggleDarkMode, darkMode }) {
  const [menuExpanded, setMenuExpanded] = useState(true); // Controle da expansão do menu

  // Função para alternar entre expandido e recolhido
  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  return (
    <nav className={`menu ${menuExpanded ? 'expanded' : 'collapsed'}`}>
      {/* Topo do Menu */}
      <div className="top-bar">
        <button onClick={toggleMenu} className="menu-icon">
          <img src={menuIcon} alt="Menu" className="menu-image" />
        </button>
        {menuExpanded && <span className="logo">Oficina Mecânica</span>}
      </div>

      {/* Lista de itens de menu */}
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className="menu-link">Home</Link>
        </li>
        <li className="menu-item">
          <button className="menu-button">Clientes</button>
          <ul className="submenu">
            <li><Link to="/clientes/novo" className="submenu-link">Novo Cliente</Link></li>
            <li><Link to="/clientes/listar" className="submenu-link">Listar Todos</Link></li>
          </ul>
        </li>
        <li className="menu-item">
          <button className="menu-button">Produtos</button>
          <ul className="submenu">
            <li><Link to="/produtos/novo" className="submenu-link">Novo Produto</Link></li>
            <li><Link to="/produtos/listar" className="submenu-link">Listar Todos</Link></li>
          </ul>
        </li>
      </ul>

      
    </nav>
  );
}
