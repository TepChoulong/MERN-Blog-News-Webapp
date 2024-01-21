import { Link } from "react-router-dom";

export default function Breaking_News_Choices() {
  return (
    <div className="breaking_news-choices">
      <ul>
        <li>
          <Link className="breaking_news-Link-choice">Latest Stories</Link>
        </li>
        <li>
          <Link className="breaking_news-Link-choice">Trending</Link>
        </li>
      </ul>
    </div>
  );
}
