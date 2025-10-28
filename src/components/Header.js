import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import '../styles/header.scss';
import logo from '../assets/images/miniday_black_logo2.png';
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
    console.log('Header rendered!');
    return (_jsx(_Fragment, { children: _jsx("header", { className: 'header-container', children: _jsx("img", { src: logo, alt: 'Miniday Logo', className: 'header-logo', onClick: () => navigate('/') }) }) }));
}
export default Header;
