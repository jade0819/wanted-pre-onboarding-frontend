import { createContext, useCallback, useContext } from "react";
import { useNavigate } from "react-router";

const ACCESS_TOKEN = "access_token";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();

  const accessToken =
    localStorage.getItem(ACCESS_TOKEN) === ""
      ? null
      : localStorage.getItem(ACCESS_TOKEN);

  const setToken = useCallback(
    (accessToken) => {
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      navigate("/todo");
    },
    [navigate]
  );

  const removeToken = useCallback(() => {
    localStorage.removeItem(ACCESS_TOKEN);
    navigate("/signin");
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ accessToken, setToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuthContext should be used within AuthProvider!");

  return context;
}
