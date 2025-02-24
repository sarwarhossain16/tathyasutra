import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import DownloadPage from "./pages/DownloadPage";
import ReportPage from "./pages/ReportPage";
import CollaboratePage from "./pages/CollaboratePage"; // ✅ Added CollaboratePage
import "./styles.css"; // Correct path
import "./firebaseConfig"; // Ensure this is inside `src/`

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/report/:id" element={<ReportPage />} />
        <Route path="/collaborate/:id" element={<CollaboratePage />} /> {/* ✅ Added this route */}
      </Routes>
    </Router>
  );
}

export default App;