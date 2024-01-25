import { Link } from "react-router-dom";
import "../styles/pages/registerpage.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function RegisterPage() {
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
        <form action="">
          <div>
            <input
              type="text"
              placeholder="Username"
              id="username-input-register"
            />
          </div>
          <div>
            <input type="email" placeholder="Email" id="email-input-register" />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              id="password-input-register"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirmed Password"
              id="confirmedPassword-input-register"
            />
          </div>
          <div>
            <button type="submit" id="submit-btn-register">
              Register
            </button>
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
            <i class="bi bi-facebook"></i>Continue with Facebook
          </button>
        </div>
        <div className="google-btn-container">
          <button>
            <i class="bi bi-google"></i>Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
