import React, { createContext, useEffect, useState } from "react";
import { getUserByLoginId } from "../clients/user";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserByLoginId(2442)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
