// src/components/Layout.jsx
import React from 'react';
import Header from './Header';  // Já criamos o Header
import Menu from './Menu';      // Criamos o Menu Lateral
import './Layout.css';         // Estilos do Layout

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {/* Menu Lateral */}
      <aside className="sidebar">
        <Menu />
      </aside>

      {/* Conteúdo principal */}
      <div className="main-content">
        {/* Menu superior */}
        <Header />

        {/* Conteúdo da página */}
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
