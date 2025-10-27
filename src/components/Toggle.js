import { jsx as _jsx } from "react/jsx-runtime";
import '../styles/toggle.scss';
function Toggle({ options, onSelect, selected }) {
    return (_jsx("div", { className: 'toggle-container', children: options.map((opt) => (_jsx("button", { className: `toggle-btn ${selected === opt ? 'active' : ''}`, onClick: () => onSelect(opt), children: opt }, opt))) }));
}
export default Toggle;
