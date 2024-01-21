import { Link } from "react-router-dom";

export default function Trending_Post() {
  return (
    <div className="post-content">
      <div className="pic-container">
        <img
          src="https://www.w3schools.com/css/img_flowers.jpg"
          alt="This is the picture"
        />
      </div>
      <div className="title-container">
        <Link className="title-post">
          Cake meme reflects coronavirus absurdity in a world where nothing is
          what it seems
        </Link>
      </div>
      <div className="description-container">
        <p>
          Earlier this month, a viral video depicting hyper-realistic cakes as
          everyday items had folks on social media double-guessing every other
          post, and sometimes even their own realities, effectively launching
          the next meme : “Is this real or is this cake?”
        </p>
      </div>
      <div className="more_details-container">
        <h5 className="released-time">2 hours ago</h5>
        <div>
          <h5 className="released-by-who">By Tep Choulong</h5>
          <h5 className="when-posted">4 mins ago</h5>
        </div>
      </div>
    </div>
  );
}
