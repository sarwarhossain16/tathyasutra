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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) setUserInfo(userSnap.data());
    };

    fetchUserInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const fileRef = ref(storage, `uploads/${file.name}`);
    await uploadBytes(fileRef, file);
    const fileURL = await getDownloadURL(fileRef);
    await addDoc(collection(db, "reports"), { title, description, fileURL, userId: auth.currentUser.uid });
    setTitle("");
    setDescription("");
    setFile(null);
    alert("File uploaded successfully!");
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
          <button type="submit" className="dashboard-submit">Upload</button>
        </form>
        <button className="dashboard-logout" onClick={() => signOut(auth).then(() => navigate("/"))}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;