import Post from "./posts/Postcard";
import Trending_Post from "./posts/Trending_Post";
import Hot_Post from "./posts/Hot_Post";

export default function Business_News_Section() {
  return (
    <div className="mb-16">
      <div className="trending-post-container mb-4">
        <h1 className="title text-3xl font-bold text-red-500 ml-4 mt-4">
          Business
        </h1>
        <div className="posts m-4">
          {/*A lot of posts will go here */}
          <Post />
          <hr className="mt-4 mb-4" />
          <Post />
          <hr className="mt-4 mb-4" />
          <Post />
          <hr className="mt-4 mb-4" />
          <Post />
          <hr className="mt-4 mb-4" />
          <Post />
          <hr className="mt-4 mb-4" />
          <Post />
          <hr className="mt-4 mb-4" />
          <Post />
          <hr className="mt-4 mb-4" />
          <Post />
          <hr className="mt-4 mb-4" />
          <Post />
          <hr className="mt-4 mb-4" />
          <Post />
          <hr className="mt-4 mb-4" />
          <Post />
          <hr className="mt-4 mb-4" />
          <Post />
          <hr className="mt-4 mb-4" />
        </div>
      </div>
    </div>
  );
}
