import React, { useState } from "react";
import axios from "axios";
import "./Login-Register.css";

const Registration = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before new request

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      if (res.status === 201) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register">
      <h2>Registration</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit">Register</button>
      </form>

      {showPopup && <div className="popup"><p>🎉 Registration Successful!</p></div>}
    </div>
  );
};

export default Registration;
