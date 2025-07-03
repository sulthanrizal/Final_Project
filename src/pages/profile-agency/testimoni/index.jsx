import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { testimonialsData } from "../../../dummy/testimonials";
import "./index.scss";

export function TestimoniProfile() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 25,
        },
      },
    },
  });

  return (
    <div className="testimonials-section">
      <h2 className="section-title">Testimoni Klien</h2>
      <div ref={sliderRef} className="keen-slider">
        {testimonialsData.map((testimonial) => (
          <div className="keen-slider__slide" key={testimonial.id}>
            <div className="testimonial-card">
              <div className="card-header">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="profile-img"
                />
                <div className="header-info">
                  <span className="name">{testimonial.name}</span>
                  <span className="date">{testimonial.date}</span>
                </div>
              </div>
              <div className="rating">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
                <div className="text-rating">{testimonial.rating}/5</div>
              </div>
              <p className="package-name">Paket: {testimonial.packageName}</p>
              <p className="description">"{testimonial.description}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
