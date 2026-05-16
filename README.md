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

## ☁️ Deployment on Vercel

Both the frontend and backend are deployed as **separate Vercel projects**.

### Step 1 — Deploy the Backend

1. Push your code to GitHub (make sure `.env` is in `.gitignore` ✅)
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import the repo, set **Root Directory** to `backend`
4. Add the following **Environment Variables** in Vercel:

   | Variable | Value |
   |---|---|
   | `MONGODB_URI` | Your MongoDB Atlas connection string |
   | `NODE_ENV` | `production` |
   | `ALLOWED_ORIGIN` | `https://your-frontend-name.vercel.app` (add after step 2) |

5. Deploy → copy the backend URL (e.g. `https://your-backend.vercel.app`)

### Step 2 — Deploy the Frontend

1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import the same repo, set **Root Directory** to `frontend`
3. Add the following **Environment Variables** in Vercel:

   | Variable | Value |
   |---|---|
   | `VITE_API_URL` | `https://your-backend.vercel.app/api` |

4. Deploy

### Step 3 — Update CORS

Go back to the **backend** project on Vercel → **Settings → Environment Variables** → update `ALLOWED_ORIGIN` to your frontend URL → **Redeploy**.

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