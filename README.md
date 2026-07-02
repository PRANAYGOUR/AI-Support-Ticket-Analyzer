# AI-Powered Support Ticket Analyzer

An AI-powered web application that helps customer support teams manage and analyze customer support tickets efficiently.

The application automatically categorizes incoming support tickets, assigns a priority level, generates a concise summary using Google's Gemini AI, and stores the ticket in a MySQL database.

---

## Features

- Create a new support ticket
- View all submitted tickets
- View detailed information for a specific ticket
- AI-powered ticket categorization
- AI-generated ticket priority
- AI-generated ticket summary
- Persistent storage using MySQL
- RESTful API architecture

---

## Tech Stack

### Frontend
- React (Vite)
- CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js

### Database
- MySQL

### AI
- Google Gemini API (gemini-2.5-flash)

---

## Project Structure

```
AI-Support-Ticket-Analyzer
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── server.js
│   └── .env
│
└── frontend
    ├── components
    ├── pages
    ├── services
    ├── styles
    └── App.jsx
```

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

---

## Backend Setup

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=ai_support_ticket

GEMINI_API_KEY=your_gemini_api_key
```

Start the backend

```bash
npm run dev
```

---

## Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run the application

```bash
npm run dev
```

---

## Database

Create the database

```sql
CREATE DATABASE ai_support_ticket;
```

Create the table

```sql
CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    issue TEXT NOT NULL,
    category VARCHAR(50),
    priority VARCHAR(20),
    summary TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## API Endpoints

### Create Ticket

```
POST /api/tickets
```

Request

```json
{
    "customer_name":"Pranay",
    "email":"pranay@gmail.com",
    "issue":"I paid twice and still haven't received a refund."
}
```

---

### Get All Tickets

```
GET /api/tickets
```

---

### Get Ticket By ID

```
GET /api/tickets/:id
```

---

## AI Workflow

1. User submits a support ticket.
2. Backend receives the request.
3. Gemini AI analyzes the issue.
4. AI returns:
   - Category
   - Priority
   - Summary
5. Backend stores the ticket in MySQL.
6. Ticket is returned to the frontend.

---

## Future Improvements

- Authentication
- Ticket Search
- Filtering & Sorting
- Dashboard Analytics
- Email Notifications
- Admin Panel

---

## Author

Pranay Gour