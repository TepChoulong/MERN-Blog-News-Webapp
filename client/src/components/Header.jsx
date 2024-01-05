import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        My Blog News
      </Link>
      <nav>
        <Link to="/login" id="link-to-login">
          Login
        </Link>
        <Link to="/register" id="link-to-register">
          register
        </Link>
      </nav>
    </header>
  );
}
