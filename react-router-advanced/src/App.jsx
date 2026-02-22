import { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import ProfileDetails from "./pages/ProfileDetails.jsx";
import ProfileSettings from "./pages/ProfileSettings.jsx";
import Post from "./pages/Post.jsx";

function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const auth = useMemo(() => ({ isAuth, setIsAuth }), [isAuth]);

  return (
    <BrowserRouter>
      <div className="container">
        <h1>Advanced Routing 🧭</h1>
        <p className="muted">
          Task 2: Nested routes + Protected routes + Dynamic routes.
        </p>

        <nav className="card" style={{ marginBottom: 16 }}>
          <div className="row" style={{ alignItems: "center" }}>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/posts/1">Post #1</Link>
            <Link to="/posts/42">Post #42</Link>
            <Link to="/login">Login</Link>
            <span className="pill">Auth: {isAuth ? "✅" : "❌"}</span>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login auth={auth} />} />

          {/* Protected Route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* Nested routes inside Profile */}
            <Route index element={<ProfileDetails />} />
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings auth={auth} />} />
          </Route>

          {/* Dynamic route */}
          <Route path="/posts/:postId" element={<Post />} />

          <Route path="*" element={<div className="card">404 – Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
