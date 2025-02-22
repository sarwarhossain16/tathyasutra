import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Header from "../components/Header";
import "../styles.css";

const DownloadPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const querySnapshot = await getDocs(collection(db, "reports"));
      setReports(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchReports();
  }, []);

  return (
    <div>
      <Header />
      <div className="downloads-container">
        <h2 className="page-title">Available Reports</h2>
        {reports.map((report, index) => (
          <div key={index} className="download-block">
            <div className="download-content">
              <h3 className="download-title">{report.title}</h3>
              <p className="download-description">{report.description}</p>
              <a href={report.fileURL} className="download-button" target="_blank" rel="noopener noreferrer">Download</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadPage;