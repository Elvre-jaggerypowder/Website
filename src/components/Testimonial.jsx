import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Testimonial.css";
import { supabase } from "../supabaseClient";

const Testimonial = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const { data, error } = await supabase
          .from("Feedbacks") // ✅ table ka exact naam
          .select("id, name, message, label") // ✅ columns ka exact naam
          .order("id", { ascending: false })
          .limit(3);

        if (error) throw error;
        setFeedbacks(data || []);
      } catch (error) {
        console.error("Error fetching feedbacks:", error.message);
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
          loop={feedbacks.length > 1} // ✅ loop tabhi chalega jab 2+ feedbacks ho
          spaceBetween={30}
          slidesPerView={1}
        >
          {feedbacks.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">
                <p className="testimonial-message">"{item.message}"</p>
                <p className="testimonial-name">- {item.name}</p>
                {item.label && (
                  <p className="testimonial-label">{item.label}</p>
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
