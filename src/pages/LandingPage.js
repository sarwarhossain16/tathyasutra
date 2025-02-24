import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import climateImg from "../assets/climate.jpg";
import aiHealthcareImg from "../assets/ai_healthcare.jpg";
import cybersecurityImg from "../assets/cybersecurity.jpg";
import energyImg from "../assets/energy.jpg";
import mentalHealthImg from "../assets/mental_health.jpg";
import "../styles.css";

const reports = [
  { id: 1, title: "Climate Change and Its Effects", description: "How climate change is altering ecosystems worldwide.", image: climateImg, author: "John Doe", date: "2024-03-10" },
  { id: 2, title: "Artificial Intelligence in Healthcare", description: "How AI is transforming medical treatments and diagnostics.", image: aiHealthcareImg, author: "Jane Smith", date: "2024-03-12" },
  { id: 3, title: "Cybersecurity in the Digital Age", description: "A comprehensive analysis of modern cybersecurity threats.", image: cybersecurityImg, author: "Michael Johnson", date: "2024-03-14" },
  { id: 4, title: "Sustainable Energy Solutions", description: "The future of renewable energy and its global impact.", image: energyImg, author: "Emily Davis", date: "2024-03-16" },
  { id: 5, title: "Mental Health Awareness", description: "The importance of mental health in today’s fast-paced world.", image: mentalHealthImg, author: "Sarah Brown", date: "2024-03-18" },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <section className="intro-section">
        <h2 className="page-title">Latest Reports</h2>
        <p className="page-subtitle">Explore the latest research and insights.</p>
      </section>
      <div className="reports-container">
        {reports.map((report) => (
          <div key={report.id} className="report-block" onClick={() => navigate(`/report/${report.id}`)}>
            <img src={report.image} alt={report.title} className="report-image" />
            <div className="report-content">
              <h3 className="report-title">{report.title}</h3>
              <p className="report-description">{report.description}</p>
              <p className="report-author">Uploaded by: {report.author}</p>
              <p className="report-date">Date of Publication: {report.date}</p>
              <div className="report-actions">
                <button className="share-button">Share</button>
                <Link to={`/collaborate/${report.id}`} className="collaborate-button">Collaborate</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;