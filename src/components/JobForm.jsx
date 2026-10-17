import { useState, useEffect } from "react";

const emptyForm = { company: "", role: "", date: "", status: "Applied" };

function JobForm({ onSave, editingJob, onCancel }) {
  const [form, setForm] = useState(emptyForm);

 
  useEffect(() => {
    setForm(editingJob || emptyForm);
  }, [editingJob]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    onSave(form);
    setForm(emptyForm);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{editingJob ? "Edit Application" : "Add Application"}</h2>

      <div className="form-grid">
        <label>
          Company name
          <input
            name="company"
            placeholder="e.g. Google"
            value={form.company}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Job role
          <input
            name="role"
            placeholder="e.g. Frontend Developer"
            value={form.role}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Application date
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Status
          <select name="status" value={form.status} onChange={handleChange}>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </label>
      </div>

      <div>
        <button type="submit">{editingJob ? "Update" : "Add"}</button>
        {editingJob && (
          <button type="button" className="gray" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default JobForm;