import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { TodoContext, TodoProvider } from './context/TodoContext';
import Footer from './layouts/Footer';
import MainLayout from './layouts/MainLayout';
import Add from './pages/Add';
import EmptyMain from './pages/EmptyMain';
import History from './pages/History';
import Management from './pages/Management';
function AppRoutes() {
    const { todoList } = useContext(TodoContext);
    return (_jsxs(_Fragment, { children: [_jsx(Routes, { children: _jsxs(Route, { element: _jsx(MainLayout, {}), children: [_jsx(Route, { path: '/', element: todoList.length > 0 ? _jsx(History, {}) : _jsx(EmptyMain, {}) }), _jsx(Route, { path: '/add', element: _jsx(Add, {}) }), _jsx(Route, { path: '/history', element: _jsx(History, {}) }), _jsx(Route, { path: '/management/:id', element: _jsx(Management, {}) })] }) }), _jsx(Footer, {})] }));
}
function App() {
    return (_jsx(TodoProvider, { children: _jsx(BrowserRouter, { children: _jsx(AppRoutes, {}) }) }));
}
export default App;
