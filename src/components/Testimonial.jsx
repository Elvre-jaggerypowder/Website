import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Testimonial.css";
import { supabase } from '../supabase/supabaseClient';

const Testimonial = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const { data, error } = await supabase
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

      if (error) {
        console.error("Error fetching feedbacks:", error);
      } else {
        setFeedbacks(data);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <section id="testimonial" className="testimonial-container">
      <h2 className="testimonial-subheading">Our Testimonials</h2>
      <h2 className="testimonial-heading">WHAT THEY'RE TALKING ABOUT</h2>

      {feedbacks.length === 0 ? (
        <p className="no-feedback-message">No feedback available.</p>
      ) : (
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop={feedbacks.length >= 3}
          spaceBetween={30}
          slidesPerView={1}
        >
          {feedbacks.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <p className="testimonial-message">"{item.Message}"</p>
                <p className="testimonial-name">- {item.Name}</p>
                {item.Label && <p className="testimonial-label">{item.Label}</p>}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Testimonial;
