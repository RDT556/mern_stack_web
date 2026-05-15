const connectDB = require('../../../backend/config/db');
let Task;
try {
  Task = require('../../../backend/models/Task');
} catch (e) {
  Task = null;
}
const fallback = require('../fallback-in-memory.cjs');

module.exports = async (req, res) => {
  const method = req.method;
  const { id } = req.query || {};

  if (!id) return res.status(400).json({ success: false, error: 'Missing id' });

  try {
    await connectDB();

    if (method === 'PUT') {
      if (Task) {
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!task) return res.status(404).json({ success: false, error: 'Task not found' });
        return res.status(200).json({ success: true, data: task });
      }
      const updated = await fallback.update(id, req.body);
      if (!updated.success) return res.status(404).json(updated);
      return res.status(200).json(updated);
    }

    if (method === 'DELETE') {
      if (Task) {
        const task = await Task.findByIdAndDelete(id);
        if (!task) return res.status(404).json({ success: false, error: 'Task not found' });
        return res.status(200).json({ success: true, data: {} });
      }
      const removed = await fallback.remove(id);
      if (!removed.success) return res.status(404).json(removed);
      return res.status(200).json(removed);
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
