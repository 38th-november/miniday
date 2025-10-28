import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import Toggle from '../components/Toggle';
import TaskInput from '../components/TaskInput';
import Priority from '../components/Priority';
import Button from '../components/Button';
import { TodoContext } from '../context/TodoContext';
import iconClock from '../assets/icons/icon_clock.png';
import '../styles/management.scss';
function Management() {
    const { id } = useParams();
    const { todoList, setTodoList } = useContext(TodoContext);
    const navigate = useNavigate();
    const todo = todoList.find((t) => t.id === Number(id));
    const [theme, setTheme] = useState('');
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState(0);
    const [initialTodo, setInitialTodo] = useState(null); // 초기값 저장
    const themes = ['일상', '업무/학습', '건강/운동', '취미/자기계발', '금융/재테크', '사회/관계'];
    useEffect(() => {
        if (todo) {
            setTheme(todo.theme);
            setTask(todo.task);
            setPriority(todo.priority);
            setInitialTodo(todo);
        }
    }, [todo]);
    if (!todo)
        return _jsx("p", { children: "Todo\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." });
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'p.m.' : 'a.m.';
        hours = hours % 12 || 12;
        return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
    };
    const handleUpdate = () => {
        if (!theme)
            return alert('Please select a theme!');
        if (!task.trim())
            return alert('Please enter a task!');
        const updatedTodo = {
            ...todo,
            theme,
            task,
            priority,
        };
        setTodoList((prev) => prev.map((t) => (t.id === todo.id ? updatedTodo : t)));
        navigate('/history');
    };
    const handleDelete = () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            setTodoList((prev) => prev.filter((t) => t.id !== todo.id));
            navigate('/history');
        }
    };
    const handleCancel = () => {
        navigate('/history');
    };
    const isModified = () => {
        if (!initialTodo)
            return false;
        return (theme !== initialTodo.theme || task !== initialTodo.task || priority !== initialTodo.priority);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: 'management-box', children: [_jsxs("div", { className: 'management-header', children: [_jsx("h3", { children: "\uD560 \uC77C" }), _jsxs("div", { className: 'management-date', children: [_jsx("img", { src: iconClock, alt: 'clock icon', className: 'clock-icon' }), formatDate(todo.createdAt)] })] }), _jsxs("div", { className: 'management-container', children: [_jsx("p", { children: "1. \uD14C\uB9C8" }), _jsx(Toggle, { options: themes, selected: theme, onSelect: setTheme }), _jsx("p", { children: "2. \uD560 \uC77C" }), _jsx(TaskInput, { value: task, onChange: (e) => setTask(e.target.value) }), _jsx("p", { children: "3. \uC911\uC694\uB3C4" }), _jsx(Priority, { initial: priority, onChange: setPriority })] })] }), _jsx("div", { className: 'mg-bottom-box', children: _jsxs("div", { className: 'button-group', children: [_jsxs("div", { className: 'button-with-tooltip', children: [_jsx(Button, { label: '\uC218\uC815', onClick: handleUpdate, variant: 'primary', disabled: !isModified() }), _jsx("span", { className: 'edit-text', children: "* \uB0B4\uC6A9\uC744 \uC218\uC815\uD55C \uB4A4 \u2018\uC218\uC815\u2019 \uBC84\uD2BC\uC744 \uB204\uB974\uC138\uC694" })] }), _jsx(Button, { label: '\uBAA9\uB85D', onClick: handleCancel, variant: 'opaque' }), _jsx(Button, { label: '\uC0AD\uC81C', onClick: handleDelete, variant: 'delete' })] }) })] }));
}
export default Management;
