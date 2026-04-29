# Docker Containerization of Multi-Tier Application

## 📌 Project Overview
This project demonstrates how to build and run a **Multi-Tier Web Application** using **Docker** and **Docker Compose**.

The application is divided into 3 separate containers:

- **Frontend** → HTML, CSS, JavaScript served using Nginx  
- **Backend** → Node.js + Express API  
- **Database** → MySQL  

All services communicate with each other using Docker Compose networking.

---

## 🏗️ Architecture

Frontend → Backend API → MySQL Database

- Frontend runs on browser
- Backend handles API requests
- MySQL stores database data

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
│── docker-compose.yml
│── .gitignore
│── README.md

---

## 🚀 Features

✅ Frontend containerized using Nginx  
✅ Backend API containerized using Node.js  
✅ MySQL database containerized  
✅ Docker Compose used for orchestration  
✅ Port mapping configured  
✅ Service-to-service communication enabled  
✅ Easy local deployment with one command  

---

## ⚙️ Setup & Run Project

### 1️⃣ Clone Repository

```bash
git clone <repository-url>
cd multi-tier-app
