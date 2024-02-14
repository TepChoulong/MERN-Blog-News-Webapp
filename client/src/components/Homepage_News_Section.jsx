import Post from "./posts/Postcard";
import Trending_Post from "./posts/Trending_Post";
import Hot_Post from "./posts/Hot_Post";

export default function Homepage_News_Section() {
  return (
    <div className="mb-16">
      <div className="trending-post-container mb-4">
        <h1 className="title text-2xl font-bold text-red-500 ml-4 mt-4">
          Trending News
        </h1>
        <div className="posts m-4">
          {/*A lot of posts will go here */}
          <Trending_Post />
          <hr className="mt-4 mb-4" />
          <Trending_Post />
          <hr className="mt-4 mb-4" />
          <Trending_Post />
          <hr className="mt-4 mb-4" />
          <Trending_Post />
          <hr className="mt-4 mb-4" />
          <Trending_Post />
        </div>
      </div>
      <hr className="mt-4 mb-4" />
      <div className="top-stories-post-container">
        <h1 className="title text-2xl font-bold text-white bg-red-500 mt-4 mb-8 p-2">
          Top Stories
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
        </div>
      </div>
    </div>
  );
}
