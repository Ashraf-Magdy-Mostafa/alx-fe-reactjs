import { useMemo, useState } from "react";
import AddTodoForm from "./AddTodoForm.jsx";

const initialTodos = [
  { id: 1, text: "Learn React Testing Library", completed: false },
  { id: 2, text: "Write Jest tests", completed: true },
  { id: 3, text: "Ship the ALX task", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const nextId = useMemo(() => {
    // derive a starting id that won't conflict
    return () => Math.max(0, ...todos.map((t) => t.id)) + 1;
  }, [todos]);

  function addTodo(text) {
    const id = nextId();
    setTodos((prev) => [...prev, { id, text, completed: false }]);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="card">
      <h2>Todos</h2>
      <AddTodoForm onAdd={addTodo} />

      <ul aria-label="Todo items" style={{ listStyle: "none", paddingLeft: 0, marginTop: 12 }}>
        {todos.map((t) => (
          <li key={t.id} className="row" style={{ alignItems: "center", marginBottom: 8 }}>
            <button
              onClick={() => toggleTodo(t.id)}
              aria-label={`toggle-${t.id}`}
              style={{
                flex: 1,
                textAlign: "left",
                border: "1px solid #eee",
                background: "#fff",
              }}
            >
              <span style={{ textDecoration: t.completed ? "line-through" : "none" }}>
                {t.text}
              </span>
              {t.completed ? <span className="pill" style={{ marginLeft: 10 }}>Done</span> : null}
            </button>

            <button onClick={() => deleteTodo(t.id)} aria-label={`delete-${t.id}`}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p className="muted" style={{ marginBottom: 0 }}>
        Click a todo to toggle completion.
      </p>
    </div>
  );
}
