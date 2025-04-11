import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import axios from "axios";
import "./Login-Register.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before new request

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      if (res.status === 200) {
        setShowPopup(true); 

        // Store token and email in localStorage
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userEmail", formData.email); // Store email

        // Redirect to Home after 2 seconds
        setTimeout(() => {
          setShowPopup(false);
          navigate("/"); // Redirect to the home page
        }, 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit">Login</button>
      </form>

      {showPopup && <div className="popup"><p>✅ Login Successful! Redirecting...</p></div>}
    </div>
  );
};

export default Login;
