import React, { useState } from 'react';

const TaskForm = ({ onSubmit, submitting }) => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || submitting) return;
    onSubmit(formData);
    setFormData({ title: '', description: '' });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="task-title"
        name="title"
        placeholder="What needs to be done?"
        value={formData.title}
        onChange={handleChange}
        required
        disabled={submitting}
        autoComplete="off"
      />
      <textarea
        id="task-description"
        name="description"
        placeholder="Add details (optional)"
        value={formData.description}
        onChange={handleChange}
        disabled={submitting}
        rows={3}
      />
      <button type="submit" className="btn-submit" disabled={submitting}>
        {submitting ? '⏳ Adding…' : '+ Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
