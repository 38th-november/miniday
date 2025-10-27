import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import emptyHeart from '../assets/icons/icon_empty_heart_gray.png';
import fullHeart from '../assets/icons/icon_full_heart_blue.png';
import '../styles/priority.scss';
const MAX_SCORE = 5;
const Priority = ({ initial = 0, onChange }) => {
    const [score, setScore] = useState(initial);
    useEffect(() => {
        setScore(initial);
    }, [initial]);
    const handleClick = (value) => {
        let newScore;
        if (value === score) {
            newScore = value - 1;
        }
        else {
            newScore = value;
        }
        setScore(newScore);
        if (onChange)
            onChange(newScore);
    };
    return (_jsx("div", { className: 'priority-container', children: Array.from({ length: MAX_SCORE }, (_, i) => i + 1).map((i) => (_jsx("button", { className: 'priority-btn', onClick: () => handleClick(i), children: _jsx("img", { src: i <= score ? fullHeart : emptyHeart, alt: `priority ${i}` }) }, i))) }));
};
export default Priority;
