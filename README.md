# SkillStack — Personal Skill Tracking Web App

A full-stack web application where users can create accounts, track their skills, and monitor progress over time.

## 🎯 Features

- **User Authentication**: Secure signup and login system
- **Skill Management**: Create, edit, and delete skills
- **Progress Tracking**: Monitor skill progress from 0-100%
- **Personal Notes**: Add notes to each skill
- **Timestamps**: Track when skills were last updated
- **User Privacy**: Each user only sees their own data
- **Persistent Storage**: All data saved in database

## 🛠️ Tech Stack

### Frontend
- HTML5 (Semantic markup)
- CSS3 (Flexbox/Grid)
- Vanilla JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- MongoDB (Database)

### Authentication
- bcrypt (Password hashing)
- JWT (Session management)

### Deployment
- Vercel (Frontend)
- Render (Backend)

## 📁 Project Structure

```
skillstack/
│
├── client/
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   ├── scripts/
│   │   ├── app.js
│   │   ├── ui.js
│   │   └── storage.js
│   └── assets/
│
├── server/
│   ├── server.js
│   ├── routes/
│   │   └── skills.js
│   ├── controllers/
│   │   └── skillsController.js
│   ├── models/
│   │   └── Skill.js
│   ├── middleware/
│   │   └── auth.js
│   └── config/
│       └── db.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (local or cloud)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd skillstack
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with your configuration:
   ```
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## 📚 Learning Phases

### Phase 1: UI Structure
- Build semantic HTML layout
- Style with CSS (Flexbox/Grid)
- Create responsive skill card design

### Phase 2: JavaScript Interaction
- Add dynamic skill creation
- Implement delete and update functionality
- Use local storage for persistence

### Phase 3: Backend Development
- Setup Express server
- Build REST API endpoints
- Replace frontend storage with backend calls

### Phase 4: Database & Authentication
- Integrate MongoDB
- Implement user authentication
- Create protected routes
- Link skills to user accounts

### Phase 5: Deployment
- Deploy frontend to Vercel
- Deploy backend to Render
- Connect to cloud database

## 🔌 API Endpoints

### Skills
- `GET /api/skills` - Get all user skills
- `POST /api/skills` - Create new skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

## 💡 Key Learnings

After completing this project, you will understand:
- How to structure a full-stack application
- Frontend-backend communication via APIs
- Database design and relationships
- User authentication and security
- Deployment and DevOps basics

## 📝 License

This project is open source and available under the MIT License.
