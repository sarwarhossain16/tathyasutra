import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import floodImg from "../assets/flood.jpg";
import garmentImg from "../assets/garment.jpg";
import digitalBangladeshImg from "../assets/digital_bangladesh.jpg";
import padmaBridgeImg from "../assets/padma_bridge.jpg";
import ruralDevImg from "../assets/rural_dev.jpg";
import "../styles.css";

const reports = [
  { id: 1, title: "Impact of Floods in Bangladesh", description: "Analyzing the effects of seasonal floods on agriculture and livelihoods.", image: floodImg, author: "Md. Rezaul Karim", date: "2024-03-10" },
  { id: 2, title: "Garment Industry and Worker Rights", description: "An insight into Bangladesh's RMG sector and labor rights.", image: garmentImg, author: "Fatema Begum", date: "2024-03-12" },
  { id: 3, title: "Digital Bangladesh: Progress & Challenges", description: "Exploring the digital transformation in Bangladesh.", image: digitalBangladeshImg, author: "Shakib Rahman", date: "2024-03-14" },
  { id: 4, title: "Padma Bridge: Economic Impact", description: "Assessing how the Padma Bridge enhances connectivity and trade.", image: padmaBridgeImg, author: "Nasrin Jahan", date: "2024-03-16" },
  { id: 5, title: "Rural Development in Bangladesh", description: "The role of NGOs and government initiatives in rural progress.", image: ruralDevImg, author: "Aminul Haque", date: "2024-03-18" },
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
              <p className="report-author">Updated by: {report.author}</p>
              <p className="report-date">Date of Publication: {report.date}</p>
              <div className="report-actions">
                <button className="share-button">Share</button>
                <Link to={`/collaborate/${report.id}`} className="collaborate-button" onClick={(event) => event.stopPropagation()}>
                  Collaborate
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
