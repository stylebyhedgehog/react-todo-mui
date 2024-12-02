import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ task, onDelete }) => (
    <ListItem
        secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={onDelete}>
                <DeleteIcon />
            </IconButton>
        }
    >
        <ListItemText primary={task.text} />
    </ListItem>
);

export default TodoItem;
