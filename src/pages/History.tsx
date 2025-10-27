import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoCard from '../components/TodoCard';
import Button from '../components/Button';
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

  const toggleTodoStatus = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  const filteredData =
    selectedTheme === '전체' ? todoList : todoList.filter((todo) => todo.theme === selectedTheme);

  const todoListActive = filteredData.filter((todo) => !todo.completed);
  const todoListCompleted = filteredData.filter((todo) => todo.completed);

  return (
    <>
      <div className='history-container'>
        <div className='history-header'>
          <h3>해야할 목록</h3>
          <select
            className='theme-select'
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
          >
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>

        <div className='todo-section'>
          {todoListActive.length > 0 ? (
            todoListActive.map((todo) => (
              <div key={todo.id} className='todo-block'>
                <p className='todo-theme'>{todo.theme}</p>
                <div onClick={() => navigate(`/management/${todo.id}`)} className='todo-clickable'>
                  <TodoCard
                    task={todo.task}
                    priority={todo.priority}
                    isOn={todo.completed}
                    onToggle={() => toggleTodoStatus(todo.id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className='empty-message'>해야할 할 일이 없습니다.</p>
          )}
        </div>
        <hr />
        <div className='history-header'>
          <h3>완료된 목록</h3>
        </div>

        <div className='todo-section'>
          {todoListCompleted.length > 0 ? (
            todoListCompleted.map((todo) => (
              <div key={todo.id} className='todo-block'>
                <p className='todo-theme'>{todo.theme}</p>
                <div onClick={() => navigate(`/management/${todo.id}`)} className='todo-clickable'>
                  <TodoCard
                    task={todo.task}
                    priority={todo.priority}
                    isOn={todo.completed}
                    onToggle={() => toggleTodoStatus(todo.id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className='empty-message'>완료된 할 일이 없습니다.</p>
          )}
        </div>
      </div>

      {/* 추가 버튼 */}
      <div className='add-button-container' style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button label='추가' onClick={() => navigate('/add')} variant='primary' />
      </div>
    </>
  );
}

export default History;
