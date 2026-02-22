import { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function submit(e) {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    onAdd(value);
    setText("");
  }

  return (
    <form onSubmit={submit} className="row" style={{ alignItems: "center" }}>
      <input
        aria-label="New todo"
        placeholder="Add a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ flex: 1, minWidth: 220 }}
      />
      <button type="submit">Add</button>
    </form>
  );
}
