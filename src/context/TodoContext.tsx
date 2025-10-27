/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

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

// Flutter와 통신하는 헬퍼 함수
const notifyFlutter = (action: string, key?: string, value?: string) => {
  try {
    // Flutter WebView의 JavaScriptChannel로 메시지 전송
    if (window.FlutterStorage && window.FlutterStorage.postMessage) {
      window.FlutterStorage.postMessage(
        JSON.stringify({
          action,
          key,
          value,
        })
      );
    }
  } catch (error) {
    // Flutter 환경이 아닐 경우 무시
    console.log('Not in Flutter environment');
  }
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todoList, setTodoList] = useState<Todo[]>(() => {
    // 초기 로드 시 localStorage에서 데이터 가져오기
    try {
      const saved = localStorage.getItem('todoList');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // todoList가 변경될 때마다 localStorage에 저장하고 Flutter에 알림
  useEffect(() => {
    try {
      const todoListString = JSON.stringify(todoList);
      localStorage.setItem('todoList', todoListString);

      // Flutter에 저장 알림 (이미 localStorage.setItem이 오버라이드되어 있으면 자동으로 전송됨)
      // 추가로 명시적으로 전송
      notifyFlutter('save', 'todoList', todoListString);
    } catch (error) {
      console.error('Failed to save todo list:', error);
    }
  }, [todoList]);

  return <TodoContext.Provider value={{ todoList, setTodoList }}>{children}</TodoContext.Provider>;
};
