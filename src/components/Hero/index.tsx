import { useMobile } from "../../hooks/useMobile";
import "./Hero.css";

const Hero = () => {
  const isMobile = useMobile();

  const handleShopNowClick = () => {
    const targetScrollPosition = window.innerHeight * 0.5; // 50vh
    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative">
      <div>
        <div
          className="carousel-item"
          style={{
            backgroundImage: "url(/bg.jpeg)",
          }}
        >
          <div className="carousel-caption">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
              Bringing you the best audio
            </h1>
            {!isMobile && (
              <p className="text-lg mb-8 text-white">
                Located at the heart of Buenos Aires City, Audiophile is the
                premier store for high-end headphones, earphones, speakers, and
                audio accessories.
              </p>
            )}
            <button
              className="inline-block bg-black text-white px-8 py-4 border font-bold hover:bg-purple-700 transition-colors duration-300 rounded-md"
              onClick={handleShopNowClick}
            >
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
