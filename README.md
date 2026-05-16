# TaskFlow — MERN Task Manager

**A modern, full-stack task management application built with the MERN stack**

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green) ![React](https://img.shields.io/badge/React-19.2.0-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green) ![Express](https://img.shields.io/badge/Express-5.2.1-lightgrey)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Frontend Components](#frontend-components)
- [Backend Architecture](#backend-architecture)
- [Data Models](#data-models)
- [API Reference](#api-reference)
- [Development Workflow](#development-workflow)
- [Key Dependencies](#key-dependencies)
- [Security Features](#security-features)
- [Contributing](#contributing)
- [Performance & Design](#performance--design)

---

## 🎯 Overview

**TaskFlow** is a production-ready MERN stack application designed to demonstrate modern full-stack web development practices. It provides a clean, intuitive interface for task management with real-time persistence to MongoDB. The application showcases best practices in REST API design, React component architecture, error handling, and security configuration.

Whether you're managing personal tasks or learning MERN architecture, TaskFlow provides a complete reference implementation for building scalable web applications.

---

## ✨ Features

- **Create Tasks** - Add new tasks with title and optional descriptions
- **Update Tasks** - Mark tasks as complete or incomplete with instant feedback
- **Delete Tasks** - Remove tasks with confirmation
- **Persistent Storage** - All tasks stored in MongoDB with automatic timestamps (created/updated)
- **Real-time UI Updates** - Optimistic UI updates for instant feedback
- **Responsive Design** - Neo-Brutalism UI that works seamlessly on mobile, tablet, and desktop
- **Error Handling** - Graceful error messages and recovery mechanisms
- **Loading States** - Visual feedback during data fetching and operations
- **Empty State** - User-friendly message when no tasks exist

---

## 🔧 Technology Stack

### **Frontend**
- **React 19.2.0** - Modern UI library with hooks for state management
- **Vite 7.2.4** - Lightning-fast build tool and dev server
- **Axios 1.13.2** - Promise-based HTTP client for API requests
- **CSS3** - Neo-Brutalism UI with custom styling and animations

### **Backend**
- **Node.js 18+** - JavaScript runtime for server-side execution
- **Express 5.2.1** - Minimalist web framework for building REST APIs
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose 9.1.5** - ODM for MongoDB with schema validation
- **CORS 2.8.6** - Cross-Origin Resource Sharing middleware for security

### **Development Tools**
- **Nodemon 3.1.11** - Auto-restart development server on file changes
- **ESLint 9.39.1** - Code quality and consistency checking
- **Dotenv 17.2.3** - Environment variable management

---

## 🏗️ Project Architecture

TaskFlow follows a **client-server architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────┐
│                     TaskFlow Application                │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌──────────────────┐            ┌──────────────────┐   │
│  │   React Frontend │            │  Express Backend │   │
│  │   (Vite)         │◄──HTTP/REST─►  (Node.js)      │   │
│  │                  │            │                  │   │
│  │  - Components    │            │  - Controllers   │   │
│  │  - State Mgmt    │            │  - Routes        │   │
│  │  - Services      │            │  - Models        │   │
│  │  - Styling       │            │  - Middleware    │   │
│  └──────────────────┘            └──────────────────┘   │
│         │                                    │            │
│         └────────────┬─────────────────────┘             │
│                      │                                    │
│                 Axios HTTP                               │
│              REST API (JSON)                             │
│                      │                                    │
│                      ▼                                    │
│          ┌──────────────────────┐                       │
│          │   MongoDB Database   │                       │
│          │  (Cloud or Local)    │                       │
│          │                      │                       │
│          │  - Task Collections  │                       │
│          │  - Automatic IDs     │                       │
│          │  - Timestamps        │                       │
│          └──────────────────────┘                       │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

### Data Flow
1. **User Action** → User interacts with React component
2. **State Update** → Component state is updated locally
3. **API Request** → Axios sends HTTP request to Express backend
4. **Server Processing** → Express controller processes request
5. **Database Operation** → Mongoose performs CRUD on MongoDB
6. **Response** → Server returns JSON response
7. **UI Update** → React updates component with new data

---

## 📁 Project Structure

```
mern_stack_web/
├── backend/                      # Express.js REST API Server
│   ├── config/
│   │   └── db.js                # MongoDB connection configuration
│   ├── controllers/
│   │   └── taskController.js     # Business logic for task operations
│   ├── models/
│   │   └── Task.js              # Mongoose schema and model
│   ├── routes/
│   │   └── taskRoutes.js         # API route definitions
│   ├── server.js                 # Express app setup and middleware
│   ├── .env.example              # Environment variables template
│   ├── vercel.json               # Vercel deployment configuration
│   ├── package.json              # Backend dependencies
│   └── node_modules/             # Installed packages
│
├── frontend/                      # React + Vite Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx      # Form for creating new tasks
│   │   │   └── TaskItem.jsx      # Individual task display component
│   │   ├── services/
│   │   │   └── api.js            # Axios configuration and API methods
│   │   ├── App.jsx               # Main application component
│   │   ├── main.jsx              # React entry point
│   │   ├── App.css               # Application styles
│   │   ├── index.css             # Global styles
│   │   └── assets/               # Static assets
│   ├── public/                   # Public static files
│   ├── index.html                # HTML entry point
│   ├── vite.config.js            # Vite configuration
│   ├── .env.example              # Environment variables template
│   ├── vercel.json               # Vercel deployment configuration
│   ├── package.json              # Frontend dependencies
│   └── node_modules/             # Installed packages
│
└── README.md                      # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** - [Download here](https://nodejs.org)
- **npm 9+** - Installed with Node.js
- **MongoDB** - [Atlas free tier](https://www.mongodb.com/cloud/atlas) (recommended) or local installation
- **Git** - For cloning the repository

### Installation & Setup

#### Step 1: Clone the Repository
```bash
git clone https://github.com/RDT556/mern_stack_web.git
cd mern_stack_web
```

#### Step 2: Setup Backend
```bash
cd backend

# Copy environment template and configure
cp .env.example .env

# Edit .env file and add:
# MONGODB_URI=your_mongodb_connection_string
# ALLOWED_ORIGIN=http://localhost:5173
# NODE_ENV=development

# Install dependencies
npm install

# Start development server (with auto-reload)
npm run dev
# Server runs on http://localhost:5000
```

#### Step 3: Setup Frontend (in a new terminal)
```bash
cd frontend

# Copy environment template and configure
cp .env.example .env.local

# Edit .env.local file and add:
# VITE_API_URL=http://localhost:5000/api

# Install dependencies
npm install

# Start development server
npm run dev
# App runs on http://localhost:5173
```

#### Step 4: Verify Everything Works
1. Open browser and go to `http://localhost:5173`
2. Create a new task
3. Check that task appears in list
4. Toggle task completion
5. Delete a task

---

## 💻 Frontend Components

The React frontend is built with a component-driven architecture for reusability and maintainability.

### **App.jsx** - Main Application Component
- **Purpose**: Container component managing application state and API communication
- **State**: 
  - `tasks` - Array of task objects from MongoDB
  - `loading` - Boolean indicating data fetch status
  - `error` - Error message string if operation fails
  - `submitting` - Boolean for form submission state
- **Key Functions**:
  - `fetchTasks()` - Retrieves all tasks from backend
  - `handleCreateTask(taskData)` - Creates new task
  - `handleToggleTask(task)` - Marks task as complete/incomplete
  - `handleDeleteTask(id)` - Removes task from database
- **Lifecycle**: Uses `useEffect` hook to fetch tasks on mount
- **Error Handling**: Displays error banners for failed operations

### **TaskForm.jsx** - New Task Creation Component
- **Purpose**: Form component for creating new tasks
- **Props**:
  - `onSubmit` - Callback function when form is submitted
  - `submitting` - Boolean to disable form during submission
- **Features**:
  - Accepts task title (required) and description (optional)
  - Form validation before submission
  - Loading state while submitting
  - Success/error feedback

### **TaskItem.jsx** - Individual Task Display Component
- **Purpose**: Displays single task with actions
- **Props**:
  - `task` - Task object with _id, title, description, completed, timestamps
  - `onToggle` - Function to mark task complete/incomplete
  - `onDelete` - Function to delete task
- **Features**:
  - Visual indication of completion status (strikethrough, color change)
  - Toggle button to complete/uncomplete task
  - Delete button with confirmation
  - Displays creation and last update timestamps

### **API Service (services/api.js)**
- **Purpose**: Centralized Axios configuration and API methods
- **Configuration**:
  - Base URL from `VITE_API_URL` environment variable
  - Default headers and timeout
- **Methods**:
  - `getAllTasks()` - GET `/api/tasks`
  - `createTask(taskData)` - POST `/api/tasks`
  - `updateTask(id, updates)` - PUT `/api/tasks/:id`
  - `deleteTask(id)` - DELETE `/api/tasks/:id`

---

## 🔌 Backend Architecture

The Express backend follows REST principles with organized middleware, routes, and controllers.

### **server.js** - Application Entry Point
- **Responsibilities**:
  - Load environment variables with dotenv
  - Initialize Express application
  - Connect to MongoDB database
  - Configure middleware (CORS, JSON parsing)
  - Mount API routes
  - Error handling and 404 responses
  - Start HTTP server on specified port

### **Middleware Stack**
1. **JSON Parser** - `express.json()` - Parses incoming JSON requests
2. **CORS** - Validates origin and allows cross-origin requests
   - Production mode: Restricts to `ALLOWED_ORIGIN` environment variable
   - Development mode: Allows all origins (`*`)
   - Allowed methods: GET, POST, PUT, DELETE
3. **Error Handler** - Global error handling middleware
   - Catches errors from all routes
   - Hides stack traces in production
   - Returns consistent error JSON format

### **taskController.js** - Business Logic
- **getTasks()** - Fetches all tasks from MongoDB
- **createTask()** - Validates and saves new task
- **updateTask()** - Updates existing task (completion status, etc.)
- **deleteTask()** - Removes task from database
- All functions include error handling and response formatting

### **taskRoutes.js** - Route Definitions
```
GET    /api/tasks     - Get all tasks
POST   /api/tasks     - Create new task
PUT    /api/tasks/:id - Update task by ID
DELETE /api/tasks/:id - Delete task by ID
```

### **MongoDB Connection (config/db.js)**
- **Purpose**: Manages MongoDB connection using Mongoose
- **Features**:
  - Connection pooling
  - Error handling and retry logic
  - Graceful shutdown handling
  - Runs on application startup

---

## 📊 Data Models

### **Task Schema**
```javascript
{
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255
  },
  description: {
    type: String,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

### **Task Fields Explained**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `_id` | ObjectId | Yes (auto) | Unique MongoDB identifier |
| `title` | String | Yes | Task title/name |
| `description` | String | No | Additional task details |
| `completed` | Boolean | No | Task completion status (default: false) |
| `createdAt` | Date | No (auto) | When task was created |
| `updatedAt` | Date | No (auto) | When task was last modified |

---

## 📡 API Reference

### **Base URL**
- Development: `http://localhost:5000/api`
- Production: Set via `VITE_API_URL` environment variable

### **Get All Tasks**
```
GET /api/tasks
```
**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Build MERN app",
      "description": "Create a task management app",
      "completed": false,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### **Create Task**
```
POST /api/tasks
Content-Type: application/json

{
  "title": "Learn MongoDB",
  "description": "Complete MongoDB tutorial"
}
```
**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "title": "Learn MongoDB",
    "description": "Complete MongoDB tutorial",
    "completed": false,
    "createdAt": "2024-01-15T10:35:00.000Z",
    "updatedAt": "2024-01-15T10:35:00.000Z"
  }
}
```

### **Update Task**
```
PUT /api/tasks/:id
Content-Type: application/json

{
  "completed": true
}
```
**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Build MERN app",
    "description": "Create a task management app",
    "completed": true,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:36:00.000Z"
  }
}
```

### **Delete Task**
```
DELETE /api/tasks/:id
```
**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Build MERN app",
    "description": "Create a task management app",
    "completed": true,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:36:00.000Z"
  }
}
```

### **Error Response Format**
```json
{
  "success": false,
  "message": "Error description"
}
```

---

## 🔄 Development Workflow

### **Typical Task Creation Flow**

1. **User enters task details in TaskForm**
   - Component maintains local form state
   - Validates input on form submission

2. **Form submission triggers API call**
   - `handleCreateTask()` in App.jsx is called
   - Axios sends POST request to `/api/tasks`

3. **Backend processes request**
   - Express route receives POST
   - Controller validates request body
   - Mongoose creates new document in MongoDB
   - Controller returns created task

4. **Frontend receives response**
   - New task is added to React state
   - Component re-renders with new task
   - UI updates immediately (optimistic update)

5. **User sees new task in list**
   - Task appears at top of list
   - Form is cleared for next entry
   - Any loading indicators are hidden

### **Environment Variables**

#### Backend (.env)
```env
# MongoDB connection string
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/taskflow?retryWrites=true&w=majority

# Node environment
NODE_ENV=development

# Allowed origins for CORS (comma-separated)
ALLOWED_ORIGIN=http://localhost:5173

# Server port
PORT=5000
```

#### Frontend (.env.local)
```env
# Backend API URL
VITE_API_URL=http://localhost:5000/api
```

---

## 📦 Key Dependencies

### Backend

| Package | Version | Purpose |
|---------|---------|---------|
| express | 5.2.1 | Web framework for building REST API |
| mongoose | 9.1.5 | MongoDB ODM for schema validation and queries |
| cors | 2.8.6 | Middleware for cross-origin requests |
| dotenv | 17.2.3 | Environment variable management from .env files |
| nodemon | 3.1.11 | Auto-reload server during development |

### Frontend

| Package | Version | Purpose |
|---------|---------|---------|
| react | 19.2.0 | UI library for building components |
| vite | 7.2.4 | Fast build tool and dev server |
| axios | 1.13.2 | Promise-based HTTP client for API requests |
| react-dom | 19.2.0 | React rendering for DOM |
| eslint | 9.39.1 | Code quality and linting |

---

## 🔒 Security Features

### **CORS Configuration**
- **Production**: Only allows requests from specified `ALLOWED_ORIGIN`
- **Development**: Allows all origins for easier testing
- **Methods**: Restricted to GET, POST, PUT, DELETE
- **Credentials**: Enabled for cookie-based authentication (future feature)

### **Environment Variables**
- Sensitive data stored in `.env` files (never committed to git)
- `.gitignore` prevents accidental commits of environment files
- Different configurations for development and production

### **Error Handling**
- Stack traces hidden in production
- Generic error messages shown to clients
- Detailed error logs in development for debugging
- Graceful error recovery in frontend

### **Data Validation**
- Mongoose schema validation on backend
- Required field validation (title is mandatory)
- String trimming to prevent whitespace issues
- Frontend form validation before submission

### **HTTPS in Production**
- Vercel automatically provides SSL/TLS certificates
- All production traffic is encrypted
- CORS properly restricts traffic sources

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/RDT556/mern_stack_web.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Follow existing code style and conventions
   - Add comments for complex logic
   - Update tests if applicable

4. **Test Your Changes**
   ```bash
   # Backend
   cd backend && npm run dev

   # Frontend (in another terminal)
   cd frontend && npm run dev
   ```

5. **Commit and Push**
   ```bash
   git add .
   git commit -m "Add your feature description"
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Describe your changes clearly
   - Reference any related issues
   - Wait for review

---

## ⚡ Performance & Design

### **Frontend Performance**
- **Vite for Fast Development**: Hot module replacement (HMR) for instant updates
- **React Optimization**: Functional components with hooks for minimal re-renders
- **CSS Performance**: Optimized styling without heavy frameworks
- **Lazy Loading**: Components load only when needed

### **Backend Performance**
- **Express Middleware**: Lightweight and fast request processing
- **MongoDB Indexing**: Automatic indexes on frequently queried fields
- **Connection Pooling**: Efficient database connection management
- **Error Handling**: Fast failure paths prevent cascading issues

### **Scalability Considerations**
- **Stateless Backend**: Can run multiple server instances
- **Database Agnostic**: Can upgrade to MongoDB replica sets
- **API Design**: RESTful endpoints are simple to scale
- **Horizontal Scaling**: Both frontend and backend can scale independently

### **Design Principles**
1. **Separation of Concerns** - Frontend, backend, and database are independent
2. **RESTful Architecture** - Standard HTTP methods for clear semantics
3. **Component Reusability** - React components built to be composable
4. **Error Resilience** - Graceful error handling on both client and server
5. **Security First** - CORS, validation, and environment management built-in

---

## 📚 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Mongoose ODM](https://mongoosejs.com/)
- [Vite Guide](https://vitejs.dev/)
- [RESTful API Design](https://restfulapi.net/)

---

## 📄 License

This project is licensed under the ISC License.

---

## 🙋 Support

If you have questions or run into issues:
1. Check existing documentation in this README
2. Review the component code and comments
3. Check MongoDB and Express documentation
4. Open an issue on GitHub with detailed error information

---

**Made with ❤️ by the TaskFlow Team**

Last updated: 2024
