import '../styles/todoCard.scss';
import ideaGray from '../assets/icons/icon_idea_gray.png';
import ideaColor from '../assets/icons/icon_idea_color.png';
type TodoCardProps = {
  task: string;
  priority: number;
  isOn: boolean;
  onToggle: () => void;
};

const TodoCard: React.FC<TodoCardProps> = ({ task, priority, isOn, onToggle }) => {
  return (
    <div className='todo-card'>
      <div className='todo-card-header'>
        <span className='todo-task'>{task}</span>
        <div className='todo-priority'>
          <img
            src={priority > 0 ? ideaColor : ideaGray}
            alt={priority > 0 ? 'icon_priority_on' : 'icon_priority_off'}
            className='todo-priority-icon'
          />
          <div className='todo-priority-count'>X {priority}</div>
        </div>
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
