import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          GitHub User Search
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 ${isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"}`
            }
          >
            Home
          </NavLink>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
