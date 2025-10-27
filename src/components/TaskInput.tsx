import React from 'react';
import '../styles/taskInput.scss';

type TaskInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const TaskInput: React.FC<TaskInputProps> = ({
  value,
  onChange,
  placeholder = '아침에 미지근한 물 마시기',
}) => {
  return (
    <input
      type='text'
      className='task-input'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TaskInput;
