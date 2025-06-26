import "./index.scss";
import Background from "../../../../assets/bg-profile.png";
import { CardItemProfile } from "./card-item";
export function ProfileSection() {
  return (
    <section className="container-profile">
      <img src={Background} />
      <div className="header">
        <h1>Organizing Your Events</h1>
        <h2>Solving Your Problems</h2>
        <p>
          EventMatch.id menyediakan berbagai fitur untuk memudahkan Anda
          menemukan dan terhubung dengan agensi Acara terbaik
        </p>
        <CardItemProfile />
      </div>
    </section>
  );
}
