import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useUser } from "../../context/UserContext";
import "./index.scss";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isLoggedIn, userName, logoutUser } = useUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const handleCategoryClick = (e) => {
    if (pathname === "/home") {
      e.preventDefault();
      const categorySection = document.getElementById("category-section-id");
      if (categorySection) {
        categorySection.scrollIntoView({ behavior: "smooth" });
      }
    }
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
        <NavLink to="/home">Beranda</NavLink>
        <NavLink to="/search-agency">Cari Agency</NavLink>
        <NavLink to="/category-section" onClick={handleCategoryClick}>
          Kategori
        </NavLink>
        <NavLink to="/register-agency">Daftarkan Agency</NavLink>
        {isLoggedIn ? (
          <div className="user-info">
            <span>Halo, {userName}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
}
