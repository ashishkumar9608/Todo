import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete, editTodo, deleteTodo }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleClick = () => {
    toggleComplete(task.id);
    setIsCompleted(!isCompleted);
  };

  return (
    <div
      className={`flex justify-between m-10 text-xl border rounded-lg px-5 py-2.5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 ${isCompleted ? 'line-through' : ''}`}
    >
      <div className='flex justify-center items-center'>
        <input type="checkbox" className='h-4 w-4 mr-1' onClick={handleClick}></input>
        <p className={`text-xl cursor-pointer ${isCompleted ? 'text-red-500' : 'text-white'}`}>
          {task.task}
        </p>
      </div>
      <div className='cursor-pointer'>
        <FontAwesomeIcon icon={faPenToSquare} className='mr-2' onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
