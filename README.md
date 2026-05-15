# MERN Task Manager

A full-stack task manager built with the MERN stack. The project is split into a Node.js/Express backend and a React/Vite frontend, with MongoDB used for persistence. Users can create tasks, mark them complete, edit their completion state, and delete them from the list.

## Features

- Create tasks with a required title and optional description.
- View all tasks sorted by newest first.
- Mark tasks as complete or undo completion.
- Delete tasks from the database.
- REST API built with Express and MongoDB/Mongoose.
- React frontend powered by Vite and Axios.

## Tech Stack

- Frontend: React, Vite, Axios
- Backend: Node.js, Express, Mongoose, CORS, dotenv
- Database: MongoDB

## Project Structure

```
mern_stack_web/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskItem.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   └── vite.config.js
└── README.md
```

## Prerequisites

- Node.js 18 or newer
- npm
- A MongoDB database or MongoDB Atlas connection string

## Environment Variables

Create a `.env` file inside `backend/` with:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Optional frontend environment variable:

```env
VITE_API_URL=http://localhost:5000/api
```

For production deployments, set `VITE_API_URL` to the public backend URL and set `CLIENT_URL` in the backend to your deployed frontend URL. If `CLIENT_URL` contains multiple comma-separated origins, the backend will allow them all.

## Installation

Install dependencies separately for the backend and frontend:

```bash
cd backend
npm install

cd ../frontend
npm install
```

## Running the App

Start the backend in one terminal:

```bash
cd backend
npm run dev
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

The backend runs on `http://localhost:5000` by default, and the Vite frontend runs on the local port shown in the terminal output.

## Available Scripts

### Backend

- `npm start` - Start the Express server in production mode.
- `npm run dev` - Start the server with nodemon for development.

### Frontend

- `npm run dev` - Start the Vite development server.
- `npm run build` - Build the frontend for production.
- `npm run lint` - Run ESLint across the frontend source files.
- `npm run preview` - Preview the production build locally.

## API Endpoints

Base URL: `/api/tasks`

- `GET /api/tasks` - Fetch all tasks.
- `POST /api/tasks` - Create a new task.
- `PUT /api/tasks/:id` - Update an existing task, including completion state.
- `DELETE /api/tasks/:id` - Delete a task.

### Task Shape

The MongoDB task document uses these fields:

- `title` - required string
- `description` - optional string
- `completed` - boolean, defaults to `false`
- `createdAt` and `updatedAt` - added automatically by timestamps

## How It Works

- The backend connects to MongoDB through `backend/config/db.js`.
- Express exposes the task routes from `backend/routes/taskRoutes.js`.
- The frontend loads tasks on page start, then uses Axios requests in `frontend/src/services/api.js` to create, update, and delete tasks.
- `TaskForm` handles task creation, and `TaskItem` handles completion toggling and deletion.

## Notes

- Make sure MongoDB is reachable before starting the backend.
- If you change the backend URL, update `VITE_API_URL` accordingly.
- The backend exposes a `/health` endpoint for deployment checks.

## Deployment

This repo is set up best as two deployments:

1. Deploy the backend as a Node.js service with `MONGODB_URI`, `PORT`, and optionally `CLIENT_URL` set in the host environment.
2. Deploy the frontend as a static Vite app with `VITE_API_URL` pointing to the backend service.

Before deploying, run `npm run build` inside `frontend/` and confirm the backend can connect to MongoDB with the production connection string.