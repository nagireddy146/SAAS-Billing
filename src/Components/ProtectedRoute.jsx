import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // If user not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If roles are restricted and user's role is not allowed, redirect to unauthorized
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  // Else, allow access
  return children;
};

export default ProtectedRoute;
