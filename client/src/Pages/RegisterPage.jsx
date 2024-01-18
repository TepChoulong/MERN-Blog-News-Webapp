import { Link } from "react-router-dom";
import { useState } from "react";

import "../styles/pages/RegisterPage.css";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        confirmedPassword,
      }),
      credentials: "include",
    });

    if (res.status === 200) {
      alert("registration success");
    } else {
      alert("registration failed");
    }
  };

  return (
    <>
      <form action="" className="register-form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmed Password"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />
        <button type="submit" id="submit-btn-register">
          Register
        </button>
        <p>
          Already have an account?
          <Link to="/login" id="link-to-login-if-have-account">
            {" "}
            Login Here
          </Link>
        </p>
        <hr />
        <div className="more-choices-for-register">
          <button id="google-btn-register">
            Google
            <i></i>
          </button>
          <button id="twitter-btn-register">
            Twitter
            <i></i>
          </button>
          <button id="facebook-btn-register">
            Facebook
            <i></i>
          </button>
        </div>
      </form>
    </>
  );
}
