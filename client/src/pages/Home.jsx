import "../styles/pages/home.css";
import { Link } from "react-router-dom";

import Trending_Post from "../components/Trending_Post";
import Breaking_News_Post from "../components/Breaking_News_Post";

export default function Home() {
  return (
    <main>
      <div className="trending-container">
        <h3>Trending</h3>
        <div className="post-contents-container">
          {/* Post-1 */}
          <Trending_Post />
          {/* Post-2 */}
          <Trending_Post />
        </div>
      </div>
      <div className="breaking_news-container">
        <h1>Breaking News</h1>
        <div className="breaking_news-post-contents-container">
          {/* Breaking News Post 1 */}
          <Breaking_News_Post />
          <Breaking_News_Post />
          <Breaking_News_Post />
          <Breaking_News_Post />
        </div>
      </div>
    </main>
  );
}
