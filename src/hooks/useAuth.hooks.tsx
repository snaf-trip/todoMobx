import { useContext } from "react"
import { AuthContext } from "./authProvider.hooks";

export const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
}
