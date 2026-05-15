# Quick Start Deployment Guide

This guide will help you deploy the MERN Task Manager to production quickly.

## TL;DR - Fastest Deployment (Vercel)

### Prerequisites
- Vercel account (free)
- MongoDB Atlas account (free cluster available)
- GitHub account with this repo

### Steps

1. **Get MongoDB Connection String**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a cluster (free tier available)
   - Create a database user
   - Copy connection string: `mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority`

2. **Deploy Frontend to Vercel**
   ```bash
   # In Vercel dashboard:
   # 1. Click "Add New..." → "Project"
   # 2. Import this GitHub repo
   # 3. Select "frontend" folder as root
   # 4. Add Environment Variable:
   #    VITE_API_URL=https://your-backend-url.vercel.app/api
   # 5. Deploy
   ```

3. **Deploy Backend to Vercel**
   ```bash
   # In Vercel dashboard:
   # 1. Click "Add New..." → "Project"
   # 2. Import this GitHub repo again
   # 3. Select "backend" folder as root
   # 4. Add Environment Variables:
   #    MONGODB_URI=your_mongodb_connection_string
   #    PORT=3001
   #    CLIENT_URL=https://your-frontend.vercel.app
   # 5. Deploy
   ```

4. **Update CORS**
   - Go back to backend project settings
   - Update `CLIENT_URL` with your deployed frontend URL
   - Redeploy

5. **Test**
   - Visit your frontend URL
   - Try creating, updating, and deleting tasks

## Alternative: Docker Deployment

### Local Docker Development
```bash
# Install Docker and Docker Compose
# Then run:
docker-compose up
```

### Deploy Docker Container
```bash
# Build image
docker build -t mern-task-manager .

# Push to Docker registry (Docker Hub, ECR, etc.)
# Then deploy to your hosting service (AWS, DigitalOcean, Heroku, etc.)
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Cannot find module" | Run `npm install` in the folder where error occurs |
| CORS error | Check `CLIENT_URL` in backend environment variables |
| Cannot connect to MongoDB | Verify connection string and that cluster is running |
| Frontend can't reach API | Check `VITE_API_URL` matches deployed backend URL |
| Build fails | Ensure both frontend and backend build scripts work locally |

## Environment Variables Reference

### Backend (.env or Vercel)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
PORT=3001
CLIENT_URL=https://your-frontend.vercel.app
NODE_ENV=production
```

### Frontend (.env or Vercel)
```
VITE_API_URL=https://your-backend.vercel.app/api
```

## Next Steps After Deployment

- [ ] Set up custom domain
- [ ] Enable HTTPS
- [ ] Configure monitoring/logging
- [ ] Set up database backups
- [ ] Add authentication if needed
- [ ] Performance optimization

For detailed guidance, see [DEPLOYMENT.md](./DEPLOYMENT.md)
