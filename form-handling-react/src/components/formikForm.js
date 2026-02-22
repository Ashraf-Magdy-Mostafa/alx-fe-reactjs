import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

/**
 * Step 3: Formik (+ Yup) version
 * File name requested by task: formikForm.js
 */
const schema = Yup.object({
  username: Yup.string().trim().required("Username is required"),
  email: Yup.string().trim().email("Enter a valid email").required("Email is required"),
  password: Yup.string().trim().min(6, "Min 6 characters").required("Password is required"),
});

export default function FormikForm() {
  return (
    <div className="card">
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={schema}
        onSubmit={async (values, { resetForm, setStatus, setSubmitting }) => {
          setStatus(null);
          try {
            // Mock API simulation
            await new Promise((r) => setTimeout(r, 600));
            setStatus({ ok: true, message: "Mock registration successful ✅", values });
            resetForm();
          } catch {
            setStatus({ ok: false, message: "Mock registration failed ❌" });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <>
            <Form style={{ display: "grid", gap: 10, maxWidth: 420 }}>
              <label>
                <div>Username</div>
                <Field name="username" placeholder="ashraf" />
                <ErrorMessage name="username" component="div" className="error" />
              </label>

              <label>
                <div>Email</div>
                <Field name="email" placeholder="ashraf@email.com" />
                <ErrorMessage name="email" component="div" className="error" />
              </label>

              <label>
                <div>Password</div>
                <Field type="password" name="password" placeholder="••••••••" />
                <ErrorMessage name="password" component="div" className="error" />
              </label>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Register"}
              </button>
            </Form>

            {status ? (
              <div style={{ marginTop: 12 }}>
                <strong>{status.message}</strong>
                {status.values ? (
                  <pre style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>
                    {JSON.stringify(status.values, null, 2)}
                  </pre>
                ) : null}
              </div>
            ) : null}
          </>
        )}
      </Formik>
    </div>
  );
}
