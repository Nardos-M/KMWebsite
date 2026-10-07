import "./ContactInfo.css";

function ContactInfo() {
  return (
    <section className="contact-info">

      <h2>Church Information</h2>

      <div className="info-grid">

        <div className="info-card">
          <h3>📍 Address</h3>
          <p> Calgary Hamere Noah St. Kidanemihret Ethiopian Orthodox Tewahdo Church</p>
          <p>2020 27 Ave NE, Calgary, AB T2E 0E8 </p>
        </div>

        <div className="info-card">
          <h3>📞 Phone</h3>
          <p>403-615-6667</p>
        </div>

        <div className="info-card">
          <h3>E mail</h3>
          <p>calgarykidanemhretchurch@gmail.com</p>
        </div>

        <div className="info-card">
          <h3>🕒 Office Hours</h3>
          <p>Monday - Friday</p>
          <p>4 PM - 6:00 PM</p>
        </div>

      </div>

    </section>
  );
}

export default ContactInfo;