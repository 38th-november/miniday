import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Toggle from '../components/Toggle';
import TaskInput from '../components/TaskInput';
import Priority from '../components/Priority';
import Button from '../components/Button';
import { TodoContext } from '../context/TodoContext';
import '../styles/add.scss';
function Add() {
    const themes = ['일상', '업무/학습', '건강/운동', '취미/자기계발', '금융/재테크', '사회/관계'];
    const [theme, setTheme] = useState('');
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState(0);
    const { todoList, setTodoList } = useContext(TodoContext);
    const navigate = useNavigate();
    const handleAdd = () => {
        if (!theme)
            return alert('Please select a theme!');
        if (!task.trim())
            return alert('Please enter a task!');
        const newTodo = {
            id: Date.now(),
            theme,
            task,
            priority,
            completed: false,
            createdAt: Date.now(),
        };
        setTodoList([...todoList, newTodo]);
        setTask('');
        setPriority(0);
        navigate('/history');
    };
    const handleCancel = () => {
        if (todoList.length > 0) {
            navigate('/history');
        }
        else {
            navigate('/');
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'add-box', children: [_jsxs("div", { className: 'add-container', children: [_jsx("p", { children: "1. \uD14C\uB9C8\uB97C \uC120\uD0DD\uD558\uC138\uC694." }), _jsx(Toggle, { options: themes, selected: theme, onSelect: setTheme }), _jsx("p", { children: "2. \uD560 \uC77C\uC744 \uC785\uB825\uD558\uC138\uC694." }), _jsx(TaskInput, { value: task, onChange: (e) => setTask(e.target.value) }), _jsx("p", { children: "3. \uC5BC\uB9C8\uB098 \uC911\uC694\uD55C \uC77C\uC778\uAC00\uC694?" }), _jsx(Priority, { initial: priority, onChange: setPriority })] }), _jsxs("div", { className: 'button-group', children: [_jsx(Button, { label: '\uC791\uC131', onClick: handleAdd, variant: 'primary' }), _jsx(Button, { label: '\uCDE8\uC18C', onClick: handleCancel, variant: 'opaque' })] })] }) }));
}
export default Add;
