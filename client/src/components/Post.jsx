export default function Post() {
  return (
    <div className="post">
      <img
        src="https://techcrunch.com/wp-content/uploads/2024/01/m-s-8-store-ny.jpg?w=1390&crop=1"
        alt="This is an image of a post"
        id="post-image"
      />
      <div className="text">
        <a href="" id="link-to-title-post">
          Why Puma is sticking to its web3 bets as crypto shakes off a long-held
          winter
        </a>
        <p id="description-post">
          While some brands moved away from web3 in 2023 during a long crypto
          winter, Puma stayed the course and its head of emerging technology
          Ivan Dashkov told TechCrunch+ it has no intentions of leaving....
        </p>

        <div className="info">
          <a href="" id="link-to-auther-post">
            Jacquelyn Melinek
          </a>
          <p id="date-post">3:19 AM GMT+7•January 3, 2024</p>
        </div>
      </div>
    </div>
  );
}
