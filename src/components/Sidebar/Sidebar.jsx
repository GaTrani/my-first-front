import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ isOpen, toggleSidebar }) {
    const [openMenu, setOpenMenu] = useState("");

    const toggleMenu = (menu) => {
        setOpenMenu((prevMenu) => (prevMenu === menu ? "" : menu));
    };

    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <ul className="sidebar-menu">
                <li>
                    <Link to="/home">Dashboard</Link>
                </li>
                <li className="menu-item">
                    <button
                        className={`menu-button ${openMenu === "clients" ? "active" : ""}`}
                        onClick={() => toggleMenu("clients")}
                    >
                        Clientes
                    </button>
                    {openMenu === "clients" && (
                        <ul className="submenu">
                            <li>
                                <Link to="/clients/new">Novo</Link>
                            </li>
                            <li>
                                <Link to="/clients/edit">Editar</Link>
                            </li>
                            <li>
                                <Link to="/clients/list">Listar</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="menu-item">
                    <button
                        className={`menu-button ${openMenu === "suppliers" ? "active" : ""}`}
                        onClick={() => toggleMenu("suppliers")}
                    >
                        Fornecedores
                    </button>
                    {openMenu === "suppliers" && (
                        <ul className="submenu">
                            <li>
                                <Link to="/suppliers/new">Novo</Link>
                            </li>
                            <li>
                                <Link to="/suppliers/edit">Editar</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/finance">Financeiro</Link>
                </li>
                <li>
                    <Link to="/settings">Configurações</Link>
                </li>
            </ul>
        </div>
    );
}
