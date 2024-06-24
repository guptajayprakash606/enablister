import React from 'react';
import './style.scss';

const Button = ({ children, onClick, className }) => {
    return (
      <Button className={`ButtonComponent ${className}`} onClick={onClick}>
        {children}
      </Button>
    );
  };

export default Button;
