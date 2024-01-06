import Post from "../components/Post.jsx";

export default function IndexPage() {

  const titleStyle = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "60pt",
  };

  return (
    <div>
      <h1 style={titleStyle}>Welcome to TepChoulong News Blog</h1>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
