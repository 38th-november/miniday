import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Toggle from '../components/Toggle';
import TaskInput from '../components/TaskInput';
import Priority from '../components/Priority';
import Button from '../components/Button';
import { TodoContext, Todo } from '../context/TodoContext';
import '../styles/add.scss';

function Add() {
  const themes = ['일상', '업무/학습', '건강/운동', '취미/자기계발', '금융/재테크', '사회/관계'];

  const [theme, setTheme] = useState('');
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState(0);

  const { todoList, setTodoList } = useContext(TodoContext);

  const navigate = useNavigate();

  const handleAdd = () => {
    if (!theme) return alert('Please select a theme!');
    if (!task.trim()) return alert('Please enter a task!');

    const newTodo: Todo = {
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
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <div className='add-box'>
        <div className='add-container'>
          <p>1. 테마를 선택하세요.</p>
          <Toggle options={themes} selected={theme} onSelect={setTheme} />

          <p>2. 할 일을 입력하세요.</p>
          <TaskInput value={task} onChange={(e) => setTask(e.target.value)} />

          <p>3. 얼마나 중요한 일인가요?</p>
          <Priority initial={priority} onChange={setPriority} />
        </div>
        <div className='button-group'>
          <Button label='작성' onClick={handleAdd} variant='primary' />
          <Button label='취소' onClick={handleCancel} variant='opaque' />
        </div>
      </div>
    </>
  );
}

export default Add;
