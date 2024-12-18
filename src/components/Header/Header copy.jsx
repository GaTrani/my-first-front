// src/components/Header/Header.jsx

import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import profileImage from "../../assets/images/profile-user.png"; // Imagem do usuário

export default function Header({ userName, toggleDarkMode, darkMode }) {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu do perfil
    const menuRef = useRef(null); // Referência para o menu de perfil

    // Função para alternar o estado do menu
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    // Função para fechar o menu se o clique for fora do menu
    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenuOpen(false); // Fecha o menu
        }
    };

    // Adiciona o listener de clique fora quando o componente é montado
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // Limpa o listener ao desmontar o componente
        };
    }, []);

    return (
        <header className="header">
            {/* Nome e saudação */}
            <div className="user-info">
                <span className="greeting">Olá, {userName}</span>
                {/* Imagem de perfil */}
                <img
                    src={profileImage}
                    alt="Perfil"
                    className="profile-image"
                    onClick={handleMenuToggle} // Abre/fecha o menu ao clicar
                />
            </div>

            {/* Menu do perfil */}
            {menuOpen && (
                <div className="profile-menu" ref={menuRef}>
                    <button onClick={toggleDarkMode} className="menu-option">
                        {darkMode ? "🌙 Modo Claro" : "🌞 Modo Escuro"}
                    </button>
                    <button className="menu-option">Configurações</button>
                    <button className="menu-option">Sair</button>
                </div>
            )}
        </header>
    );
}
