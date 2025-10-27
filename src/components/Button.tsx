import React from 'react';
import '../styles/button.scss';

type ButtonProps = {
  label?: string;
  icon?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'transparent' | 'opaque' | 'delete';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <button type={type} className={`app-btn ${variant}`} onClick={onClick} disabled={disabled}>
      {icon && <img src={icon} alt='' className='btn-icon' />}
      {label && <span className='btn-label'>{label}</span>}
    </button>
  );
};

export default Button;
