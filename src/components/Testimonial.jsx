import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Testimonial.css";

const Testimonial = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/feedback"); // ✅ Correct endpoint
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
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
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={feedbacks.length >= 3} // Loop only if 3 or more feedbacks
          spaceBetween={30}
          slidesPerView={1}
        >
          {feedbacks.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">
                <p className="testimonial-message">"{item.Message}"</p>
                <p className="testimonial-name">- {item.Name}</p>
                {item.Label && (
                  <p className="testimonial-label">{item.Label}</p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Testimonial;
