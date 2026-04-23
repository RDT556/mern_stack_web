import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div>
      <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </h3>
      <p>{task.description}</p>
      <button onClick={() => onToggle(task)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
