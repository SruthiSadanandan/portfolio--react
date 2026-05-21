function Contact() {
  return (
    <section id="contact" className="section">

      <h2>Contact</h2>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Enter Name"
        />

        <input
          type="email"
          placeholder="Enter Email"
        />

        <textarea
          rows="5"
          placeholder="Enter Message"
        ></textarea>

        <button type="submit">
          Send
        </button>

      </form>
    </section>
  )
}

export default Contact;