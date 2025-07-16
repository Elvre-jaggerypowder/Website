import React, { useState, useEffect } from "react";
import "./FloatingButtons.css";

function FloatingButtons() {
  const [showOffer, setShowOffer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  // ✅ Helper: Calculate time remaining
  const calculateTimeLeft = () => {
    const endTime = localStorage.getItem("giftEndTime");
    if (!endTime) return 0;
    const remaining = Math.floor((parseInt(endTime) - Date.now()) / 1000);
    return remaining > 0 ? remaining : 0;
  };

  // ✅ On mount: get time from localStorage
  useEffect(() => {
    const time = calculateTimeLeft();
    setTimeLeft(time);
  }, []);

  // ✅ Update countdown every second
  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        return newTime >= 0 ? newTime : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  // ✅ Set endTime only when opening the offer for the first time
const handleGiftClick = () => {
  const savedEndTime = localStorage.getItem("giftEndTime");

  if (savedEndTime && parseInt(savedEndTime) > Date.now()) {
    // ✅ Use existing time if it's still valid
    setTimeLeft(Math.floor((parseInt(savedEndTime) - Date.now()) / 1000));
  } else {
    // ⛔ Expired or missing: Reset to 10 days
    const newEndTime = Date.now() + 10 * 24 * 60 * 60 * 1000; // 10 days
    localStorage.setItem("giftEndTime", newEndTime.toString());
    setTimeLeft(Math.floor((newEndTime - Date.now()) / 1000));
  }

  setShowOffer(true);
};

  // ✅ Format as DD:HH:MM:SS
  const formatTime = (seconds) => {
    const d = Math.floor(seconds / (60 * 60 * 24));
    const h = Math.floor((seconds % (60 * 60 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return `${d}d ${h}h ${m}m ${s}s`;
  };

  return (
    <>
      {/* 🎁 Gift Box */}
      <div className="gift-icon" onClick={handleGiftClick}>🎁</div>

      {/* 🎉 Offer Box */}
      {showOffer && (
        <div className="gift-modal">
          <p><strong>🎉 Special Offer! 10% Off</strong></p>
          <p>⏳ Offer ends in: {formatTime(timeLeft)}</p>
          <button onClick={() => setShowOffer(false)}>Close</button>
        </div>
      )}

      {/* 📝 Feedback Button */}
      <a href="/feedback" className="feedback-btn">Feedback</a>

      {/* 🛒 Order Button */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSciH1m2eFeV4wN3Q-XoGAmLpZONoKcidottQM3s9UCXSigsjw/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
        className="order-btn"
      >
        🛒 Order Now
      </a>

      {/* ⬆ Back to Top */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}

export default FloatingButtons;
