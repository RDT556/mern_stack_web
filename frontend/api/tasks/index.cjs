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

  try {
    // try DB first
    await connectDB();
    const TaskModel = getTaskModel();

    if (method === 'GET') {
      const tasks = await TaskModel.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: tasks.length, data: tasks });
    }

    if (method === 'POST') {
      const task = await TaskModel.create(req.body);
      return res.status(201).json({ success: true, data: task });
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
