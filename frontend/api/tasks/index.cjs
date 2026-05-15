const connectDB = require('../../../backend/config/db');
let Task;
try {
  Task = require('../../../backend/models/Task');
} catch (e) {
  // model not available — will use in-memory fallback
  Task = null;
}
const fallback = require('../fallback-in-memory.cjs');

module.exports = async (req, res) => {
  const method = req.method;

  try {
    // ensure DB connection
    await connectDB();

    if (method === 'GET') {
      if (Task) {
        const tasks = await Task.find().sort({ createdAt: -1 });
        return res.status(200).json({ success: true, count: tasks.length, data: tasks });
      }
      const data = await fallback.getAll();
      return res.status(200).json(data);
    }

    if (method === 'POST') {
      if (Task) {
        const task = await Task.create(req.body);
        return res.status(201).json({ success: true, data: task });
      }
      const data = await fallback.create(req.body);
      return res.status(201).json(data);
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
