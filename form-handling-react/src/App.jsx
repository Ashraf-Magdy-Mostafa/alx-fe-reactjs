import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm.jsx";
import FormikForm from "./components/formikForm.js";

export default function App() {
  const [mode, setMode] = useState("controlled");

  return (
    <div className="container">
      <h1>Form Handling 🧾</h1>
      <p className="muted">
        Task 0: Controlled Components ➜ then Formik (+ Yup validation).
      </p>

      <div className="row" style={{ marginBottom: 12 }}>
        <button onClick={() => setMode("controlled")}>
          Use Controlled Form
        </button>
        <button onClick={() => setMode("formik")}>
          Use Formik Form
        </button>
        <span className="pill">Mode: {mode}</span>
      </div>

      {mode === "controlled" ? <RegistrationForm /> : <FormikForm />}
    </div>
  );
}
