import React, { createContext, useState } from "react";

export const WeightContext = createContext({});

export const WeightContextProvider = ({ children }) => {
  const [weighings, setWeighings] = useState([]);
  return (
    <WeightContext.Provider
      value={{
        weighings,
        setWeighings,
      }}
    >
      {children}
    </WeightContext.Provider>
  );
};
