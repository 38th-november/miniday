import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/// <reference types="vite/client" />
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { TodoContext, TodoProvider } from './context/TodoContext';
import MainLayout from './layouts/MainLayout';
import Add from './pages/Add';
import EmptyMain from './pages/EmptyMain';
import History from './pages/History';
import Management from './pages/Management';
function AppRoutes() {
    const { todoList } = useContext(TodoContext);
    return (_jsx(Routes, { children: _jsxs(Route, { element: _jsx(MainLayout, {}), children: [_jsx(Route, { index: true, element: todoList.length > 0 ? _jsx(History, {}) : _jsx(EmptyMain, {}) }), _jsx(Route, { path: '/add', element: _jsx(Add, {}) }), _jsx(Route, { path: '/history', element: _jsx(History, {}) }), _jsx(Route, { path: '/management/:id', element: _jsx(Management, {}) })] }) }));
}
function App() {
    return (_jsx(TodoProvider, { children: _jsx(BrowserRouter, { basename: import.meta.env.DEV ? '/' : '/miniday', children: _jsx(AppRoutes, {}) }) }));
}
export default App;
