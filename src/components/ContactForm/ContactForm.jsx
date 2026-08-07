import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-form">

      <h2>Send Us a Message</h2>

      <form>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="text"
          placeholder="Subject"
        />

        <textarea
          rows="6"
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default ContactForm;