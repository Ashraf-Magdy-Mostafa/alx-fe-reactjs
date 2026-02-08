import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchUserData } from "../services/githubService.js";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

export default function UserDetails() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");
    setUser(null);

    fetchUserData(username)
      .then((data) => {
        if (active) setUser(data);
      })
      .catch(() => {
        if (active) setError("Looks like we cant find the user");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [username]);

  if (loading) return <Loader text="Loading..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="space-y-4">
      <Link to="/" className="text-sm text-blue-700 hover:underline">
        ← Back
      </Link>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            className="h-24 w-24 rounded-full border object-cover"
          />

          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-semibold">{user.name || user.login}</h1>
            <p className="text-slate-600">@{user.login}</p>

            <div className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <p><span className="text-slate-500">Location:</span> {user.location || "—"}</p>
              <p><span className="text-slate-500">Company:</span> {user.company || "—"}</p>
              <p><span className="text-slate-500">Public repos:</span> {user.public_repos}</p>
              <p><span className="text-slate-500">Followers:</span> {user.followers}</p>
              <p><span className="text-slate-500">Following:</span> {user.following}</p>
              <p><span className="text-slate-500">Blog:</span> {user.blog ? (
                <a className="text-blue-700 hover:underline" href={user.blog} target="_blank" rel="noreferrer">{user.blog}</a>
              ) : "—"}</p>
            </div>

            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Open on GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
