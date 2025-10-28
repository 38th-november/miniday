import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import '../styles/todoCard.scss';
import ideaGray from '../assets/icons/icon_idea_gray.png';
import ideaColor from '../assets/icons/icon_idea_color.png';
const TodoCard = ({ task, priority, isOn, onToggle }) => {
  const totalIdea = 5;
  return _jsx('div', {
    className: 'todo-card',
    children: _jsxs('div', {
      className: 'todo-card-header',
      children: [
        _jsx('span', { className: 'todo-task', children: task }),
        _jsxs('span', {
          className: 'todo-priority',
          children: [
            _jsx('img', {
              src: priority > 0 ? ideaColor : ideaGray,
              alt: priority > 0 ? 'icon_priority_on' : 'icon_priority_off',
              className: 'todo-priority-icon',
            }),
            _jsx('span', {
              className: 'todo-priority-count',
              children: `X ${priority}`,
            }),
          ],
        }),
        _jsx('button', {
          className: `on-off-btn ${isOn ? 'active' : ''}`,
          onClick: (e) => {
            e.stopPropagation();
            onToggle();
          },
          children: isOn ? '완료' : '진행중',
        }),
      ],
    }),
  });
};
export default TodoCard;
