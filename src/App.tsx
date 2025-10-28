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

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={todoList.length > 0 ? <History /> : <EmptyMain />} />
        <Route path='/add' element={<Add />} />
        <Route path='/history' element={<History />} />
        <Route path='/management/:id' element={<Management />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <TodoProvider>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/miniday'}>
        <AppRoutes />
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
