import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete }) => (
    <List>
        {todos.map((task, index) => (
            <TodoItem key={task.id || index} task={task} onDelete={() => onDelete(index)} />
        ))}
    </List>
);


export default TodoList;
