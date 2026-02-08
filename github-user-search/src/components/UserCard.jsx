import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  const login = user?.login || user?.name || "unknown";
  const avatar = user?.avatar_url;
  const htmlUrl = user?.html_url;

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-start gap-4">
        <img
          src={avatar}
          alt={`${login} avatar`}
          className="h-14 w-14 rounded-full border object-cover"
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate font-semibold">{user?.name || login}</p>
              <p className="truncate text-sm text-slate-600">@{user?.login || login}</p>
            </div>

            <Link
              to={`/user/${encodeURIComponent(user?.login || login)}`}
              className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              View
            </Link>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-700 sm:grid-cols-3">
            <p className="truncate"><span className="text-slate-500">Location:</span> {user?.location || "—"}</p>
            <p><span className="text-slate-500">Repos:</span> {user?.public_repos ?? "—"}</p>
            <p><span className="text-slate-500">Followers:</span> {user?.followers ?? "—"}</p>
          </div>

          {htmlUrl && (
            <a
              href={htmlUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-blue-700 hover:underline"
            >
              Open GitHub Profile →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
