import React, { createContext, useState } from "react";

export const WeightContext = createContext({});

export const WeightContextProvider = ({ children }) => {
  const [weighings, setWeighings] = useState([]);
  const [newWeight, setNewWeight] = useState(false);
  return (
    <WeightContext.Provider
      value={{
        weighings,
        setWeighings,
        newWeight,
        setNewWeight,
      }}
    >
      {children}
    </WeightContext.Provider>
  );
};
