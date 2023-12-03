import React from 'react';
import './TodoList.css'

function TodoList({ tasks, deleteTask, toggleComplete }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li className='list-item' key={task.id}>
                    <span
                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                    >
                        {task.text}
                    </span>
                    <div className="list-btns">
                        <button className='complete-btn' onClick={() => toggleComplete(task.id)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button className='delete-btn' onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
