import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuth();
  const navigate = useNavigate();

  //TODO Loading component
  if (loading) return <p>Loading...</p>;

  //TODO Alert component
  return user ? children : navigate("/login");
};
