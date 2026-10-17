import { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingJob, setEditingJob] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  function saveJob(job) {
    if (job.id) {
      setJobs(jobs.map((j) => (j.id === job.id ? job : j)));
    } else {
      setJobs([...jobs, { ...job, id: Date.now() }]);
    }
    setEditingJob(null);
  }

  function deleteJob(id) {
    if (window.confirm("Delete this application?")) {
      setJobs(jobs.filter((j) => j.id !== id));
      setEditingJob(null);
    }
  }

  const visibleJobs = jobs.filter((job) => {
    const matchesStatus = statusFilter === "All" || job.status === statusFilter;
    const text = search.toLowerCase();
    const matchesSearch =
      job.company.toLowerCase().includes(text) ||
      job.role.toLowerCase().includes(text);
    return matchesStatus && matchesSearch;
  });

  const interviewCount = jobs.filter((j) => j.status === "Interview").length;

    return (
    <main className="container">
      <h1>JobTrack</h1>

      <div className="stats">
        <div className="stat-box">Total Applications: {jobs.length}</div>
        <div className="stat-box">Interviews: {interviewCount}</div>
      </div>

      <JobForm
        onSave={saveJob}
        editingJob={editingJob}
        onCancel={() => setEditingJob(null)}
      />

      <div className="filters">
        <label>
          Search
          <input
            type="text"
            placeholder="Company or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <label>
          Filter by status
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </label>
      </div>

      <JobList jobs={visibleJobs} onEdit={setEditingJob} onDelete={deleteJob} />
    </main>
  );
}

export default App;