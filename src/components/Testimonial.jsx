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
          .select("id, name, message, label, created_at") // ✅ columns + created_at agar hai
          .order("created_at", { ascending: false }) // ✅ latest feedbacks first
          .limit(3);

        if (error) throw error;
        setFeedbacks(data || []);
      } catch (error) {
        console.error("Error fetching feedbacks:", error.message);
      }
    };

    fetchFeedbacks();

    // ✅ Realtime listener for new feedbacks
    const channel = supabase
      .channel("public:Feedbacks")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "Feedbacks" },
        (payload) => {
          console.log("New feedback added:", payload.new);
          setFeedbacks((prev) => {
            const updated = [payload.new, ...prev];
            // remove duplicates (by id) & keep only latest 3
            const unique = Array.from(new Map(updated.map((f) => [f.id, f])).values());
            return unique.slice(0, 3);
          });
        }
      )
      .subscribe();

    // cleanup
    return () => {
      supabase.removeChannel(channel);
    };
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
