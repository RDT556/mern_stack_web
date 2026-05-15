const connectDB = require('../../../backend/config/db');
const Task = require('../../../backend/models/Task');

module.exports = async (req, res) => {
  const method = req.method;

  try {
    // ensure DB connection
    await connectDB();

    if (method === 'GET') {
      const tasks = await Task.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: tasks.length, data: tasks });
    }

    if (method === 'POST') {
      const task = await Task.create(req.body);
      return res.status(201).json({ success: true, data: task });
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
