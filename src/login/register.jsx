import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Import useUser
import "./register.scss";

export function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const navigate = useNavigate();
  const { registerUser } = useUser(); // Use the context

  const handleSubmit = (e) => {
    e.preventDefault();

    if (registerUser(fullName, email, password)) {
      alert("Registration successful! Please login.");
      navigate("/login");
    } else {
      alert("Registration failed. User with this email already exists.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Daftar Akun Baru</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label>Nama Lengkap</label>
          <input
            type="text"
            placeholder="Masukkan nama lengkap"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

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

          <label>Nomor WhatsApp</label>
          <input
            type="tel"
            placeholder="08xxxxxxxxxx"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
          />

          <button type="submit">Daftar</button>

          <p className="register-link">
            Sudah punya akun? <Link to="/login">Login di sini</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
