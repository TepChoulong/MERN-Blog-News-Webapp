import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/pages/LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    });

    console.log(response.ok);

    if (response.ok === true) {
      setRedirect(true);
      console.log(redirect);
      if (redirect === true) {
        navigate("/");
      } else {
        console.log("Redirect Failed");
      }
    } else {
      alert("Wrong Credentials");
    }
  };

  return (
    <>
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <button type="submit" id="submit-btn-login">
          Login
        </button>
        <p>
          Don't have an account?
          <Link to="/register" id="link-to-register-if-no-account">
            {" "}
            Register Now
          </Link>
        </p>
        <hr />
        <div className="more-choices-for-login">
          <button id="google-btn-login">
            Google
            <i></i>
          </button>
          <button id="twitter-btn-login">
            Twitter
            <i></i>
          </button>
          <button id="facebook-btn-login">
            Facebook
            <i></i>
          </button>
        </div>
      </form>
    </>
  );
}
