import { useNavigate } from "react-router-dom";

export default function Login({ auth }) {
  const navigate = useNavigate();

  function login() {
    auth.setIsAuth(true);
    navigate("/profile", { replace: true });
  }

  function logout() {
    auth.setIsAuth(false);
    navigate("/", { replace: true });
  }

  return (
    <div className="card">
      <h2>Login</h2>
      <p className="muted">This is a simple auth simulation (boolean state).</p>
      <div className="row">
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
