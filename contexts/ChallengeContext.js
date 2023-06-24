import React, { createContext, useState } from "react";

export const ChallengeContext = createContext({});

export const ChallengeProvider = ({ children }) => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(-1);
  return (
    <ChallengeContext.Provider
      value={{
        challenges,
        setChallenges,
        selectedChallenge,
        setSelectedChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
