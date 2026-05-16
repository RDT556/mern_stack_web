# TaskFlow — MERN Task Manager

A full-stack task management app built with the **MERN stack** (MongoDB, Express, React, Node.js).

---

## ✨ Features

- Create, complete, and delete tasks
- Persistent storage with MongoDB Atlas
- Animated Neo-Brutalism UI
- Fully responsive (mobile-friendly)
- Deployed on Vercel (frontend + backend)

---

## 🏗️ Project Structure

```
task_mern-main/
├── backend/          # Express REST API
│   ├── config/       # MongoDB connection
│   ├── controllers/  # Route logic
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API routes
│   ├── server.js     # Entry point
│   ├── .env.example  # ← copy to .env and fill in values
│   └── vercel.json   # Vercel serverless config
└── frontend/         # React + Vite app
    ├── src/
    │   ├── components/
    │   ├── services/  # Axios API client
    │   ├── App.jsx
    │   └── index.css
    ├── .env.example   # ← copy to .env.local and fill in values
    └── vercel.json    # Vercel SPA config
```

---

## 🚀 Local Development

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd task_mern-main
```

### 2. Backend setup

```bash
cd backend
cp .env.example .env          # Fill in MONGODB_URI and ALLOWED_ORIGIN
npm install
npm run dev                   # Starts on http://localhost:5000
```

### 3. Frontend setup

```bash
cd frontend
cp .env.example .env.local    # Set VITE_API_URL=http://localhost:5000/api
npm install
npm run dev                   # Starts on http://localhost:5173
```

---

## 🧩 Project Description

TaskFlow is a lightweight task management system that separates concerns between a RESTful backend and a reactive frontend. The backend exposes a simple CRUD API for tasks and persists data in MongoDB, while the frontend provides a fast, responsive UI built with React and Vite. The API client layer in the frontend centralizes HTTP calls, and the backend follows a clean controller → model → route structure to keep logic organized and easy to extend.

---

## 📡 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/api/tasks` | Get all tasks |
| `POST` | `/api/tasks` | Create a task |
| `PUT`  | `/api/tasks/:id` | Update a task |
| `DELETE` | `/api/tasks/:id` | Delete a task |

---

## 🔒 Security Notes

- **Never commit `.env`** — it's in `.gitignore`. Use `.env.example` as a reference.
- In production, `ALLOWED_ORIGIN` restricts CORS to your frontend domain only.
- Error messages in production do **not** expose stack traces.
