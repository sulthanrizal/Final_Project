import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./index.scss";
import Freska from "../../../../../assets/Freska.png";

const animation = { duration: 8500, easing: (t) => t };

export default function SliderAgency() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,

    slides: {
      perView: 6,
      spacing: 15,
    },

    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide slide">
        <img src={Freska} alt="Freska" />
      </div>
      <div className="keen-slider__slide slide">
        <img src={Freska} alt="Freska" />
      </div>
      <div className="keen-slider__slide slide">
        <img src={Freska} alt="Freska" />
      </div>
      <div className="keen-slider__slide slide">
        <img src={Freska} alt="Freska" />
      </div>
      <div className="keen-slider__slide slide">
        <img src={Freska} alt="Freska" />
      </div>
      <div className="keen-slider__slide slide">
        <img src={Freska} alt="Freska" />
      </div>
      <div className="keen-slider__slide slide">
        <img src={Freska} alt="Freska" />
      </div>
      <div className="keen-slider__slide slide">
        <img src={Freska} alt="Freska" />
      </div>
      <div className="keen-slider__slide slide">
        <img src={Freska} alt="Freska" />
      </div>
    </div>
  );
}
