function JobList({ jobs, onEdit, onDelete }) {
  if (jobs.length === 0) {
    return <p className="empty">No applications found.</p>;
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Role</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.company}</td>
              <td>{job.role}</td>
              <td>{job.date}</td>
              <td>
                <span className={"badge " + job.status.toLowerCase()}>
                  {job.status}
                </span>
              </td>
              <td>
                <button
                  aria-label={"Edit " + job.company}
                  onClick={() => onEdit(job)}
                >
                  Edit
                </button>
                <button
                  className="red"
                  aria-label={"Delete " + job.company}
                  onClick={() => onDelete(job.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobList;