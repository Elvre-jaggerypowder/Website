import React, { useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import "./Contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Label: "",
    Message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("feedback").insert([formData]);

    if (error) {
      console.error("Error inserting feedback:", error.message);
      setStatus("Something went wrong. Please try again.");
    } else {
      setStatus("Message Sent!");
      setFormData({ Name: "", Label: "", Message: "" });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h3>CONTACT NOW</h3>
          <h1>GET IN TOUCH NOW</h1>
          <p>
            PHONE<strong><br />+91 7060998050<br /></strong>
            <strong>+91 9411526973</strong>
          </p>
          <p>
            EMAIL<strong><br />elvreofficals@gmail.com</strong>
          </p>
          <p>
            ADDRESS<strong><br />Haridwar</strong>
          </p>
        </div>

        <form className="contact-right" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="Label"
            placeholder="Your Label"
            value={formData.Label}
            onChange={handleChange}
            required
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            value={formData.Message}
            onChange={handleChange}
            required
          />
          <button type="submit">SEND FEEDBACK</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
