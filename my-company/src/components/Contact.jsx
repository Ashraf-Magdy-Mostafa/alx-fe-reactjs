import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "20px auto" }}>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          style={{ ...inputStyle, minHeight: "120px" }}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "700",
          }}
        >
          Send Message ✉️
        </button>
      </form>
    </div>
  );
}

export default Contact;
