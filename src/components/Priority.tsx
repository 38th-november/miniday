import { useState, useEffect } from 'react';
import emptyHeart from '../assets/icons/icon_empty_heart_gray.png';
import fullHeart from '../assets/icons/icon_full_heart_blue.png';
import '../styles/priority.scss';

type PriorityProps = {
  initial?: number;
  onChange?: (value: number) => void;
};

const MAX_SCORE = 5;

const Priority: React.FC<PriorityProps> = ({ initial = 0, onChange }) => {
  const [score, setScore] = useState(initial);

  useEffect(() => {
    setScore(initial);
  }, [initial]);

  const handleClick = (value: number) => {
    let newScore;
    if (value === score) {
      newScore = value - 1;
    } else {
      newScore = value;
    }
    setScore(newScore);
    if (onChange) onChange(newScore);
  };

  return (
    <div className='priority-container'>
      {Array.from({ length: MAX_SCORE }, (_, i) => i + 1).map((i) => (
        <button key={i} className='priority-btn' onClick={() => handleClick(i)}>
          <img src={i <= score ? fullHeart : emptyHeart} alt={`priority ${i}`} />
        </button>
      ))}
    </div>
  );
};

export default Priority;
