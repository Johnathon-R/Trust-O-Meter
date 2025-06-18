import React, { useState, useEffect } from "react";
import { baseButtonStyles, variantButtonClasses } from "../styles/Constants";

/**
 * @brief Button properties
 */
type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary" | "ghost";
    type?: "button" | "submit" | "reset";
};

/**
 * @brief Button component
 * @param param0 
 * @returns 
 */
const Button: React.FC<ButtonProps> = ({
    children, onClick, className = "", variant = "primary", type = "button" }) => {

    // Type of button
    const variantClass = variantButtonClasses[variant] || baseButtonStyles;
    const finalClassName = `${baseButtonStyles} ${variantClass} ${className}`.trim();

    // Button styling html
    return (
        <button type={type} onClick={onClick} className={finalClassName}>
            {children}
        </button>
    );
}

export default Button;