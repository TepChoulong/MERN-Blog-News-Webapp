import { Link } from "react-router-dom";

import "../styles/pages/RegisterPage.css";

export default function RegisterPage() {
  return (
    <>
      <form action="" className="register-form">
        <h1>Register</h1>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirmed Password" />
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
