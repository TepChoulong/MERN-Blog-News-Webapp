import { Link } from "react-router-dom";

import "../styles/components/Header.css";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        MyBlogNews
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
