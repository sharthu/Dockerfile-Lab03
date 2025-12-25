Testing Connection between Frontend and Backend

cd backend
docker build -t simple-backend .
docker run -d -p 3000:3000 simple-backend


cd frontend
docker build -t simple-frontend .
docker run -d -p 8080:80 simple-frontend


UAT

Frontend	http://localhost:8080
Backend API	http://localhost:3000/api

Click "Call Backend" 
