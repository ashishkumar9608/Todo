import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
        task.isEditing && task.isEditing(false);
    };

    return (
        <div className='flex justify-center items-center m-10'>
            <input
                type="text"
                value={value}
                placeholder='Update Task'
                className="bg-transparent border font-medium rounded-lg text-xl px-5 py-2.5 text-center text-white mr-1"
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
                onClick={handleSubmit}
            >
                Update Task
            </button>
        </div>
    );
};