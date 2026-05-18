# Docker Containerization of Multi-Tier Application

## 📌 Project Overview
This project demonstrates a containerized multi-tier web application using Docker, Docker Compose, GitHub Actions CI workflow, and AWS EC2 deployment.

The application contains:

- Frontend → HTML, CSS, JavaScript with Nginx
- Backend → Node.js + Express API
- Database → MySQL

All services communicate using Docker Compose networking and are deployed on AWS EC2.

---

## 🏗️ Architecture

Frontend → Backend API → MySQL Database

---

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MySQL
- Docker
- Docker Compose
- GitHub Actions
- AWS EC2
- Nginx

---

## 📂 Project Structure

multi-tier-app/
│── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── Dockerfile
│
│── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
│── .github/
│   └── workflows/
│       └── docker.yml
│
│── docker-compose.yml
│── .gitignore
│── README.md

---

## 🚀 Features

✅ Frontend containerized using Nginx  
✅ Backend API containerized using Node.js  
✅ MySQL database containerized  
✅ Docker Compose orchestration  
✅ Container networking configured  
✅ Port mapping enabled  
✅ GitHub Actions CI workflow automation  
✅ AWS EC2 cloud deployment  
✅ Public browser access using EC2 public IP  

---

## ⚙️ Setup & Run Project

### Clone Repository

```bash
git clone <repository-url>
cd Docker-Multi-Tier-Application
