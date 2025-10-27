import React from 'react';
import '../styles/toggle.scss';

type ToggleProps = {
  options: string[];
  onSelect: (value: string) => void;
  selected?: string;
};

function Toggle({ options, onSelect, selected }: ToggleProps) {
  return (
    <div className='toggle-container'>
      {options.map((opt) => (
        <button
          key={opt}
          className={`toggle-btn ${selected === opt ? 'active' : ''}`}
          onClick={() => onSelect(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Toggle;
