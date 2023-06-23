import React, { createContext } from "react";
import { useAuthRequest } from "expo-auth-session/providers/google";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(null);

  const [request, response, promptAsync] = useAuthRequest(
    {
      androidClientId:
        "751146957624-m27bff5n7kk5m4mmikjvapp2phsa3tn6.apps.googleusercontent.com",
    },
    {}
  );

  // Atualiza o token quando o 'response' mudar
  React.useEffect(() => {
    if (response?.type === "success") {
      setToken(response?.authentication?.accessToken || null);
    }
  }, [response]);

  return (
    <AuthContext.Provider value={{ token, promptAsync }}>
      {children}
    </AuthContext.Provider>
  );
};
