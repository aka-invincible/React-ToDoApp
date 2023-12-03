import React, { useState } from 'react';
import './TodoForm.css'
function TodoForm({ addTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== '') {
            addTask(task);
            setTask('');
        }
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input className='todo-input'
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button className='btn' type="submit">Add Task</button>
        </form>
    );
}

export default TodoForm;
