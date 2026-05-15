const connectDB = require('../../../backend/config/db');
const Task = require('../../../backend/models/Task');

module.exports = async (req, res) => {
  const method = req.method;
  const { id } = req.query || {};

  if (!id) return res.status(400).json({ success: false, error: 'Missing id' });

  try {
    await connectDB();

    if (method === 'PUT') {
      const task = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if (!task) return res.status(404).json({ success: false, error: 'Task not found' });
      return res.status(200).json({ success: true, data: task });
    }

    if (method === 'DELETE') {
      const task = await Task.findByIdAndDelete(id);
      if (!task) return res.status(404).json({ success: false, error: 'Task not found' });
      return res.status(200).json({ success: true, data: {} });
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
