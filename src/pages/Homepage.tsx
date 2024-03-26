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
        <button className="btn">Demo</button>
        <Link to="/receipt" className="btn">
          Go To Receipts
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
