import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-dark hover:shadow-orange-200 shadow-lg',
        secondary: 'bg-white text-gray-900 border-2 border-gray-100 hover:border-primary hover:text-primary hover:shadow-gray-100 shadow-md',
        dark: 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-gray-200 shadow-lg',
    };

    return (
        <button
            className={`px-8 py-4 rounded-2xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
