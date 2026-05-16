# 📝 TaskFlow — Full Stack MERN Task Management Application

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

# 🚀 TaskFlow — Modern MERN Stack Task Manager

> **TaskFlow** is a modern full-stack task management web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
> The application allows users to efficiently create, manage, update, and organize daily tasks using a fast, responsive, and minimal interface.

The project demonstrates complete frontend-backend integration, REST API development, database handling, deployment architecture, and responsive UI engineering using modern web technologies.

---

# 🌟 Project Overview

Managing daily activities and tasks efficiently is extremely important for productivity. Traditional to-do applications often become cluttered, slow, or overloaded with unnecessary features.

TaskFlow was designed as a lightweight yet scalable solution that focuses on:

- Simplicity
- Performance
- Modern UI/UX
- Clean backend architecture
- Real-time responsiveness
- Full-stack engineering practices

The project serves both as:

- A practical productivity application
- A portfolio-quality MERN stack project

---

# 🎯 Objectives of the Project

The primary goals behind TaskFlow were:

- To understand and implement full-stack web development
- To create a complete RESTful backend API
- To integrate React frontend with Express backend
- To perform CRUD operations with MongoDB
- To implement scalable project architecture
- To deploy frontend and backend separately
- To understand cloud database integration using MongoDB Atlas
- To practice responsive frontend engineering

---

# ✨ Major Features

---

# 🎨 Frontend Features

## ✅ Modern Responsive Interface

- Clean and elegant user interface
- Mobile-friendly responsive layout
- Adaptive design for desktop, tablet, and smartphones
- Smooth transitions and animations

---

## ✅ Task Management System

Users can:

- Create new tasks
- Mark tasks as completed
- Delete tasks
- View all existing tasks
- Manage tasks dynamically without page refresh

---

## ✅ Real-Time UI Updates

The interface updates instantly after operations such as:

- Adding tasks
- Updating tasks
- Deleting tasks

without requiring manual refresh.

---

## ✅ Axios-Based API Communication

Frontend communicates with backend APIs using Axios for:

- Faster HTTP requests
- Cleaner request handling
- Better scalability
- Centralized API management

---

## ✅ Component-Based React Architecture

The React frontend is divided into reusable components such as:

- TaskForm
- TaskList
- TaskItem
- Header
- Notification Components

This improves:

- Maintainability
- Code readability
- Scalability

---

## ✅ Vite-Powered Frontend

The frontend uses Vite instead of Create React App because:

- Faster startup time
- Lightning-fast hot module replacement
- Better optimization
- Smaller production bundles

---

# ⚙️ Backend Features

---

## ✅ RESTful API Architecture

The backend follows REST principles using Express.js.

Supported API operations:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Fetch all tasks |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

---

## ✅ MongoDB Database Integration

Task data is stored in MongoDB Atlas cloud database.

Features include:

- Persistent cloud storage
- Flexible schema design
- Scalable NoSQL database structure
- Fast document retrieval

---

## ✅ Mongoose ODM

Mongoose is used for:

- Schema creation
- Validation
- Database queries
- Middleware support

---

## ✅ MVC Project Structure

The backend follows the MVC pattern:

- **Models** → Database schemas
- **Controllers** → Business logic
- **Routes** → API endpoint handling

This separation improves maintainability and scalability.

---

## ✅ Environment Variable Security

Sensitive information like:

- MongoDB URI
- Port numbers
- API origins

are stored securely using `.env` files.

---

## ✅ CORS Configuration

Cross-Origin Resource Sharing is configured to:

- Allow frontend-backend communication
- Restrict unauthorized origins in production

---

## ✅ Error Handling

Robust backend error handling prevents crashes and handles:

- Invalid requests
- Database failures
- Missing resources
- Server exceptions

---

# 🏗️ Tech Stack

---

# Frontend Technologies

| Technology | Purpose |
|---|---|
| React.js | Frontend framework |
| Vite | Frontend build tool |
| Axios | API requests |
| CSS/Tailwind | Styling |
| React Hooks | State management |

---

# Backend Technologies

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| dotenv | Environment variable management |
| cors | Cross-origin requests |

---

# ☁️ Deployment Technologies

| Platform | Purpose |
|---|---|
| Vercel | Frontend deployment |
| Render/Vercel/Railway | Backend deployment |
| MongoDB Atlas | Cloud database |

---

# 📂 Complete Project Structure

```text
task_mern-main/
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── models/
│   │   └── Task.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── node_modules/
│   │
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── vercel.json
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   └── TaskItem.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   └── vercel.json
│
├── README.md
└── package-lock.json

# 👨‍💻 Author

## Anuj Tiwari

