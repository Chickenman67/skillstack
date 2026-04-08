# 🧠 FULL-STACK LESSON PLAN (DETAILED, GUIDED, BUILDING ONE REAL APP)

## Project: **SkillStack — Personal Skill Tracking Web App**

---

# 🎯 FINAL OUTCOME (What you are building toward)

A deployed full-stack app where:

* Users create accounts and log in
* Users create/edit/delete skills
* Each skill has:

  * name
  * progress (0–100)
  * notes
  * last updated timestamp
* Data is stored in a database
* Users only see their own data
* App is live on the internet

---

# 📁 FINAL FOLDER STRUCTURE (You will gradually build this)

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
├── package.json
└── README.md
```

---

# 🧭 SKILL PROGRESSION (Track yourself)

### After Phase 1:

* You can structure and style a real UI

### After Phase 2:

* You understand JavaScript interaction and state

### After Phase 3:

* You understand how frontend connects to backend

### After Phase 4:

* You understand databases and authentication

### After Phase 5:

* You can deploy real applications

---

# 🧰 TOOLS + WHEN TO USE THEM

* Visual Studio Code → always (main coding)
* Live Server → Phase 1–2 (run frontend)
* Node.js → Phase 3+ (run backend)
* Express → Phase 3+ (build API)
* Postman → Phase 3–4 (test endpoints)
* MongoDB → Phase 4+ (store data)
* Git → start Phase 1 (track progress)
* GitHub → start Phase 2 (save project)
* Vercel → Phase 5 (deploy frontend)
* Render → Phase 5 (deploy backend)

---

# 🧩 PHASE 1 — UI STRUCTURE (FOUNDATION)

---

## 🔹 Lesson 1 — Build Layout (No JS Yet)

### 🎯 Goal

Create the full layout of the app before adding logic.

---

### ✅ Tasks (DO ALL)

1. Create `client/index.html`
2. Build:

   * Navbar:

     * Title: SkillStack
     * Buttons: Dashboard, Add Skill
   * Main section:

     * Empty `<div id="skills-container">`
   * Form:

     * Input: skill name
     * Input: progress (number)
     * Textarea: notes
     * Submit button

---

### ❗ Requirements

* Use semantic HTML (`<nav>`, `<section>`, `<form>`)
* No inline CSS
* Organized structure (indentation matters)

---

### 📚 Learn While Doing

* HTML forms
* Input types
* Page structure

---

### 🧰 Tools Used

* Visual Studio Code
* Live Server

---

### 🧠 Why This Matters

You are defining the **structure all future logic depends on**.

---

---

## 🔹 Lesson 2 — Styling + Skill Cards

### 🎯 Goal

Turn raw HTML into a usable UI

---

### ✅ Tasks

1. Create `styles/main.css`
2. Style:

   * Navbar (horizontal layout)
   * Buttons (hover effects)
   * Form spacing
3. Create a **Skill Card design**:

   * Title
   * Progress bar (div with width %)
   * Notes
   * Delete button

---

### ❗ Requirements

* Use Flexbox or Grid
* Cards must look consistent
* Progress bar must visually reflect %

---

### 📚 Learn

* Flexbox (`display: flex`)
* Margin vs padding
* Reusable CSS classes

---

### 🧰 Tools Used

* Visual Studio Code

---

### 🧠 Why This Matters

You are learning how **data will eventually be displayed**

---

---

# 🧩 PHASE 2 — JAVASCRIPT (INTERACTION)

---

## 🔹 Lesson 3 — Add Skills Dynamically

### 🎯 Goal

Make form actually create skills

---

### ✅ Tasks

1. Create `scripts/app.js`
2. Add event listener to form:

   * Prevent default refresh
   * Get input values
3. Create function:

   * `createSkillCard(skill)`
4. Append card to `#skills-container`

---

### ❗ Requirements

* No page refresh
* Skills appear instantly
* Clear input after submit

---

### 📚 Learn

* `addEventListener`
* DOM manipulation
* Functions

---

### 🧰 Tools Used

* Visual Studio Code
* Browser DevTools (console)

---

### 🧠 Why This Matters

This connects **user input → visible result**

---

---

## 🔹 Lesson 4 — Delete + Update Skills

### 🎯 Goal

Full CRUD (without persistence yet)

---

### ✅ Tasks

* Add delete button → removes card
* Add “update progress” input/button

---

### ❗ Requirements

* Each card must have unique behavior
* No global hacks (use proper event handling)

---

### 📚 Learn

* Event delegation
* Handling dynamic elements

---

### 🧠 Why This Matters

You are implementing **core app behavior**

---

---

## 🔹 Lesson 5 — Local Storage (Persistence)

### 🎯 Goal

Save data after refresh

---

### ✅ Tasks

1. Create array: `skills = []`
2. On add/delete/update:

   * Update array
   * Save to localStorage
3. On page load:

   * Load and render skills

---

### ❗ Requirements

* No data loss on refresh
* UI always reflects stored data

---

### 📚 Learn

* JSON
* localStorage

---

### 🧰 Tools Used

* Browser DevTools → Application tab

---

### 🧠 Why This Matters

You now understand **state + persistence**

---

---

## 🔹 Lesson 6 — Code Organization

### 🎯 Goal

Make code scalable

---

### ✅ Tasks

Split files:

* `ui.js` → rendering
* `storage.js` → localStorage logic
* `app.js` → event handling

---

### ❗ Requirements

* No duplicated code
* Clear responsibilities

---

### 🧠 Why This Matters

Messy code will break later when backend is added

---

---

# 🧩 PHASE 3 — BACKEND

---

## 🔹 Lesson 7 — Setup Server

### 🎯 Goal

Create backend

---

### ✅ Tasks

1. Initialize project:

   ```
   npm init -y
   ```
2. Install:

   ```
   npm install express
   ```
3. Create `server/server.js`
4. Run server:

   ```
   node server.js
   ```

---

### 📚 Learn

* What a server is
* Express basics

---

### 🧰 Tools Used

* Node.js
* Express

---

---

## 🔹 Lesson 8 — Build API

### 🎯 Goal

Replace frontend logic with backend

---

### ✅ Tasks

Create routes:

* GET /skills
* POST /skills
* DELETE /skills/:id

---

### ❗ Requirements

* Return JSON
* Handle errors

---

### 📚 Learn

* REST APIs
* Request/response

---

### 🧰 Tools Used

* Postman

---

---

## 🔹 Lesson 9 — Connect Frontend to API

### 🎯 Goal

Remove localStorage

---

### ✅ Tasks

* Replace storage calls with `fetch`
* Use async/await
* Load skills from server

---

### ❗ Requirements

* No localStorage usage
* Data fully from backend

---

### 📚 Learn

* async/await
* fetch API

---

### 🧠 Why This Matters

This is the **core full-stack connection**

---

---

# 🧩 PHASE 4 — DATABASE + AUTH

---

## 🔹 Lesson 10 — MongoDB Integration

### 🎯 Goal

Persistent backend storage

---

### ✅ Tasks

* Connect database
* Create Skill model
* Save/retrieve skills

---

### 🧰 Tools Used

* MongoDB

---

---

## 🔹 Lesson 11 — Authentication

### 🎯 Goal

User system

---

### ✅ Tasks

* Signup/login routes
* Hash passwords
* Store users

---

### 📚 Learn

* bcrypt
* auth flow

---

---

## 🔹 Lesson 12 — Protected Routes

### 🎯 Goal

User-specific data

---

### ✅ Tasks

* Only logged-in users access skills
* Attach user ID to skills

---

---

# 🧩 PHASE 5 — DEPLOYMENT

---

## 🔹 Lesson 13 — Deploy App

### 🎯 Goal

Make app live

---

### 🧰 Tools Used

* Vercel
* Render

---

### ✅ Tasks

* Deploy frontend
* Deploy backend
* Connect to cloud DB

---

---

# 📍 FINAL RESULT

You will have:

* A real full-stack app
* Structured codebase
* API + database + auth
* Deployment experience

And more importantly:

* You understand **why every part exists and how they connect**
