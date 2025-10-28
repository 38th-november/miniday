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
  const [sortOrder, setSortOrder] = useState<'high' | 'low' | null>(null);

  const toggleTodoStatus = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  const filteredData =
    selectedTheme === '전체' ? todoList : todoList.filter((todo) => todo.theme === selectedTheme);

  const sortByPriority = (list: typeof todoList) => {
    if (!sortOrder) return list;
    return [...list].sort((a, b) =>
      sortOrder === 'high' ? b.priority - a.priority : a.priority - b.priority,
    );
  };

  const groupByTheme = (list: typeof todoList) => {
    const grouped: { [key: string]: typeof todoList } = {};
    list.forEach((todo) => {
      if (!grouped[todo.theme]) {
        grouped[todo.theme] = [];
      }
      grouped[todo.theme].push(todo);
    });
    return grouped;
  };

  const todoListActive = sortByPriority(filteredData.filter((todo) => !todo.completed));
  const todoListCompleted = sortByPriority(filteredData.filter((todo) => todo.completed));

  const groupedActive = groupByTheme(todoListActive);
  const groupedCompleted = groupByTheme(todoListCompleted);

  // todoList가 완전히 비어있으면 EmptyMain 표시
  if (todoList.length === 0) {
    return <EmptyMain />;
  }

  return (
    <>
      <div className='history-container'>
        <div className='history-header'>
          <div className='history-header-text'>
            <img src={iconOpenedFolder} alt='icon_opened_folder' className='history-header-icon' />
            해야할 목록
          </div>
          <div className='filter-group'>
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
            <div className='sort-buttons'>
              <button
                className={`sort-btn ${sortOrder === 'high' ? 'active' : ''}`}
                onClick={() => setSortOrder(sortOrder === 'high' ? null : 'high')}
              >
                높은순
              </button>
              <button
                className={`sort-btn ${sortOrder === 'low' ? 'active' : ''}`}
                onClick={() => setSortOrder(sortOrder === 'low' ? null : 'low')}
              >
                낮은순
              </button>
            </div>
          </div>
        </div>

        <div className='todo-section'>
          {todoListActive.length > 0 ? (
            Object.entries(groupedActive).map(([theme, todos]) => (
              <div key={theme} className='theme-group'>
                <p className='todo-theme'>{theme}</p>
                <div className='theme-cards'>
                  {todos.map((todo) => (
                    <div
                      key={todo.id}
                      onClick={() => navigate(`/management/${todo.id}`)}
                      className='todo-clickable'
                    >
                      <TodoCard
                        task={todo.task}
                        priority={todo.priority}
                        isOn={todo.completed}
                        onToggle={() => toggleTodoStatus(todo.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className='empty-message'>해야할 할 일이 없습니다.</p>
          )}
        </div>
        <hr />
        <div className='history-header'>
          <div className='history-header-text'>
            <img src={iconFolder} alt='icon_folder' className='history-header-icon' />
            완료된 목록
          </div>
        </div>

        <div className='todo-section'>
          {todoListCompleted.length > 0 ? (
            Object.entries(groupedCompleted).map(([theme, todos]) => (
              <div key={theme} className='theme-group'>
                <p className='todo-theme'>{theme}</p>
                <div className='theme-cards'>
                  {todos.map((todo) => (
                    <div
                      key={todo.id}
                      onClick={() => navigate(`/management/${todo.id}`)}
                      className='todo-clickable'
                    >
                      <TodoCard
                        task={todo.task}
                        priority={todo.priority}
                        isOn={todo.completed}
                        onToggle={() => toggleTodoStatus(todo.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className='empty-message'>완료된 할 일이 없습니다.</p>
          )}
        </div>
      </div>

      <div className='add-button-container'>
        <Button label='추가' onClick={() => navigate('/add')} variant='primary' />
      </div>
    </>
  );
}

export default History;
