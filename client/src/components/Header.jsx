import { Link } from "react-router-dom";
import "../styles/components/header.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";

export default function header() {
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

  function Logout() {
    fetch("http://localhost:8080/profile/logout", {
      credentials: "include",
      method: "POST",
    });
    setUsername(null);
  }

  return (
    <header>
      <div className="logo">
        <img
          src="https://i1.sndcdn.com/artworks-000054056037-kaol0s-t500x500.jpg"
          alt="This is logo"
        />
        <h1>MyBlogNews</h1>
      </div>
      <div className="links-container">
        {/* Desktop */}
        <div className="display-links-container-desktop">
          <ul>
            <li>
              <Link className="link">Home</Link>
            </li>
            <li>
              <Link className="link">Business</Link>
            </li>
            <li>
              <Link className="link">Sports</Link>
            </li>
            <li>
              <Link className="link">Technologies</Link>
            </li>
            <li>
              <Link className="link">Travels</Link>
            </li>
          </ul>
          <div className="login-register-container">
            {username && (
              <>
                <h3 className="username-title">{username}</h3>
                <a id="logout-link" onClick={Logout}>
                  Logout
                </a>
              </>
            )}
            {!username && (
              <>
                <Link className="link-to-login" to="/login">
                  Login
                </Link>
                <Link className="link-to-register" to={"/register"}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
        {/* Mobile */}
        <div className="display-links-container-mobile">
          <div className="login-register-container">
            {username ? (
              <>
                <h3 className="username-title">{username}</h3>
                <a id="logout-link" onClick={Logout}>
                  Logout
                </a>
              </>
            ) : (
              <>
                <Link className="link-to-login" to="/login">
                  Login
                </Link>
                <Link className="link-to-register" to={"/register"}>
                  Register
                </Link>
              </>
            )}
          </div>
          <button
            onClick={() => {
              var contents = document.getElementById("myDropdown-contents");
              if (contents.style.display === "none") {
                contents.style.display = "block";
              } else {
                contents.style.display = "none";
              }
            }}
            class="dropdown-btn"
          >
            <i class="bi bi-list"></i>
          </button>
          <div
            className="dropdown-content"
            id="myDropdown-contents"
            style={{ display: "none" }}
          >
            <ul>
              <li>
                <Link className="link">Home</Link>
              </li>
              <li>
                <Link className="link">Business</Link>
              </li>
              <li>
                <Link className="link">Sports</Link>
              </li>
              <li>
                <Link className="link">Technologies</Link>
              </li>
              <li>
                <Link className="link">Travels</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
