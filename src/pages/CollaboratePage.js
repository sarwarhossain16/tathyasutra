import React from "react";
import Header from "../components/Header";
import "../styles.css";

const CollaboratePage = () => {
  return (
    <div>
      <Header />
      <div className="collaborate-container">
        <div className="collaborate-box">
          <h2 className="collaborate-title">Collaborate with Author</h2>
          <p className="collaborate-description">
            Fill out the form below to get in touch with the author and collaborate on this research.
          </p>
          <form className="collaborate-form">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-input" placeholder="Enter your full name" required />
            </div>

            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-input" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label className="form-label">Your Message</label>
              <textarea className="form-textarea" placeholder="Write your message here..." required></textarea>
            </div>

            <button type="submit" className="form-button">Send Request</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CollaboratePage;
