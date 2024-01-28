import { Link } from "react-router-dom";
import "../styles/pages/registerpage.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="register-page-container">
      <h2>Register</h2>
      <div className="have-account-container">
        <p>
          Already have an account?&nbsp;
          <Link className="login-account-link" to="/login">
            Login Here
          </Link>
        </p>
      </div>
      <div className="input-form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              id="username-input-register"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              id="email-input-register"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              id="password-input-register"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirmed Password"
              id="confirmedPassword-input-register"
              value={confirmedPassword}
              onChange={(ev) => setConfirmedPassword(ev.target.value)}
            />
          </div>
          <div>
            {password !== confirmedPassword ||
            confirmedPassword === "" ||
            password === "" ? (
              <button type="submit" id="submit-btn-register" disabled>
                Register
              </button>
            ) : (
              <button type="submit" id="submit-btn-register">
                Register
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="wrapper-or-container">
        <hr />
        <p>Or</p>
      </div>
      <div className="other-auth-options">
        <div className="facebook-btn-container">
          <button>
            <i className="bi bi-facebook"></i>Continue with Facebook
          </button>
        </div>
        <div className="google-btn-container">
          <button>
            <i className="bi bi-google"></i>Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
