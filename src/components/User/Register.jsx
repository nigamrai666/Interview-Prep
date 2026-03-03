import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const API = import.meta.env.VITE_API_BASE_URL;

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      // ✅ AUTO LOGIN AFTER REGISTER
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      window.dispatchEvent(new Event("authChange"));

      // alert("Welcome! Registration successful 🎉");

      navigate("/", { replace: true });
    } catch (error) {
      console.error("Register error:", error);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.dispatchEvent(new Event("authChange"));
}, []);

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account 🚀</h2>
        <p className="auth-subtitle">
          Start your interview preparation journey
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading} className="auth-btn">
            <span className={`btn-label ${loading ? "loading" : ""}`}>
              Register
            </span>

            {loading && <span className="loader overlay-loader"></span>}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
