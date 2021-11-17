import { useNavigate } from "react-router-dom";
import { useAuth } from "../state/store";

export const useLogout = () => {
  const { setAccess, setRefresh, setUsername } = useAuth((state) => state);
  const navigate = useNavigate();

  const logout = () => {
    setAccess(null);
    setRefresh(null);
    setUsername(null);
    navigate("/login");
  };

  return logout;
};
