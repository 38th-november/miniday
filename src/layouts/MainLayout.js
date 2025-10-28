import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../components/Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import '../styles/mainLayout.scss';
function MainLayout() {
    return (_jsxs("div", { className: 'app-layout', children: [_jsxs("div", { className: 'app-container', children: [_jsx(Header, {}), _jsx("main", { className: 'main-content', children: _jsx(Outlet, {}) })] }), _jsx(Footer, {})] }));
}
export default MainLayout;
