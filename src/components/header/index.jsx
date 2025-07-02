import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useUser } from "../../context/UserContext";
import "./index.scss";

export default function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, userName, logoutUser } = useUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="container-header">
      <div className="logo-title">
        <img src={Logo} className="logo" />
        <div className="title">
          <h2>EventMatch.id</h2>
          <span>for all circles</span>
        </div>
      </div>
      <div className="navbar">
        <a href="/home">Beranda</a>
        <a href="/search-agency">Cari Agency</a>
        <a>Kategory</a>
        <a>Daftarkan Agency</a>
        {isLoggedIn ? (
          <div className="user-info">
            <span>Halo, {userName}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </div>
  );
}
