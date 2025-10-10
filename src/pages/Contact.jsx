import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    emailjs
      .sendForm(
        "service_6v80fps",
        "template_wc9sixd", 
        form.current,
        "NMNVxqXCskYhwPfIN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setLoading(false);
          form.current.reset();
          // Hide success message after 5 seconds
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          console.log(error.text);
          setError("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="contact-title mb-3">Get in Touch</h2>
          <div className="underline mx-auto mb-3"></div>
          <p className="contact-subtitle">
            Have a question or want to collaborate? Feel free to drop a message — I'd love to hear from you!
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <form ref={form} onSubmit={sendEmail} className="contact-form p-4">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Name *</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    className="form-control" 
                    placeholder="Your Name"
                    required 
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email *</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    className="form-control" 
                    placeholder="your.email@example.com"
                    required 
                  />
                </div>
              </div>
              
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  className="form-control" 
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div className="mb-4">
                <label className="form-label">Message *</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  className="form-control" 
                  placeholder="Hello, I'd like to discuss..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-send w-100" 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              
              {isSent && (
                <div className="alert alert-success mt-3">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {error && (
                <div className="alert alert-error mt-3">
                  ❌ {error}
                </div>
              )}
            </form>
          </div>
        </div>
    </div>
    </section>
  );
}