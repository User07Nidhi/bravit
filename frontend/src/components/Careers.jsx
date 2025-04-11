import React, { useState, useEffect } from 'react'; // Import useEffect
import './Careers.css';

const Careers = () => {
  const jobOpenings = [
    'Software Engineer',
    'Marketing Specialist',
    'Graphic Designer',
    'Product Manager',
    'Sales Executive',
  ];

  useEffect(() => {
    document.body.className = 'careers-body';
    return () => {
      document.body.className = ''; // Cleanup on unmount
    };
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: jobOpenings[0],
    resume: null,
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('position', formData.position);
    formPayload.append('message', formData.message);
    formPayload.append('resume', formData.resume);

    try {
      const response = await fetch('http://localhost:5000/api/auth/career', {
        method: 'POST',
        body: formPayload,
      });

      if (response.ok) {
        setStatus('Application submitted successfully!');
        setFormData({
          name: '',
          email: '',
          position: jobOpenings[0],
          resume: null,
          message: '',
        });
      } else {
        setStatus('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="careers-container">
      <h1>Careers</h1>
      <p>Join our team and shape the future with us!</p>

      <form className="career-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Position:</label>
        <select name="position" value={formData.position} onChange={handleChange}>
          {jobOpenings.map((job, index) => (
            <option key={index} value={job}>{job}</option>
          ))}
        </select>

        <label>Upload Resume:</label>
        <input type="file" name="resume" onChange={handleFileChange} required />

        <label>Why do you want to join us?</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>

        <button type="submit" className="apply-button">Submit Application</button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Careers;
