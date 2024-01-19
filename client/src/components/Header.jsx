import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "../styles/components/Header.css";

export default function Header() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/profile", {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);
  return (
    <header>
      <Link to="/" className="logo">
        MyBlogNews
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create Post</Link>
            <Link to="/logout">Logout</Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" id="link-to-login">
              Login
            </Link>
            <Link to="/register" id="link-to-register">
              register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
