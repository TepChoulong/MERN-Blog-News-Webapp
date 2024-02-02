import { Link } from "react-router-dom";

export default function Breaking_News_Post() {
  return (
    <div className="breaking_news-post-content">
      <div className="breaking_news-pic-container">
        <img
          src="https://www.w3schools.com/css/img_flowers.jpg"
          alt="This is the picture"
        />
      </div>
      <div className="breaking_news-title-container">
        <Link className="breaking_news-title-post">
          Cake meme reflects coronavirus absurdity in a world where nothing is
          what it seems
        </Link>
      </div>
      <div className="breaking_news-description-container">
        <p>
          Earlier this month, a viral video depicting hyper-realistic cakes as
          everyday items had folks on social media double-guessing every other
          post, and sometimes even their own realities, effectively launching
          the next meme : “Is this real or is this cake?”
        </p>
      </div>
      <div className="breaking_news-more_details-container">
        <div className="detail-1">
          <h5 className="released-time">2 hours ago</h5>
          <div>
            <h5 className="released-by-who">By Tep Choulong</h5>
            <h5 className="when-posted">4 mins ago</h5>
          </div>
        </div>
        <hr />
        <div className="detail-2">
          <i className="bi bi-bookmark"></i>
          <i className="bi bi-suit-heart"></i>
          <i className="bi bi-share-fill"></i>
        </div>
      </div>
    </div>
  );
}
