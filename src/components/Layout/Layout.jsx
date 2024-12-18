import React, { useState } from "react";
import "./Layout.css";
import HamburgerMenu from "../Hamburger/HamburgerMenu";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import profile from "../../assets/profile-user.png"

const Layout = ({ children }) => {
    const [sidebarVisible, setSidebarVisible] = useState(true); // Controle da visibilidade da Sidebar

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible); // Alterna a visibilidade da Sidebar
    };

    return (
        <div className="layout">
            {/* Barra Superior */}
            <div className="header">
                <div className="top-left">
                    <button className="btn btn-link" onClick={toggleSidebar}>
                        <HamburgerMenu /> {/* Ícone do menu */}
                    </button>
                    <span className="site-name">Meu Sistema</span>
                </div>
                <div className="top-right">
                    <Header userName="Gabriel" avatarUrl={profile} />
                </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="content">
                {sidebarVisible && (
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                )}
                <div className="content-main">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
