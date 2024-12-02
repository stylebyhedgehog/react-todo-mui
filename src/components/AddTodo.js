import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddTodo = ({ onAdd }) => {
    const [task, setTask] = useState('');

    const handleAdd = () => {
        if (task.trim()) {
            onAdd(task);
            setTask('');
        }
    };

    return (
        <Box display="flex" gap={2}>
            <TextField
                variant="outlined"
                label="New Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleAdd}>
                Add
            </Button>
        </Box>
    );
};

export default AddTodo;
