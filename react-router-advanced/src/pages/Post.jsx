import { useParams, Link } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();

  return (
    <div className="card">
      <h2>Dynamic Route Post</h2>
      <p className="muted">
        URL param <strong>postId</strong> = <span className="pill">{postId}</span>
      </p>

      <div className="row">
        <Link to="/posts/1">Go to /posts/1</Link>
        <Link to="/posts/2">Go to /posts/2</Link>
        <Link to="/">Back Home</Link>
      </div>
    </div>
  );
}
