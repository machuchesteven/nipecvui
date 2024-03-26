import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Custom Pages to be imported
import Homepage from "./pages/Homepage";
import ReceiptPage from "./pages/ReceiptPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
