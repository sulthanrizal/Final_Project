import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Import useUser
import "./index.scss";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loginUser } = useUser(); // Use the context

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginUser(email, password)) {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login to Your Account</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
          <p className="login-link">
            Belum punya akun? <Link to="/register">Daftar di sini</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
