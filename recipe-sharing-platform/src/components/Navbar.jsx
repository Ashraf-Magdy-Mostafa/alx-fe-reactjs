import { NavLink } from "react-router-dom";

const linkBase =
  "px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-gray-100";
const linkActive = "bg-gray-900 text-white hover:bg-gray-900";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-lg font-bold text-gray-900">
          🍲 Recipe Sharing Platform
        </NavLink>

        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : "text-gray-700"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/add"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : "text-gray-700"}`
            }
          >
            Add Recipe
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
