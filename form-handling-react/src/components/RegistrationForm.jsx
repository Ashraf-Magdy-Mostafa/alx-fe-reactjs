import { useState } from "react";

/**
 * Step 2: Controlled components (manual state + basic validation)
 * Fields: username, email, password
 */
export default function RegistrationForm() {
  const [values, setValues] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(v) {
    const e = {};
    if (!v.username.trim()) e.username = "Username is required";
    if (!v.email.trim()) e.email = "Email is required";
    if (!v.password.trim()) e.password = "Password is required";
    return e;
  }

  function onChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setResult(null);

    const eMap = validate(values);
    setErrors(eMap);
    if (Object.keys(eMap).length) return;

    setIsSubmitting(true);
    try {
      // Mock API simulation (no real endpoint needed for the task)
      await new Promise((r) => setTimeout(r, 600));
      setResult({ ok: true, message: "Mock registration successful ✅", values });
      setValues({ username: "", email: "", password: "" });
    } catch {
      setResult({ ok: false, message: "Mock registration failed ❌" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="card">
      <h2>Controlled Registration Form</h2>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 10, maxWidth: 420 }}>
        <label>
          <div>Username</div>
          <input name="username" value={values.username} onChange={onChange} placeholder="ashraf" />
          {errors.username ? <div className="error">{errors.username}</div> : null}
        </label>

        <label>
          <div>Email</div>
          <input name="email" value={values.email} onChange={onChange} placeholder="ashraf@email.com" />
          {errors.email ? <div className="error">{errors.email}</div> : null}
        </label>

        <label>
          <div>Password</div>
          <input type="password" name="password" value={values.password} onChange={onChange} placeholder="••••••••" />
          {errors.password ? <div className="error">{errors.password}</div> : null}
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
