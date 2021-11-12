import { Navigate } from "react-router-dom";
import { useAuth } from "@/shared/state/store";

type PrivateRouteProps = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const auth = useAuth((state) => !!(state.username && state.refresh && state.access));
  return auth ? children : <Navigate to="/login" />;
};
