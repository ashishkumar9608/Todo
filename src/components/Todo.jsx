import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete, editTodo, deleteTodo }) => {
    return (
        <div className={`flex justify-between m-10 text-xl border rounded-lg px-5 py-2.5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 ${task.completed ? 'line-through' : ''}`}>
            <p onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} className='mr-2'
                    onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() =>
                    deleteTodo(task.id)
                } />
            </div>
        </div>
    );
};
