import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import UserDetails from "./pages/UserDetails.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<UserDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="border-t bg-white">
        <div className="mx-auto w-full max-w-5xl px-4 py-6 text-sm text-slate-600">
          Built with React, Tailwind CSS, and GitHub API.
        </div>
      </footer>
    </div>
  );
}
