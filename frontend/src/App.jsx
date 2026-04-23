import { useState, useEffect } from 'react';
import { taskAPI } from './services/api';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await taskAPI.getAllTasks();
      setTasks(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const res = await taskAPI.createTask(taskData);
      setTasks([res.data.data, ...tasks]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleTask = async (task) => {
    try {
      const updated = await taskAPI.updateTask(task._id, {
        completed: !task.completed,
      });
      setTasks(tasks.map(t => t._id === task._id ? updated.data.data : t));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await taskAPI.deleteTask(id);
      setTasks(tasks.filter(t => t._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      <h1>MERN Task Manager</h1>
      <TaskForm onSubmit={handleCreateTask} />
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default App;
