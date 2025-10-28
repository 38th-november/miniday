import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoCard from '../components/TodoCard';
import Button from '../components/Button';
import EmptyMain from './EmptyMain';
import iconOpenedFolder from '../assets/icons/icon_opened_folder.png';
import iconFolder from '../assets/icons/icon_folder.png';
import '../styles/history.scss';
function History() {
    const navigate = useNavigate();
    const { todoList, setTodoList } = useContext(TodoContext);
    const themes = [
        '전체',
        '일상',
        '업무/학습',
        '건강/운동',
        '취미/자기계발',
        '금융/재테크',
        '사회/관계',
    ];
    const [selectedTheme, setSelectedTheme] = useState('전체');
    const toggleTodoStatus = (id) => {
        setTodoList((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };
    const filteredData = selectedTheme === '전체' ? todoList : todoList.filter((todo) => todo.theme === selectedTheme);
    const todoListActive = filteredData.filter((todo) => !todo.completed);
    const todoListCompleted = filteredData.filter((todo) => todo.completed);
    // todoList가 완전히 비어있으면 EmptyMain 표시
    if (todoList.length === 0) {
        return _jsx(EmptyMain, {});
    }
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: 'history-container', children: [_jsxs("div", { className: 'history-header', children: [_jsxs("div", { className: 'history-header-text', children: [_jsx("img", { src: iconOpenedFolder, alt: 'icon_opened_folder', className: 'history-header-icon' }), "\uD574\uC57C\uD560 \uBAA9\uB85D"] }), _jsx("select", { className: 'theme-select', value: selectedTheme, onChange: (e) => setSelectedTheme(e.target.value), children: themes.map((theme) => (_jsx("option", { value: theme, children: theme }, theme))) })] }), _jsx("div", { className: 'todo-section', children: todoListActive.length > 0 ? (todoListActive.map((todo) => (_jsxs("div", { className: 'todo-block', children: [_jsx("p", { className: 'todo-theme', children: todo.theme }), _jsx("div", { onClick: () => navigate(`/management/${todo.id}`), className: 'todo-clickable', children: _jsx(TodoCard, { task: todo.task, priority: todo.priority, isOn: todo.completed, onToggle: () => toggleTodoStatus(todo.id) }) })] }, todo.id)))) : (_jsx("p", { className: 'empty-message', children: "\uD574\uC57C\uD560 \uD560 \uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })) }), _jsx("hr", {}), _jsx("div", { className: 'history-header', children: _jsxs("div", { className: 'history-header-text', children: [_jsx("img", { src: iconFolder, alt: 'icon_folder', className: 'history-header-icon' }), "\uC644\uB8CC\uB41C \uBAA9\uB85D"] }) }), _jsx("div", { className: 'todo-section', children: todoListCompleted.length > 0 ? (todoListCompleted.map((todo) => (_jsxs("div", { className: 'todo-block', children: [_jsx("p", { className: 'todo-theme', children: todo.theme }), _jsx("div", { onClick: () => navigate(`/management/${todo.id}`), className: 'todo-clickable', children: _jsx(TodoCard, { task: todo.task, priority: todo.priority, isOn: todo.completed, onToggle: () => toggleTodoStatus(todo.id) }) })] }, todo.id)))) : (_jsx("p", { className: 'empty-message', children: "\uC644\uB8CC\uB41C \uD560 \uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })) })] }), _jsx("div", { className: 'add-button-container', children: _jsx(Button, { label: '\uCD94\uAC00', onClick: () => navigate('/add'), variant: 'primary' }) })] }));
}
export default History;
