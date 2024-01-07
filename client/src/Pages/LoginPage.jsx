import { Link } from "react-router-dom";

import "../styles/pages/LoginPage.css";

export default function LoginPage() {
  return (
    <>
      <form action="" className="login-form">
        <h1>Login</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
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
