# Deployment Guide

This guide explains how to deploy the MERN Task Manager application to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. A [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas) with a running cluster
3. A GitHub repository with this code pushed
4. Node.js 18+ installed locally

## Step 1: Prepare Environment Variables

### MongoDB Setup (Required)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster or use an existing one
3. Create a database user with read/write permissions
4. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority`
5. Test the connection string locally before deploying

### Local Environment Setup

1. Create `.env` files for local development:

**backend/.env:**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
PORT=5000
CLIENT_URL=http://localhost:3000,http://localhost:5173
```

**frontend/.env:**
```
VITE_API_URL=http://localhost:5000/api
```

2. Install dependencies and test locally:
```bash
npm run install-all
npm run dev
```

## Step 2: Deploy to Vercel

### Option A: Deploy Frontend Only (Recommended for Separate Services)

If you want to deploy the frontend and backend separately:

#### Frontend Deployment

1. Go to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select the `frontend` folder as the root directory
5. Add environment variables:
   - `VITE_API_URL`: Your deployed backend URL (e.g., `https://api-backend.vercel.app/api`)
6. Deploy

#### Backend Deployment

1. In Vercel, create another project
2. Import your GitHub repository
3. Select the `backend` folder as the root directory
4. Add environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: 3001 (or any available port)
   - `CLIENT_URL`: Your deployed frontend URL (e.g., `https://frontend-app.vercel.app`)
5. Add a build command: `npm install`
6. Deploy

### Option B: Deploy as Monorepo (Experimental)

If you want to deploy as a single monorepo on Vercel:

1. Go to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Settings:
   - Framework: "Vite"
   - Root Directory: "./" or leave empty
   - Build Command: `npm run build`
   - Output Directory: `frontend/dist`
   - Environment Variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `PORT`: 3001
     - `CLIENT_URL`: Your Vercel domain
     - `VITE_API_URL`: `https://your-vercel-domain.vercel.app/api`
5. Deploy

## Step 3: Configure GitHub Actions (Optional)

To enable automatic deployment on every push to `main`:

1. In your GitHub repository, go to Settings → Secrets and Variables → Actions
2. Add these secrets:
   - `VERCEL_TOKEN`: Get from [Vercel Settings → Tokens](https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID`: Found in Vercel project settings
   - `VERCEL_PROJECT_ID`: Found in Vercel project settings
   - `VITE_API_URL`: Your deployed backend API URL
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: Backend port (e.g., 3001)
   - `CLIENT_URL`: Your deployed frontend URL

The workflow in `.github/workflows/deploy.yml` will automatically run on push to main.

## Step 4: Update CORS Settings

After deployment, update the CORS configuration:

### Backend

Set the `CLIENT_URL` environment variable to your deployed frontend URL(s):
```
CLIENT_URL=https://your-frontend.vercel.app
```

Or for multiple origins:
```
CLIENT_URL=https://your-frontend.vercel.app,https://www.your-frontend.vercel.app
```

### Frontend

Set the `VITE_API_URL` environment variable to your deployed backend URL:
```
VITE_API_URL=https://your-backend.vercel.app/api
```

## Step 5: Test Deployment

1. Visit your deployed frontend URL
2. Check browser console for any API errors
3. Try creating, updating, and deleting tasks
4. Monitor Vercel logs if issues occur

## Troubleshooting

### "MONGODB_URI is not set" error

- Verify the environment variable is set in Vercel project settings
- Check that the connection string is correct
- Ensure MongoDB Atlas cluster is running and network access is allowed

### CORS errors

- Check backend `CLIENT_URL` environment variable matches your frontend domain
- Ensure the URL includes the protocol (https://)
- For multiple origins, use comma-separated values

### API calls returning 404

- Verify `VITE_API_URL` points to the correct backend URL
- Check that the backend API is running and healthy
- Visit your backend URL's `/health` endpoint to verify it's running

### Build fails

- Ensure both `frontend` and `backend` have `package.json` with proper scripts
- Verify all dependencies are listed and compatible
- Check Node.js version compatibility (18+ recommended)

## Monitoring

### Vercel Dashboard

- Monitor deployment logs
- Check performance metrics
- Review error tracking

### Backend Health Check

Visit `https://your-backend-url/health` to verify the backend is running.

## Scaling Considerations

For production use:

1. **Database**: Consider MongoDB Atlas pricing tier based on traffic
2. **Backend**: Upgrade Vercel plan if hitting rate limits
3. **Frontend**: Enable caching headers in `vercel.json`
4. **Monitoring**: Set up error tracking (Sentry, etc.)
5. **Logging**: Consider centralized logging service

## Next Steps

- Set up a custom domain for both frontend and backend
- Configure SSL/TLS certificates
- Set up monitoring and alerting
- Implement API rate limiting
- Add authentication and authorization if needed
