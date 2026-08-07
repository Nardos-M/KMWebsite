import "./ContactHero.css";
import churchImage from "../../assets/images/church-contact.jpg";

function ContactHero() {
  return (
    <section
      className="contact-hero"
      style={{ backgroundImage: `url(${churchImage})` }}
    >
      <div className="hero-overlay">
        <h1>Contact Us</h1>

        <p>
          We'd love to welcome you. Feel free to reach out or visit us.
        </p>
      </div>
    </section>
  );
}

export default ContactHero;