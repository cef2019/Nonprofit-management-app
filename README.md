# Nonprofit Management App

## Modules
- Finance
- HR
- Supply Chain
- Project Management

## Features
- Modular full-stack app (React + Express)
- JWT Authentication (login/register)
- MongoDB for data
- Docker Compose for easy deployment
- Ready for Vercel/Heroku/Render

## Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/cef2019/nonprofit-management-app.git
cd nonprofit-management-app
```

#### Backend
```bash
cd backend
npm install
npm start
```
Set up a MongoDB server (`MONGO_URI`).

#### Frontend
```bash
cd frontend
npm install
npm start
```

### 2. Docker Compose

```bash
docker-compose up --build
```

## Usage

- Register/login in the app.
- Add/view items in Finance, HR, Supply Chain, and Project modules.

## Deployment

- **Frontend:** Vercel or Netlify (just `/frontend`)
- **Backend:** Heroku, Render, or Docker (just `/backend`)
- **Full stack:** Docker Compose (`docker-compose up --build`)

## Customization

- Extend modules in `/backend/models` and `/frontend/src/modules`.
- Add authentication features (password hashing, roles, etc.).
- Secure API endpoints for production.

## License
MIT
