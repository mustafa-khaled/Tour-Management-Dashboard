import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "./spinner/Spinner";
import { useUser } from "../features/admins/useUser";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1) Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2) if there is no authenticated user , redirect to the login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  // 3) While loading show a spinner
  if (isLoading) {
    return <Spinner />;
  }

  // 4) If there is a user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
