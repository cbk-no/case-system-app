import React, { useState } from 'react';
import './createCases.css';

interface CaseFormData {
  title: string;
  description: string;
  priority: string;
}

const CreateCases: React.FC = () => {
  const [form, setForm] = useState<CaseFormData>({
    title: '',
    description: '',
    priority: 'Low',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send form data to your backend or API
    setSubmitted(true);
  };

  return (
    <div className="create-case-container">
      <h2 className="create-case-title">Create New Case</h2>
      {submitted ? (
        <div className="create-case-success">Case submitted successfully!</div>
      ) : (
        <form className="create-case-form" onSubmit={handleSubmit}>
          <div className="create-case-field">
            <label htmlFor="title">Title</label><br />
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="create-case-input"
            />
          </div>
          <div className="create-case-field">
            <label htmlFor="description">Description</label><br />
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={4}
              className="create-case-textarea"
            />
          </div>
          <div className="create-case-field">
            <label htmlFor="priority">Priority</label><br />
            <select
              id="priority"
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="create-case-select"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button type="submit" className="create-case-button">Create Case</button>
        </form>
      )}
    </div>
  );
};

export default CreateCases;
