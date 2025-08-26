import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BuyNow from "./components/BuyNow";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buynow" element={<BuyNow />} />
      </Routes>
    </Router>
  );
}

export default App;
