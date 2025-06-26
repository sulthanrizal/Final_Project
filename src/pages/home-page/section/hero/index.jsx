import { Link } from "react-router-dom";
import Hero from "../../../../assets/hero.png";
import "./index.scss";

export function HeroSection() {
  return (
    <section className="section-hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <img src={Hero} />
        <div className="hero-text">
          <h1>
            Temukan <span>Mitra Agensi</span> Acara Pilihan Anda
          </h1>
          <p>
            Acara spesial Anda layak mendapatkan sentuhan profesional. Jika Anda
            baru pertama kali merencanakan acara besar atau kecil, kami adalah
            jembatan Anda menuju event organizer ahli. Temukan mitra yang tepat
            untuk menciptakan momen tak terlupakan, dengan mudah dan tanpa ragu
          </p>
          <Link to={"/search-agency"} className="link-hero">
            <span>Cari Agency Sekarang</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
