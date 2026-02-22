import TodoList from "./components/TodoList.jsx";

export default function App() {
  return (
    <div className="container">
      <h1>Todo List ✅</h1>
      <p className="muted">
        Task 3: Add / Toggle / Delete + Jest + React Testing Library
      </p>
      <TodoList />
    </div>
  );
}
