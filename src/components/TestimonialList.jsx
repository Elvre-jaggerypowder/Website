// TestimonialList.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import "./TestimonialList.css";

function TestimonialList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    async function fetchFeedbacks() {
      const { data, error } = await supabase
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false })
        .range(0, 2);

      if (error) console.error("Supabase fetch error:", error);
      else setFeedbacks(data || []);
    }

    fetchFeedbacks();
  }, []);

  return (
    <div className="testimonial-list-section">
      <h2 className="testimonial-title">What People Say</h2>
      {feedbacks.length === 0 ? (
        <p className="no-feedback">No feedback available.</p>
      ) : (
        <div className="testimonial-list">
          {feedbacks.map((item, idx) => (
            <div className="testimonial-item" key={idx}>
              <p className="testimonial-message">“{item.Message}”</p>
              <p className="testimonial-author">– {item.Name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TestimonialList;
