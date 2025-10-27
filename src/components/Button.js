import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/button.scss';
const Button = ({ label, icon, onClick, type = 'button', variant = 'primary', disabled = false, }) => {
    return (_jsxs("button", { type: type, className: `app-btn ${variant}`, onClick: onClick, disabled: disabled, children: [icon && _jsx("img", { src: icon, alt: '', className: 'btn-icon' }), label && _jsx("span", { className: 'btn-label', children: label })] }));
};
export default Button;
