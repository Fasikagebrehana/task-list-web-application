# Task List App

A simple and intuitive task management application built with **React** and **pure CSS**. This app allows users to:

- **Sign up** and **log in** to their accounts.
- **Add**, **complete**, and **delete** tasks.
- **Filter tasks** by "All", "Completed", or "Pending".
- **Persist tasks** in local storage, so they are not lost on page refresh.

The app features a clean and responsive user interface with subtle animations for a modern user experience.

## Features

- **User Authentication**:
  - Sign up and log in with a username and password.
  - Each user has their own task list stored in local storage.

- **Task Management**:
  - Add new tasks with a simple input form.
  - Mark tasks as completed or undo completion.
  - Delete tasks with a single click.
  - Filter tasks to view "All", "Completed", or "Pending" tasks.

- **Animations**:
  - Fade-in animations for task items and forms.
  - Slide-in animation for the navbar.
  - Button hover effects for a dynamic feel.

---

## Technologies Used

- **Frontend**:
  - React (for building the user interface)
  - React Router (for navigation)
  - Context API (for state management)
  - Pure CSS (for styling and animations)

- **Storage**:
  - Local Storage (for persisting user data and tasks)

---

## How to Run the Project Locally

Follow these steps to run the project on your local machine:

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Fasikagebrehana/task-list-web-application.git
2. Navigate to the project directory:

```bash
  cd task-list-app
```
Install dependencies:

bash
```
  npm install
```
Start the development server:

bash
```
  npm start
```

Open the app in your browser:

The app will automatically open in your default browser at http://localhost:3000.

If it doesn't, manually navigate to the URL.

Project Structure

    task-list-app/
    ├── public/
    │   ├── index.html
    ├── src/
    │   ├── components/
    │   │   ├── TaskItem.jsx
    │   │   ├── TaskList.jsx
    │   │   ├── TaskForm.jsx
    │   │   ├── FilterButtons.jsx
    │   │   ├── AuthForm.jsx
    │   │   └── Navbar.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   └── Signup.jsx
    │   ├── context/
    │   │   ├── AuthContext.jsx
    │   │   └── TaskContext.jsx
    │   ├── styles/
    │   │   ├── index.css (global styles)
    │   │   ├── Navbar.css
    │   │   ├── TaskList.css
    │   │   ├── AuthForm.css
    │   │   └── FilterButtons.css
    │   ├── App.jsx
    │   ├── index.js
    └── README.md
Additional Features (Optional)
  Dark Mode: Add a toggle for dark and light themes.

  Drag-and-Drop: Allow users to reorder tasks by dragging and dropping.

  Due Dates: Add due dates and priorities to tasks.

License
This project is open-source and available under the MIT License.

Contact
For questions or feedback, feel free to reach out:

Email: fasikagebrehana1@gmail.com

GitHub: Fasikagebrehana

