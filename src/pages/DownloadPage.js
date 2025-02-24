import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Header from "../components/Header";
import { FaDownload } from "react-icons/fa"; // Import download icon
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

  // Demo files for display
  const demoReports = [
    {
      title: "Sustainable Agriculture in Bangladesh",
      description: "An analysis of modern farming techniques to improve food security.",
      uploadedBy: "Md. Hasan Ahmed",
      fileURL: "",
    },
    {
      title: "Impact of Climate Change on Coastal Regions",
      description: "Study on the effects of rising sea levels and weather patterns.",
      uploadedBy: "Sadia Rahman",
      fileURL: "",
    },
    {
      title: "Digital Transformation in Education",
      description: "How online learning is reshaping the education sector in Bangladesh.",
      uploadedBy: "Tanvir Islam",
      fileURL: "",
    },
  ];

  return (
    <div>
      <Header />
      <div className="downloads-container">
        <h2 className="page-title">Available Reports</h2>
        {[...demoReports, ...reports].map((report, index) => (
          <div key={index} className="download-block">
            <div className="download-content">
              <h3 className="download-title">{report.title}</h3>
              <p className="download-description">{report.description}</p>
              <p className="uploaded-by">Uploaded by: {report.uploadedBy}</p>
              <a href={report.fileURL} className="download-button" target="_blank" rel="noopener noreferrer">
                <FaDownload className="download-icon" /> Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadPage;
