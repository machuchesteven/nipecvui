import React from "react";

// import individual components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <button className="alt-btn">Demo</button>
        <Link to="/receipt" className="alt-btn">
          Go To Receipts
        </Link>
        <Link to="/cv" className="alt-btn">
          Go To CVs
        </Link>
        <Link to="/feature" className="alt-btn">
          Go To Features
        </Link>
        <Link to="/error" className="alt-btn">
          Go To Error
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
