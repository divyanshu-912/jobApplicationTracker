# JobTrack: Job Application Tracker

A simple, responsive web app to keep track of job applications. Built with React and plain CSS. All data is saved in the browser using localStorage, so records remain after a page refresh.

**Live Demo:** (https://effortless-empanada-e82015.netlify.app)

## Features

- Add a job application with company name, job role, application date and status
- View all applications in a clean table
- Edit and delete applications
- Filter applications by status (Applied, Interview, Offer, Rejected)
- Search by company name or job role
- Dashboard showing total applications and interview count
- Data saved in localStorage (persists after refresh)
- Responsive layout with labelled form fields and keyboard focus styles

## Tech Stack

- React.js
- JavaScript (ES6)
- HTML / JSX
- CSS (plain, no libraries)
- localStorage
- Vite

## Project Structure

```
src/
  components/
    JobForm.jsx   # Add / edit form
    JobList.jsx   # Table of applications
  App.jsx         # Main component: state, filter, search, localStorage
  App.css         # All styles
  main.jsx        # Entry point
```

## How to Run Locally

Make sure [Node.js](https://nodejs.org) is installed.

```bash
git clone https://github.com/divyanshu-912/jobApplicationTracker.git
cd jobApplicationTracker
npm install
npm run dev
```

Open the link shown in the terminal (usually http://localhost:5173).

To create a production build:

```bash
npm run build
```

## How It Works

- `useState` stores the jobs list, search text, status filter and the job being edited.
- `useEffect` saves the jobs to localStorage whenever they change.
- Jobs are loaded from localStorage when the app starts.
- The filtered list and the counts are calculated from the jobs array on every render.
- `JobForm` and `JobList` receive data and functions from `App` through props.

## Note

Data is stored only in your own browser. It is not shared between devices or browsers, and clearing site data will remove it.

## Author

Divyanshu
GitHub: [@divyanshu-912](https://github.com/divyanshu-912)
