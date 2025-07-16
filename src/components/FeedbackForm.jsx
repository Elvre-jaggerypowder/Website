import React, { useState } from "react";
import { supabase } from '../supabase/supabaseClient';
import "./FeedbackForm.css";

function FeedbackForm() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, message } = form;

    const { error } = await supabase
      .from("feedback")
      .insert([{ Name: name, Message: message }]);

    if (error) {
      alert("Error submitting feedback. Please try again.");
      console.error(error);
    } else {
      setSuccess(true);
      setForm({ name: "", message: "" });
    }
  };

  return (
    <div className="feedback-page">
      <div className="feedback-container">
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your feedback"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {success && <p className="thanks">Thank you for your feedback! 💌</p>}
      </div>
    </div>
  );
}

export default FeedbackForm;
