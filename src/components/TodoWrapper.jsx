import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = id => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };

    return (
        <div className="min-h-screen min-w-full bg-black text-white flex justify-center items-center">
            <div className='border-white rounded-lg border-2 m-10'>
                <div className='flex justify-center items-center mt-5 text-3xl font-bold'>TODO APP</div>
                <TodoForm addTodo={addTodo} />
                {todos.map((todo) => (
                    todo.isEditing ? (
                        <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
                    ) : (
                        <Todo
                            key={todo.id}
                            task={todo}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                            toggleComplete={toggleComplete}
                        />
                    )
                ))}
            </div>
        </div>
    );
};