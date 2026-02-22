import { useQuery } from "react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
    dataUpdatedAt,
  } = useQuery(["posts"], fetchPosts, {
    staleTime: 60_000,              // data considered fresh for 60s (helps demonstrate caching)
    cacheTime: 5 * 60_000,          // keep cached data for 5 minutes after unmount
    refetchOnWindowFocus: false,    // avoid refetching when window/tab regains focus
    keepPreviousData: true,         // keep old data while refetching
  });

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>Posts</h2>
        <button onClick={() => refetch()}>Refetch</button>
      </div>

      <p className="muted" style={{ marginTop: 8 }}>
        {isFetching ? "Fetching..." : "Idle"} • Last updated:{" "}
        {dataUpdatedAt ? new Date(dataUpdatedAt).toLocaleTimeString() : "—"}
      </p>

      {isLoading ? <p>Loading...</p> : null}
      {isError ? <p className="error">{String(error?.message || error)}</p> : null}

      {data ? (
        <div style={{ display: "grid", gap: 10 }}>
          <p className="muted">
            Total posts: <strong>{data.length}</strong>
          </p>

          {data.slice(0, 10).map((p) => (
            <div key={p.id} style={{ padding: 12, border: "1px solid #eee", borderRadius: 12 }}>
              <div style={{ fontWeight: 700 }}>{p.title}</div>
              <div className="muted">{p.body}</div>
            </div>
          ))}

          <p className="muted">Showing first 10 posts.</p>
        </div>
      ) : null}
    </div>
  );
}
