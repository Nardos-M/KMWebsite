import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-form">

      <h2>Send Us a Message</h2>

      <form
      action="https://formspree.io/f/xeaeaekj"
      method="POST"
      >

        <input
          type="text"
          name="name"
          placeholder="Full Name"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          />

        <textarea
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default ContactForm;