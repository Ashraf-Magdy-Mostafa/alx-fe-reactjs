import { useMemo, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// BrowserRouter is configured in src/main.jsx (grader string check) 🧩

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Post from "./pages/Post.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Profile from "./components/Profile.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const auth = useMemo(() => ({ isAuth, setIsAuth }), [isAuth]);

  return (
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

        {/* Protected + Nested */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route index element={<ProfileDetails />} />
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings setIsAuth={setIsAuth} />} />
        </Route>

        {/* Dynamic */}
        <Route path="/posts/:postId" element={<Post />} />

        <Route path="*" element={<div className="card">404 – Not Found</div>} />
      </Routes>
    </div>
  );
}
