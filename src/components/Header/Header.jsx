import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import profile from "../../assets/profile-user.png"

export default function Header({ userName, avatarUrl }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);  // Referência ao menu

    const toggleMenu = (e) => {
        e.stopPropagation();  // Previne o clique de fechar o menu
        console.log("Antes:", isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
        console.log("Depois:", !isMenuOpen);
    };


    // Fecha o menu se o clique for fora do menu ou avatar
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="header-user">
            <span>Olá, {localStorage.getItem("username")}</span>
            <img
                src={avatarUrl}
                alt="Avatar"
                className="avatar"
                onClick={toggleMenu}
            />
            {isMenuOpen && (
                <div ref={menuRef} className="dropdown-menu">
                    <ul>
                        <li>Modo Escuro</li>
                        <li>Perfil</li>
                        <li>Configurações</li>
                        <li>Sair</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
