import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent.jsx";

const queryClient = new QueryClient();

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1>React Query Demo 🧠</h1>
        <p className="muted">
          Task 1: Fetch + cache + refetch posts from JSONPlaceholder.
        </p>

        <div className="row" style={{ marginBottom: 12 }}>
          <button onClick={() => setShow((s) => !s)}>
            {show ? "Unmount PostsComponent" : "Mount PostsComponent"}
          </button>
          <span className="pill">Tip: toggle to see caching</span>
        </div>

        {show ? <PostsComponent /> : <div className="card">Component unmounted ✅</div>}
      </div>
    </QueryClientProvider>
  );
}
