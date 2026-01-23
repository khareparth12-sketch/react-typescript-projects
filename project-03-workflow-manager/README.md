# Task Workflow Manager Dashboard

## Overview
A dashboard-style task management application built using **React + TypeScript** to simulate real-world frontend workflows.

This project focuses on **state management, component architecture, derived state, and UI structure**, rather than backend complexity. It represents the transition from beginner React concepts to intermediate, production-style thinking.

---

## Features
- Add tasks with title and priority
- Update task status (Todo → In Progress → Done)
- Delete tasks
- Filter tasks by status
- Sort tasks by priority
- Persist tasks using `localStorage`
- Dark-themed dashboard UI

---

## Concepts Practiced

### React
- Controlled form inputs
- Lifting state up
- Centralized state management
- Immutable state updates
- Derived state (filtering & sorting)
- Component responsibility and data flow
- Side effects with `useEffect`

### TypeScript
- Strongly typed state and props
- Union types for task status and priority
- `import type` usage
- Interface-driven data modeling

### Frontend Architecture
- Separation of logic and presentation
- Reusable, focused components
- Dashboard-style layout structure
- Avoiding duplicate sources of truth

---

## Tech Stack
- React
- TypeScript
- Vite
- CSS (custom styling, no UI libraries)

---

## Project Structure
src/
├── components/
│ ├── TaskForm.tsx
│ ├── TaskList.tsx
│ └── TaskItem.tsx
├── types/
│ └── task.ts
├── App.tsx
├── main.tsx
└── index.css


---

## How to Run Locally
```bash
npm install
npm run dev
