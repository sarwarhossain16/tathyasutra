import React, { useState, useEffect } from "react";
import { auth, db, storage } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { doc, getDoc, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Header from "../components/Header";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [userReports, setUserReports] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) setUserInfo(userSnap.data());
    };

    const fetchUserReports = async () => {
      const q = query(collection(db, "reports"), where("userId", "==", auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      const reportsList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUserReports(reportsList);
    };

    fetchUserInfo();
    fetchUserReports();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setUploading(true);
    try {
      const fileRef = ref(storage, `uploads/${auth.currentUser.uid}/${file.name}`);
      await uploadBytes(fileRef, file);
      const fileURL = await getDownloadURL(fileRef);
      
      await addDoc(collection(db, "reports"), {
        title,
        description,
        fileURL,
        userId: auth.currentUser.uid,
        author: userInfo?.name,
        date: new Date().toISOString().split("T")[0], 
      });

      setTitle("");
      setDescription("");
      setFile(null);
      alert("File uploaded successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed. Please try again.");
    }
    setUploading(false);
  };

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-user-info">
          <h2>Welcome, {userInfo?.name}</h2>
          <p>Profession: {userInfo?.profession}</p>
        </div>

        <form className="dashboard-form" onSubmit={handleSubmit}>
          <input type="text" className="dashboard-input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <textarea className="dashboard-textarea" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          <input type="file" className="dashboard-file" onChange={(e) => setFile(e.target.files[0])} required />
          <button type="submit" className="dashboard-submit" disabled={uploading}>
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>

        <h3 className="dashboard-section-title">Your Uploaded Reports</h3>
        <div className="dashboard-reports">
          {userReports.length > 0 ? (
            userReports.map((report) => (
              <div key={report.id} className="report-card">
                <h4>{report.title}</h4>
                <p>{report.description}</p>
                <p className="report-meta">Uploaded on: {report.date} by {report.author}</p>
                <a href={report.fileURL} target="_blank" rel="noopener noreferrer" className="download-button">
                  Download
                </a>
              </div>
            ))
          ) : (
            <p className="no-reports-message">No reports uploaded yet.</p>
          )}
        </div>

        <button className="dashboard-logout" onClick={() => signOut(auth).then(() => navigate("/"))}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
