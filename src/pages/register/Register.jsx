import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importa os estilos do Toastify
import "./Register.css";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    // Atualiza os dados do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Valida e submete o formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Exibe mensagem de sucesso usando React-Toastify
            toast.success("Cadastro realizado com sucesso!", {
                position: "top-right",
                autoClose: 3000, // Fecha automaticamente após 3 segundos
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
            console.log("Dados enviados:", formData);

            // Resetar o formulário após cadastro
            setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } else {
            // Exibe mensagem de erro genérico
            toast.error("Corrija os erros antes de continuar.", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    // Valida os campos do formulário
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "O nome é obrigatório.";
        if (!formData.email) newErrors.email = "O email é obrigatório.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido.";
        if (!formData.password) newErrors.password = "A senha é obrigatória.";
        else if (formData.password.length < 6)
            newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
        if (!formData.confirmPassword)
            newErrors.confirmPassword = "Confirme sua senha.";
        else if (formData.confirmPassword !== formData.password)
            newErrors.confirmPassword = "As senhas não coincidem.";
        return newErrors;
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">Cadastro</h2>
                <form onSubmit={handleSubmit}>
                    {/* Campo Nome */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            placeholder="Nome"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="name">Nome</label>
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    {/* Campo Email */}
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email</label>
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    {/* Campo Senha */}
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            placeholder="Senha"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <label htmlFor="password">Senha</label>
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>

                    {/* Campo Confirmar Senha */}
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                            placeholder="Confirme sua senha"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <label htmlFor="confirmPassword">Confirme sua senha</label>
                        {errors.confirmPassword && (
                            <div className="invalid-feedback">{errors.confirmPassword}</div>
                        )}
                    </div>
                    <br />
                    {/* Botão de Enviar */}
                    <button type="submit" className="btn btn-primary w-100">
                        Cadastrar
                    </button>

                    {/* Links abaixo do formulário */}
                    <div className="text-center mt-4">
                        <a href="/login" className="text-decoration-none">
                            Já tem um conta? <strong>Entrar</strong>
                        </a>
                        <br />
                    </div>
                </form>
            </div>

            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
}
