import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import DownloadPage from "./pages/DownloadPage";
import ReportPage from "./pages/ReportPage";
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
      </Routes>
    </Router>
  );
}

export default App;