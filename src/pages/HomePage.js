import React, { useState, useEffect } from 'react';
import { getTodos, saveTodos } from '../utils/localStorage';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

const HomePage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = getTodos();
        if (Array.isArray(storedTodos)) {
            setTodos(storedTodos);
        }
    }, []);

    const handleAdd = (text) => {
        const newTask = { id: Date.now(), text };
        const updatedTodos = [...todos, newTask];
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
    };


    const handleDelete = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <AddTodo onAdd={handleAdd} />
            <TodoList todos={todos} onDelete={handleDelete} />
        </div>
    );
};

export default HomePage;
