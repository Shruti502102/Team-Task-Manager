# Team-Task-Manager

A full-stack web application where users can create projects, assign tasks, and track progress with role-based access (Admin/Member).

---

📌 Features

🔐 Authentication

- User Signup & Login
- Secure authentication using JWT

📁 Project Management

- Create projects (creator becomes Admin)
- Add/remove team members (Admin only)
- View assigned projects

✅ Task Management

- Create tasks with title, description, due date, and priority
- Assign tasks to team members
- Update task status (To Do, In Progress, Done)

📊 Dashboard

- Total tasks
- Tasks by status
- Overdue tasks
- Tasks per user

🔒 Role-Based Access

- Admin:
  - Manage projects and team members
  - Assign and manage tasks
- Member:
  - View assigned tasks
  - Update task status

---

🛠️ Tech Stack

Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt.js (Password hashing)

Frontend

- HTML
- CSS
- JavaScript (Fetch API)

Deployment

- Railway (Backend)
- GitHub Pages / Railway (Frontend)

---

📡 API Endpoints

🔐 Auth

- "POST /api/auth/register"
- "POST /api/auth/login"

📁 Projects

- "POST /api/projects"
- "GET /api/projects"
- "PUT /api/projects/:id/add"

✅ Tasks

- "POST /api/tasks"
- "GET /api/tasks/:projectId"
- "PUT /api/tasks/:id"

📊 Dashboard

- "GET /api/dashboard"

---

⚙️ Setup Instructions

1. Clone the Repository

git clone https://github.com/YOUR_USERNAME/Team-Task-Manager.git
cd Team-Task-Manager

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a ".env" file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Run the Server

npm start

---

🌐 Live Demo

🔗 Backend URL: (Add your Railway link here)
🔗 Frontend URL: (Add your GitHub Pages link here)

---

🎥 Demo Video

📹 (Add your demo video link here)

---

📂 Project Structure

Team-Task-Manager/
│
├── models/
├── routes/
├── middleware/
├── index.js
├── package.json
└── README.md

---

💡 Future Improvements

- Better UI (React / Tailwind)
- Notifications for task deadlines
- Real-time updates (WebSockets)
- File attachments in tasks

---

👩‍💻 Author

Shruti Srivastava
B.Tech Data Science | AIML Minor

---

⭐ Note

This project is built as part of a Full-Stack Coding Assignment to demonstrate:

- Backend development
- API design
- Authentication & authorization
- Database relationships
- Deployment skills

---
