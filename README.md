# 🧠 SkillStack - Personal Skill Tracking Web App

A full-stack web application for tracking your personal skills and learning progress. Built with **HTML, CSS, JavaScript** (frontend) and **Node.js + Express** (backend).

---

## 📋 Project Overview

**What it does:**
- Users create and track personal skills
- Each skill has: name, progress (0-100%), and notes
- Data persists in localStorage (Phase 1-2) and backend (Phase 3+)
- Professional UI with real-time updates

**Current Phase:** Phase 1-3 ✅ (UI + JavaScript + Basic Backend)

---

## 🗂️ Project Structure

```
skillstack/
├── client/                          # Frontend (Phases 1-2)
│   ├── index.html                  # HTML structure
│   ├── styles/
│   │   └── main.css                # Styling
│   ├── scripts/
│   │   ├── app.js                  # Main logic & events
│   │   ├── ui.js                   # Rendering functions
│   │   └── storage.js              # localStorage management
│   └── assets/                     # Images, icons (future)
│
├── server/                          # Backend (Phases 3-4)
│   ├── server.js                   # Main server entry point
│   ├── routes/
│   │   └── skills.js               # API routes
│   ├── controllers/
│   │   └── skillsController.js     # Business logic
│   ├── models/
│   │   └── Skill.js                # Data model
│   ├── middleware/
│   │   └── auth.js                 # Auth (Phase 4)
│   └── config/
│       └── db.js                   # Database config (Phase 4)
│
├── .env                            # Environment variables
├── package.json                    # Dependencies
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+) and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Visual Studio Code (recommended)

### Quick Start

#### 1️⃣ **Frontend Only (Phase 1-2)**

No server needed! Use Live Server:

1. Open `client/index.html` in your browser
2. Or use VS Code Live Server extension:
   - Right-click `index.html` → "Open with Live Server"

**Features available:**
- ✅ Add skills with name, progress, notes
- ✅ View all skills as cards
- ✅ Update progress on existing skills
- ✅ Delete skills
- ✅ Data persists in browser (localStorage)

---

#### 2️⃣ **Full Stack (Phase 3+)**

Set up backend API:

```bash
# Install dependencies
npm install

# Start server
npm start

# Server runs on http://localhost:3000
```

**API Endpoints:**
```
GET    /api/skills           → Get all skills
POST   /api/skills           → Create skill
GET    /api/skills/:id       → Get one skill
PUT    /api/skills/:id       → Update skill
DELETE /api/skills/:id       → Delete skill
GET    /api/health           → Health check
```

**Test API with curl:**
```bash
# Get all skills
curl http://localhost:3000/api/skills

# Create a skill
curl -X POST http://localhost:3000/api/skills \
  -H "Content-Type: application/json" \
  -d '{"name":"JavaScript","progress":75,"notes":"Learning async/await"}'
```

---

## 📚 Features by Phase

### ✅ Phase 1: UI Structure
- [x] HTML semantic structure
- [x] Navbar with navigation
- [x] Skill form with inputs
- [x] Skills container for cards

### ✅ Phase 2: JavaScript & Interaction
- [x] Add skills dynamically
- [x] Delete skills
- [x] Update progress
- [x] Real-time UI updates
- [x] localStorage persistence
- [x] Code organized (app.js, ui.js, storage.js)

### ✅ Phase 3: Backend API
- [x] Express server setup
- [x] REST API endpoints
- [x] In-memory data storage
- [x] Request validation
- [x] Error handling

### 🔲 Phase 4: Database & Auth (Next)
- [ ] MongoDB integration
- [ ] User authentication
- [ ] Password hashing
- [ ] User-specific skills
- [ ] JWT tokens

### 🔲 Phase 5: Deployment (Later)
- [ ] Deploy frontend (Vercel)
- [ ] Deploy backend (Render)
- [ ] Domain setup
- [ ] SSL certificates

---

## 🎯 Code Architecture

### **app.js** - Event Handling
```javascript
// Entry point
initApp()                    // Initialize on page load
setupEventListeners()        // Attach event handlers

// Handlers
handleFormSubmit()           // Form submission
handleCardButtonClick()      // Delete/Update buttons
handleDeleteSkill()          // Delete logic
handleEditSkill()            // Edit logic
```

### **ui.js** - Rendering
```javascript
createSkillCard()            // Create card DOM
renderSkills()               // Render all skills
showForm() / hideForm()      // Toggle form
populateFormForEdit()        // Fill form for editing
getFormValues()              // Get form inputs
```

### **storage.js** - Data Persistence
```javascript
loadSkills()                 // Read from localStorage
saveSkills()                 // Write to localStorage
addSkill()                   // Create new
deleteSkill()                // Remove
updateSkill()                // Modify existing
```

---

## 💾 Data Model

```javascript
{
  id: 1234567890,           // Unique timestamp ID
  name: "JavaScript",       // Skill name
  progress: 75,             // 0-100
  notes: "Learning async",  // Optional notes
  createdAt: "2024-01-15T10:30:00.000Z",
  updatedAt: "2024-01-15T14:45:00.000Z"
}
```

---

## 🧪 Testing

### Manual Testing
1. Open app in browser
2. Click "Add Skill"
3. Fill form: Name, Progress (0-100), Notes
4. Click "Add Skill" button
5. Verify card appears
6. Click "Update" to edit
7. Click "Delete" to remove
8. Refresh page - data persists

### Test API (Phase 3+)
```bash
# In Terminal:
npm start

# In Another Terminal or Postman:
curl -X POST http://localhost:3000/api/skills \
  -H "Content-Type: application/json" \
  -d '{"name":"React","progress":60,"notes":"Learning hooks"}'
```

---

## 🛠️ Development

### Using Nodemon (Auto-restart on changes)
```bash
npm run dev
```

### Browser DevTools
- **Application Tab** → localStorage to see persisted data
- **Console** → Log messages for debugging
- **Network Tab** → See API requests (Phase 3+)

---

## 📝 Common Tasks

### Add a new field to skills
1. Update HTML form in `index.html`
2. Update `getFormValues()` in `ui.js`
3. Update `createSkillCard()` in `ui.js`
4. Update Skill model in `server/models/Skill.js`

### Style changes
- Edit `client/styles/main.css`
- Browser auto-refreshes with Live Server

### Add new API route
1. Create handler in `server/controllers/skillsController.js`
2. Add route in `server/routes/skills.js`
3. Test with curl

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Page is blank | Check browser console for errors (F12) |
| Data disappears on refresh | localStorage might be disabled, check browser settings |
| Cannot connect to server | Make sure `npm start` is running and port 3000 is available |
| CORS errors | Already handled with `cors` middleware |
| Form doesn't submit | Check form inputs - name and progress are required |

---

## 🎓 Learning Path

1. **Understand HTML** - Review `index.html` structure
2. **Learn CSS** - Study Flexbox layout in `main.css`
3. **Master JavaScript** - Trace through `app.js` → `ui.js` → `storage.js`
4. **Event Handling** - See `addEventListener()` in app.js
5. **DOM Manipulation** - `createElement()`, `appendChild()` in ui.js
6. **localStorage** - `getItem()`, `setItem()` in storage.js
7. **Express Basics** - Review `server.js` endpoints
8. **RESTful APIs** - Study `/api/skills` routes

---

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [Express.js Guide](https://expressjs.com/)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [REST API Design](https://restfulapi.net/)

---

## 🚢 Next Steps

- **Phase 4:** Add MongoDB database and user authentication
- **Phase 5:** Deploy to production
- **Features:** Analytics, goals, skill categories, team sharing

---

## 📄 License

MIT - Feel free to use and modify!

---

## 🤝 Contributing

Found a bug or have suggestions? Open an issue or submit a pull request!

---

**Built with ❤️ for learning full-stack development**

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
