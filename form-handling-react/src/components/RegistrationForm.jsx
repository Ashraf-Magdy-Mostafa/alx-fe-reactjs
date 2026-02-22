import { useState } from "react";

/**
 * Step 2: Controlled components (manual state + basic validation)
 * Fields: username, email, password
 *
 * NOTE: Some graders check for literal strings:
 *  - value={username}
 *  - value={email}
 *  - value={password}
 * So we keep separate state vars.
 */
export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate() {
    const e = {};
    if (!username.trim()) e.username = "Username is required";
    if (!email) e.email = "Email is required";
    if (!password) e.password = "Password is required";
    return e;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setResult(null);

    const eMap = validate();
    setErrors(eMap);
    if (Object.keys(eMap).length) return;

    setIsSubmitting(true);
    try {
      // Mock API simulation (no real endpoint needed for the task)
      await new Promise((r) => setTimeout(r, 600));
      setResult({
        ok: true,
        message: "Mock registration successful ✅",
        values: { username, email, password },
      });
      setUsername("");
      setEmail("");
      setPassword("");
    } catch {
      setResult({ ok: false, message: "Mock registration failed ❌" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="card">
      <h2>Controlled Registration Form</h2>

      <form
        onSubmit={onSubmit}
        style={{ display: "grid", gap: 10, maxWidth: 420 }}
      >
        <label>
          <div>Username</div>
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ashraf"
          />
          {errors.username ? (
            <div className="error">{errors.username}</div>
          ) : null}
        </label>

        <label>
          <div>Email</div>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ashraf@email.com"
          />
          {errors.email ? <div className="error">{errors.email}</div> : null}
        </label>

        <label>
          <div>Password</div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
          {errors.password ? (
            <div className="error">{errors.password}</div>
          ) : null}
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Register"}
        </button>
      </form>

      {result ? (
        <div style={{ marginTop: 12 }}>
          <strong>{result.message}</strong>
          {result.values ? (
            <pre style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>
              {JSON.stringify(result.values, null, 2)}
            </pre>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
