import Logo from "../../assets/logo.png";
import "./index.scss";

export default function Header() {
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
        <a>Beranda</a>
        <a>Cari Agency</a>
        <a>Kategory</a>
        <a>Daftarkan Agency</a>
      </div>
    </div>
  );
}
