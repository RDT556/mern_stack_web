import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task-item${task.completed ? ' task-completed' : ''}`}>
      <div className="task-info">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
      </div>
      <div className="task-actions">
        <button
          className={task.completed ? 'btn-undo' : 'btn-complete'}
          onClick={() => onToggle(task)}
          aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {task.completed ? '↩ Undo' : '✓ Done'}
        </button>
        <button
          className="btn-delete"
          onClick={() => onDelete(task._id)}
          aria-label="Delete task"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
