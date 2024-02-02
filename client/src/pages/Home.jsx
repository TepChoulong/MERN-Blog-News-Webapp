import "../styles/pages/home.css";
import { useMediaQuery } from "react-responsive";

import Trending_Post from "../components/Trending_Post";
import Breaking_News_Post from "../components/Breaking_News_Post";
import Breaking_News_Choices from "../components/Breaking_New_Choices";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 700 });
  const isTablet = useMediaQuery({ minWidth: 700, maxWidth: 1030 });
  const isDesktop = useMediaQuery({ minWidth: 1030 });

  return (
    <main>
      {isMobile && (
        <>
          <div className="trending-container">
            <h3>Trending</h3>
            <div className="post-contents-container">
              <Trending_Post />
            </div>
          </div>
          <div className="breaking_news-container">
            <h1>Breaking News</h1>
            <div className="breaking_news-choices-container">
              <Breaking_News_Choices />
            </div>
            <div className="breaking_news-post-contents-container">
              {/* Breaking News Post 1 */}
              <Breaking_News_Post />
              <Breaking_News_Post />
              <Breaking_News_Post />
              <Breaking_News_Post />
              <Breaking_News_Post />
              <Breaking_News_Post />
            </div>
          </div>
        </>
      )}
      {isTablet && (
        <>
          <div className="trending-container">
            <h3>Trending</h3>
            <div className="post-contents-container">
              {/* Post-1 */}
              <Trending_Post />
            </div>
          </div>
          <div className="breaking_news-container">
            <h1>Breaking News</h1>
            <div className="breaking_news-choices-container">
              <Breaking_News_Choices />
            </div>
            <div className="breaking_news-post-contents-container">
              {/* Breaking News Post 1 */}
              <Breaking_News_Post />
              <Breaking_News_Post />
              <Breaking_News_Post />
              <Breaking_News_Post />
              <Breaking_News_Post />
              <Breaking_News_Post />
            </div>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div className="trending-container">
            <h3>Trending</h3>
            <div className="post-contents-container">
              {/* Post-1 */}
              <Trending_Post />
            </div>
          </div>
          <div className="breaking_news-container">
            <h1>Breaking News</h1>
            <div className="breaking_news-choices-container">
              <Breaking_News_Choices />
            </div>
            <div className="breaking_news-post-contents-container">
              {/* Breaking News Post 1 */}
              <Breaking_News_Post />
              <Breaking_News_Post />
              <Breaking_News_Post />
              <Breaking_News_Post />
              <Breaking_News_Post />
              <Breaking_News_Post />
            </div>
          </div>
        </>
      )}
    </main>
  );
}
