/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export type Todo = {
  id: number;
  theme: string;
  task: string;
  priority: number;
  completed: boolean;
  createdAt: number;
};

type TodoContextType = {
  todoList: Todo[];
  setTodoList: Dispatch<SetStateAction<Todo[]>>;
};

export const TodoContext = createContext<TodoContextType>({
  todoList: [],
  setTodoList: () => {},
});

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  return <TodoContext.Provider value={{ todoList, setTodoList }}>{children}</TodoContext.Provider>;
};
