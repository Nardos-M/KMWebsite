import "./ContactInfo.css";

function ContactInfo() {
  return (
    <section className="contact-info">

      <h2>Church Information</h2>

      <div className="info-grid">

        <div className="info-card">
          <h3>📍 Address</h3>
          <p>Church Address</p>
        </div>

        <div className="info-card">
          <h3>📞 Phone</h3>
          <p>(000) 000-0000</p>
        </div>

        <div className="info-card">
          <h3>✉ Email</h3>
          <p>info@church.ca</p>
        </div>

        <div className="info-card">
          <h3>🕒 Office Hours</h3>
          <p>Monday - Friday</p>
          <p>9:00 AM - 5:00 PM</p>
        </div>

      </div>

    </section>
  );
}

export default ContactInfo;