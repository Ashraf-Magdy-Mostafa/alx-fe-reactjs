export default function ProfileSettings({ setIsAuth }) {
  return (
    <div style={{ padding: 12, border: "1px solid #eee", borderRadius: 12 }}>
      <h3 style={{ marginTop: 0 }}>Profile Settings</h3>
      <p className="muted">Nested route: /profile/settings</p>
      <button onClick={() => setIsAuth(false)}>Logout (simulate)</button>
    </div>
  );
}
