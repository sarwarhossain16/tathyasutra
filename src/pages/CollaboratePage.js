import React from "react";
import Header from "../components/Header";
import "../styles.css";

const CollaboratePage = () => {
  return (
    <div>
      <Header />
      <div className="collaborate-container">
        <h2>Collaborate with Author</h2>
        <form className="collaborate-form">
          <input type="text" placeholder="Your Name" className="form-input" required />
          <input type="email" placeholder="Your Email" className="form-input" required />
          <textarea placeholder="Your Message" className="form-textarea" required></textarea>
          <button type="submit" className="form-button">Send Request</button>
        </form>
      </div>
    </div>
  );
};

export default CollaboratePage;
