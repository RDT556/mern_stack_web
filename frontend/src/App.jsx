import { useState, useEffect } from 'react';
import { taskAPI } from './services/api';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setError(null);
      const res = await taskAPI.getAllTasks();
      setTasks(res.data.data);
    } catch (err) {
      console.error(err);
      setError('Failed to load tasks. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      setSubmitting(true);
      setError(null);
      const res = await taskAPI.createTask(taskData);
      setTasks([res.data.data, ...tasks]);
    } catch (err) {
      console.error(err);
      setError('Failed to create task. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleTask = async (task) => {
    try {
      setError(null);
      const updated = await taskAPI.updateTask(task._id, {
        completed: !task.completed,
      });
      setTasks(tasks.map((t) => (t._id === task._id ? updated.data.data : t)));
    } catch (err) {
      console.error(err);
      setError('Failed to update task. Please try again.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      setError(null);
      await taskAPI.deleteTask(id);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      console.error(err);
      setError('Failed to delete task. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading your tasks…</p>
      </div>
    );
  }

  return (
    <div className="app-content">
      <div className="app-header">
        <h1>✅ TaskFlow</h1>
        <p className="subtitle">Stay on top of everything</p>
      </div>

      {error && (
        <div className="error-banner" role="alert">
          <span>⚠️ {error}</span>
          <button className="error-close" onClick={() => setError(null)}>
            ✕
          </button>
        </div>
      )}

      <div className="form-section">
        <TaskForm onSubmit={handleCreateTask} submitting={submitting} />
      </div>

      <div className="tasks-section">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <p>🎉 No tasks yet — add one above!</p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
