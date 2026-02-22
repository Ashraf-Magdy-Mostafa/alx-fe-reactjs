import { Link, Outlet } from "react-router-dom";

/**
 * Nested routes live under /profile/*
 * - /profile/details
 * - /profile/settings
 */
export default function Profile() {
  return (
    <div className="card">
      <h2>Profile (Protected)</h2>
      <p className="muted">
        This page is protected. If you are not logged in, you get redirected to /login.
      </p>

      <div className="row" style={{ marginBottom: 12 }}>
        <Link to="details">ProfileDetails</Link>
        <Link to="settings">ProfileSettings</Link>
      </div>

      <Outlet />
    </div>
  );
}
