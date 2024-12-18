import React, { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Atualiza os dados do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Função para enviar o formulário
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulando validação de login
        if (!formData.email || !formData.password) {
            toast.error("Preencha todos os campos!", {
                position: "top-center",
            });
            return;
        }

        if (formData.email === "admin@example.com" && formData.password === "123456") {
            toast.success("Login realizado com sucesso!", {
                position: "top-center",
            });
        } else {
            toast.error("Credenciais inválidas. Tente novamente.", {
                position: "top-center",
            });
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            {/* Container para os Toasts */}
            <ToastContainer />

            <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">Bem-vindo!</h2>
                <p className="text-muted text-center mb-4">
                    Faça login para acessar sua conta
                </p>
                <form onSubmit={handleSubmit}>
                    {/* Campo Email */}
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Digite seu email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>

                    {/* Campo Senha */}
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Digite sua senha"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="password">Senha</label>
                    </div>

                    {/* Botão de Login */}
                    <button
                        type="submit"
                        className="btn btn-primary w-100 mt-3"
                    >
                        Entrar
                    </button>
                </form>

                {/* Links abaixo do formulário */}
                <div className="text-center mt-4">
                    <a href="/register" className="text-decoration-none">
                        Não tem uma conta? <strong>Cadastre-se</strong>
                    </a>
                    <br />
                    <a href="/forgot-password" className="text-decoration-none">
                        Esqueceu sua senha?
                    </a>
                </div>
            </div>
        </div>
    );
}