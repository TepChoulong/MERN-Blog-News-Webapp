import { Link } from "react-router-dom";
import "../styles/components/header.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function header() {
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
        </div>
        {/* Mobile */}
        <div className="display-links-container-mobile">
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
