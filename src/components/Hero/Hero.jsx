import "./Hero.css";

import heroImage from "../../assets/images/Hero-1.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="overlay">

        <h1>Welcome to St. Kidanemihret</h1>

        <p>
          Worship • Prayer • Fellowship
        </p>

        <div className="buttons">
          <button>Visit Us</button>
          <button>Donate</button>
          <button>Contact</button>
        </div>

      </div>
    </section>
  );
}

export default Hero;