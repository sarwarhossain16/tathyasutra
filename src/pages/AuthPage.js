import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Header from "../components/Header";
import "../styles.css";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="auth-container">
        <div className="auth-box">
          <h2>{isRegistering ? "Register" : "Login"}</h2>
          {error && <p className="error-text">{error}</p>}
          <form className="auth-form" onSubmit={handleAuth}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="auth-input" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="auth-input" />
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

export default AuthPage;