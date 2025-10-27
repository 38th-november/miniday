import { jsx as _jsx } from "react/jsx-runtime";
import '../styles/taskInput.scss';
const TaskInput = ({ value, onChange, placeholder = '아침에 미지근한 물 마시기', }) => {
    return (_jsx("input", { type: 'text', className: 'task-input', value: value, onChange: onChange, placeholder: placeholder }));
};
export default TaskInput;
