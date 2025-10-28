import { useState, useEffect } from 'react';
import ideaGray from '../assets/icons/icon_idea_gray.png';
import ideaColor from '../assets/icons/icon_idea_color.png';
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
          <img src={i <= score ? ideaColor : ideaGray} alt={`priority ${i}`} />
        </button>
      ))}
    </div>
  );
};

export default Priority;
