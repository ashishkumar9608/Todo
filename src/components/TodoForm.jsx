import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            addTodo(value);
            setValue("");
        }
    };

    return (
        <form className='flex justify-center items-center m-10' onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                placeholder='Add a new task...'
                className="bg-transparent border font-medium rounded-lg text-xl px-5 py-2.5 text-center text-white mr-1"
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
            >
                Add Task
            </button>
        </form>
    );
};
