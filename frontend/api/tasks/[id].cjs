const mongoose = require('mongoose');
const fallback = require('../fallback-in-memory.cjs');

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) throw new Error('MONGODB_URI not set');
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(mongoUri);
};

const getTaskModel = () => {
  if (mongoose.models && mongoose.models.Task) return mongoose.models.Task;
  const schema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    completed: { type: Boolean, default: false },
  }, { timestamps: true });
  return mongoose.model('Task', schema);
};

module.exports = async (req, res) => {
  const method = req.method;
  const { id } = req.query || {};

  if (!id) return res.status(400).json({ success: false, error: 'Missing id' });

  try {
    await connectDB();
    const TaskModel = getTaskModel();

    if (method === 'PUT') {
      const task = await TaskModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if (!task) return res.status(404).json({ success: false, error: 'Task not found' });
      return res.status(200).json({ success: true, data: task });
    }

    if (method === 'DELETE') {
      const task = await TaskModel.findByIdAndDelete(id);
      if (!task) return res.status(404).json({ success: false, error: 'Task not found' });
      return res.status(200).json({ success: true, data: {} });
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
