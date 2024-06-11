import { Navigate, Outlet } from "react-router-dom";
import useAuth from "@/lib/hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();

  // Redirect to login if the user is not authenticated
  if (!auth?.accessToken) {
    return <Navigate to="login" replace />;
  }

  // Render children components if the user is authenticated
  return <Outlet />;
};

export default RequireAuth;
