import { Link } from "react-router-dom";
import "../styles/components/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo-footer">
        <img
          src="https://i1.sndcdn.com/artworks-000054056037-kaol0s-t500x500.jpg"
          alt="This is the logo"
        />
      </div>
      <div className="links-container">
        <div className="links">
          <ul>
            <li>
              <Link className="link">About</Link>
            </li>
            <li>
              <Link className="link">Careers</Link>
            </li>
            <li>
              <Link className="link">Contact</Link>
            </li>
            <li>
              <Link className="link">Privacy Policy</Link>
            </li>
            <li>
              <Link className="link">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright-container">
        <p>© 2022 Copyright: MyBlogNews</p>
      </div>
    </div>
  );
}
