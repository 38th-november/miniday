import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';
export const TodoContext = createContext({
    todoList: [],
    setTodoList: () => { },
});
export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);
    return _jsx(TodoContext.Provider, { value: { todoList, setTodoList }, children: children });
};
