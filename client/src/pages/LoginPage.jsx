import { Link } from "react-router-dom";
import "../styles/pages/loginpage.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function LoginPage() {
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
        <form action="">
          <div>
            <input type="email" placeholder="Email" id="email-input-login" />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              id="password-input-login"
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
      <hr />
      <p>Or</p>
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
