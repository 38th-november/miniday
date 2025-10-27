import '../styles/todoCard.scss';
import emptyHeart from '../assets/icons/icon_empty_heart_gray.png';
import fullHeart from '../assets/icons/icon_full_heart_blue.png';

type TodoCardProps = {
  task: string;
  priority: number;
  isOn: boolean;
  onToggle: () => void;
};

const TodoCard: React.FC<TodoCardProps> = ({ task, priority, isOn, onToggle }) => {
  const totalHearts = 5;

  return (
    <div className='todo-card'>
      <div className='todo-card-header'>
        <span className='todo-task'>{task}</span>
        <span className='todo-priority'>
          {[...Array(totalHearts)].map((_, i) => (
            <img
              key={i}
              src={i < priority ? fullHeart : emptyHeart}
              alt={i < priority ? 'Full heart' : 'Empty heart'}
              className='heart-icon'
            />
          ))}
        </span>
        <button
          className={`on-off-btn ${isOn ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          {isOn ? '완료' : '진행중'}
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
