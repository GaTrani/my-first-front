import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LandingPage() {
    return (
        <div className="p-3">
            {/* Barra Superior */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">Nome do Site</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#solutions">Soluções</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">Preços</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">Sobre</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <a href="/login" className="btn btn-outline-primary me-2">Entrar</a>
                            <a href="/register" className="btn btn-primary">Registrar-se</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Conteúdo Central */}
            <div className="min-vh-100 d-flex flex-column container text-center mt-5">
                <h1 className="display-4">Bem-vindo ao Nome do Site</h1>
                <p className="lead mt-3">Conheça nossas soluções incríveis e impulsione o seu negócio hoje mesmo!</p>
                <div className="mt-4">
                    <a href="#learn-more" className="btn btn-secondary btn-lg me-3">Saiba Mais</a>
                    <a href="/try-free" className="btn btn-primary btn-lg">Teste Gratuitamente</a>
                </div>
            </div>
        </div>
    );
}
