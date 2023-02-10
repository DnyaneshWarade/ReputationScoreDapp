import React from 'react';
import './Button.css';

const Button = ({onClick, className, children}) => {
    return (
        <div onClick={onClick} className={`${className} gradient-button cursor-pointer`}>
            {children}
        </div>
    );
};

export default Button;