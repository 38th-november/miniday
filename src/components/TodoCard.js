import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/todoCard.scss';
import emptyHeart from '../assets/icons/icon_empty_heart_gray.png';
import fullHeart from '../assets/icons/icon_full_heart_blue.png';
const TodoCard = ({ task, priority, isOn, onToggle }) => {
    const totalHearts = 5;
    return (_jsx("div", { className: 'todo-card', children: _jsxs("div", { className: 'todo-card-header', children: [_jsx("span", { className: 'todo-task', children: task }), _jsx("span", { className: 'todo-priority', children: [...Array(totalHearts)].map((_, i) => (_jsx("img", { src: i < priority ? fullHeart : emptyHeart, alt: i < priority ? 'Full heart' : 'Empty heart', className: 'heart-icon' }, i))) }), _jsx("button", { className: `on-off-btn ${isOn ? 'active' : ''}`, onClick: (e) => {
                        e.stopPropagation();
                        onToggle();
                    }, children: isOn ? '완료' : '진행중' })] }) }));
};
export default TodoCard;
