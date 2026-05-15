// Simple in-memory fallback for development or when DB is unavailable.
let tasks = [];
let idCounter = 1;

module.exports = {
  getAll: async () => ({ success: true, count: tasks.length, data: tasks }),
  create: async (payload) => {
    const task = { _id: String(idCounter++), ...payload, createdAt: new Date(), updatedAt: new Date() };
    tasks.unshift(task);
    return { success: true, data: task };
  },
  update: async (id, payload) => {
    const idx = tasks.findIndex((t) => t._id === id);
    if (idx === -1) return { success: false, error: 'Not found' };
    tasks[idx] = { ...tasks[idx], ...payload, updatedAt: new Date() };
    return { success: true, data: tasks[idx] };
  },
  remove: async (id) => {
    const idx = tasks.findIndex((t) => t._id === id);
    if (idx === -1) return { success: false, error: 'Not found' };
    tasks.splice(idx, 1);
    return { success: true, data: {} };
  },
};
