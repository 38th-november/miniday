import { useParams, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import Toggle from '../components/Toggle';
import TaskInput from '../components/TaskInput';
import Priority from '../components/Priority';
import Button from '../components/Button';
import { TodoContext, Todo } from '../context/TodoContext';
import '../styles/management.scss';
function Management() {
  const { id } = useParams<{ id: string }>();
  const { todoList, setTodoList } = useContext(TodoContext);
  const navigate = useNavigate();

  const todo = todoList.find((t) => t.id === Number(id));
  const [theme, setTheme] = useState('');
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState(0);
  const [initialTodo, setInitialTodo] = useState<Todo | null>(null); // 초기값 저장

  const themes = ['일상', '업무/학습', '건강/운동', '취미/자기계발', '금융/재테크', '사회/관계'];

  useEffect(() => {
    if (todo) {
      setTheme(todo.theme);
      setTask(todo.task);
      setPriority(todo.priority);
      setInitialTodo(todo);
    }
  }, [todo]);

  if (!todo) return <p>Todo를 찾을 수 없습니다.</p>;

  const formatDate = (dateStr: string | number) => {
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
    if (!theme) return alert('Please select a theme!');
    if (!task.trim()) return alert('Please enter a task!');

    const updatedTodo: Todo = {
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
    if (!initialTodo) return false;
    return (
      theme !== initialTodo.theme || task !== initialTodo.task || priority !== initialTodo.priority
    );
  };

  return (
    <>
      <div className='management-box'>
        <div className='management-header'>
          <h3>할 일</h3>
          <span>DATE ♥ {formatDate(todo.createdAt)}</span>
        </div>

        <div className='management-container'>
          <p>1. 테마</p>
          <Toggle options={themes} selected={theme} onSelect={setTheme} />

          <p>2. 할 일</p>
          <TaskInput value={task} onChange={(e) => setTask(e.target.value)} />

          <p>3. 중요도</p>
          <Priority initial={priority} onChange={setPriority} />
        </div>
      </div>
      <div className='mg-bottom-box'>
        <div className='button-group'>
          <div className='button-with-tooltip'>
            <Button
              label='수정'
              onClick={handleUpdate}
              variant='primary'
              disabled={!isModified()}
            />
            <span className='edit-text'>* 내용을 수정한 뒤 ‘수정’ 버튼을 누르세요</span>
          </div>
          <Button label='목록' onClick={handleCancel} variant='opaque' />
          <Button label='삭제' onClick={handleDelete} variant='delete' />
        </div>
      </div>
    </>
  );
}

export default Management;
