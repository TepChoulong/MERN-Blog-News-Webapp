import { Link, useNavigate } from "react-router-dom";
import "../styles/pages/loginpage.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // This will run whenever the value of redirect changes
    if (redirect) {
      console.log("redirected");
      navigate("/");
    } else {
      console.log("not redirected");
    }
  }, [redirect]);

  async function handleSubmit(ev) {
    ev.preventDefault();

    const res = await fetch("http://localhost:8080/api/login", {
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
    });

    if (res.ok) {
      // Assuming setRedirect is a state-setting function
      setRedirect(true);
      console.log("redirecting..."); // Log here or perform other actions related to successful login
    } else {
      console.log("Login failed");
    }
  }

  return (
    <div className="login-page-container">
      <h2>Login</h2>
      <div className="no-account-container">
        <p>
          Don't have an account?&nbsp;
          <Link className="create-account-link" to="/register">
            Create Now
          </Link>
        </p>
      </div>
      <div className="input-form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              id="email-input-login"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              id="password-input-login"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <div>
            <button type="submit" id="submit-btn-login">
              Login
            </button>
          </div>
          <div>
            <Link className="forgot-password-link">Forgot Password?</Link>
          </div>
        </form>
      </div>
      <br />
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
