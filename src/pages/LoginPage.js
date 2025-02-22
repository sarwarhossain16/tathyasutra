import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", userCredential.user.uid), {
          name,
          profession,
          email
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="auth-container">
        <div className="auth-box">
          <h2>{isRegistering ? "Register" : "Login"}</h2>
          <form className="auth-form" onSubmit={handleAuth}>
            {isRegistering && (
              <>
                <input type="text" className="auth-input" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" className="auth-input" placeholder="Profession" value={profession} onChange={(e) => setProfession(e.target.value)} required />
              </>
            )}
            <input type="email" className="auth-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" className="auth-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="auth-button">{isRegistering ? "Register" : "Login"}</button>
          </form>
          <p className="toggle-text" onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;