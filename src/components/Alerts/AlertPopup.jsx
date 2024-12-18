import React, { useState } from "react";
import "./AlertPopup.css"; // Adicione estilos personalizados, se necessário

export default function AlertPopup({ type, message, show, onClose }) {
    const getAlertClass = () => {
        switch (type) {
            case "success":
                return "alert-success";
            case "error":
                return "alert-danger";
            case "warning":
                return "alert-warning";
            case "info":
                return "alert-info";
            default:
                return "alert-primary";
        }
    };

    if (!show) return null;

    return (
        <div className={`alert-popup alert ${getAlertClass()} shadow`} role="alert">
            <button type="button" className="btn-close" onClick={onClose}></button>
            {message}
        </div>
    );
}
