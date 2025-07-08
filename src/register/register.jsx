import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "./register.scss";

export function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { registerUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      await registerUser({ fullName, email, password, phoneNumber });
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      setError(err.message);
      alert(`Registration failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper-left">
        <h1 className="title">Selamat Datang di EventMatch.id</h1>
        <p className="text">
          Buat Akun Kamu dan Mulai Terhubung dengan EventMatch.id
        </p>
        <div className="to-login">
          <p className="text">Sudah Punya Akun ??</p>
          <p className="text">Masuk disini !</p>
          <Link to="/login" className="text-link">
            Login
          </Link>
        </div>
      </div>
      <div className="register-wrapper-right">
        <div className="register-card">
          <h2 className="register-title">Buat Akun</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="login-form-group">
              <label>Nama Lengkap</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="login-form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="login-form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="login-form-group">
              <label>Konfirmasi Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="login-form-group">
              <label>Nomor Telepon</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Mendaftar..." : "Buat Akun"}
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
