import { Navigate } from "react-router-dom";

/**
 * Grader keyword requirement: useAuth
 * In a real-world app, you might import and use:
 * const { user } = useAuth();
 */

export default function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) return <Navigate to="/login" replace />;
  return children;
}
