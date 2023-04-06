import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slides = slidesRef.current?.children;
    if (!slides) return;
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const goToPrevSlide = () => {
    const slides = slidesRef.current?.children;
    if (!slides) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    const slides = slidesRef.current?.children;
    if (!slides) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative">
      <div className="carousel" ref={slidesRef}>
        <div
          className={`carousel-item ${currentIndex === 0 ? "active" : ""} `}
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/random/800x600/?audio)",
          }}
        >
          <div className="carousel-caption">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
              Bringing you the best audio gear
            </h1>
            <p className="text-lg mb-8 text-white">
              Located at the heart of New York City, Audiophile is the premier
              store for high-end headphones, earphones, speakers, and audio
              accessories.
            </p>
            <Link
              to="/category/headphones"
              className="inline-block bg-black text-white px-8 py-4  border font-bold hover:bg-purple-700 transition-colors duration-300"
            >
              Shop now
            </Link>
          </div>
        </div>
        <div
          className={`carousel-item ${currentIndex === 1 ? "active" : ""}`}
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/random/800x600/?headphones)",
          }}
        ></div>
        <div
          className={`carousel-item ${currentIndex === 2 ? "active" : ""}`}
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/random/800x600/?speakers)",
          }}
        ></div>
      </div>
      <button className="carousel-control prev" onClick={goToPrevSlide}>
        &#8249;
      </button>
      <button className="carousel-control next" onClick={goToNextSlide}>
        &#8250;
      </button>
    </section>
  );
};

export default Hero;
