import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const DEMO_USERS = [
      {
        email: "user@interviewprep.com",
        password: "User123",
        firstName: "User",
        lastName: "Demo",
      },
      {
        email: "admin@interviewprep.com",
        password: "Admin123",
        firstName: "Admin",
        lastName: "Demo",
      },
      {
        email: "bhuwan1808@gmail.com",
        password: "Bhuwan123",
        firstName: "Bhuwan",
        lastName: "Bhashkar",
      },
      {
        email: "aman2104@gmail.com",
        password: "Aman123",
        firstName: "Aman",
        lastName: "Rai",
      },
    ];

    const matchedUser = DEMO_USERS.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem("token", "demo-login-token");
      localStorage.setItem("user", JSON.stringify(matchedUser));

      alert(`Welcome ${matchedUser.firstName} 🎉`);

      // ✅ Redirect to HOME page after login
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back 👋</h2>
        <p className="auth-subtitle">Login to continue Interview Prep</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="auth-switch">
          New here? <Link to="/register">Create account</Link>
        </p>
      </div>
    </div>
  );
}
