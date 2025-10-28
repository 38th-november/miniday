import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import iconAdd from '../assets/icons/icon_add.png';
import '../styles/emptyMain.scss';
function EmptyMain() {
    const navigate = useNavigate();
    return (_jsx("div", { className: 'empty-main-container', children: _jsx(Button, { icon: iconAdd, label: '\uD560 \uC77C\uC744 \uC785\uB825\uD558\uC138\uC694.', variant: 'transparent', onClick: () => navigate('/add') }) }));
}
export default EmptyMain;
