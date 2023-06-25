import React, { createContext, useState } from "react";

export const ChallengeContext = createContext({});

export const ChallengeProvider = ({ children }) => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(-1);

  const getSelectedChallenge = () => {
    return challenges[selectedChallenge];
  };
  return (
    <ChallengeContext.Provider
      value={{
        challenges,
        setChallenges,
        selectedChallenge,
        setSelectedChallenge,
        getSelectedChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
