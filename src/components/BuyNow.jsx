import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import "./BuyNow.css";  // apni CSS file import kar li

const initialState = {
  name: "",
  email: "",
  phone_number: "",
  address: "",
  pincode: "",
  quantity: 1,
};

export default function BuyNow() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const { error } = await supabase.from("BuyNow").insert([
        {
          name: form.name.trim(),
          email: form.email.trim(),
          phone_number: form.phone_number.trim(),
          address: form.address.trim(),
          pincode: form.pincode.trim(),
          quantity: Number(form.quantity) || 1,
        },
      ]);

      if (error) throw error;

      setStatus("✅ Order placed successfully!");
      setForm(initialState);
    } catch (err) {
      console.error("Insert error:", err);
      setStatus("❌ Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="buy-now-page">
      <div className="buy-now-card">
        {/* ✅ LOGO placed above "Buy Now" heading */}
        <div className="logo-container">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Blackelvre.png`}
            alt="Elvre Logo"
            className="buy-now-logo"
          />
        </div>

        <h2 className="buy-now-title">Buy Now</h2>

        <form onSubmit={onSubmit} className="buy-now-form">
          <div className="form-row">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-row">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-row">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone_number"
              value={form.phone_number}
              onChange={onChange}
              placeholder="10+ digit number"
              pattern="[0-9]{10,}"
              title="Please enter at least 10 digits"
              required
            />
          </div>

          <div className="form-row">
            <label>Pincode</label>
            <input
              type="text"
              name="pincode"
              value={form.pincode}
              onChange={onChange}
              placeholder="6-digit pincode"
              pattern="[0-9]{6}"
              title="Please enter a valid 6 digit pincode"
              required
            />
          </div>          

          <div className="form-row">
            <label>Address</label>
            <input
              name="address"
              value={form.address}
              onChange={onChange}
              placeholder="Your Address"
              title="House/ Street/ City"
              rows={3}
              required
            />
          </div>

          <div className="form-row">
            <label>Quantity (1 packet = 500g)</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={onChange}
              min="1"
              step="1"
              required
            />
          </div>

          <button type="submit" className="buy-now-submit" disabled={loading}>
            {loading ? "Placing order..." : "Place Order"}
          </button>

          {status && <p className="buy-now-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
