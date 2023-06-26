import React, { createContext, useState } from "react";

export const ChallengeContext = createContext({});

export const ChallengeProvider = ({ children }) => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(-1);
  const [newChallenge, setNewChallenge] = useState(false);

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
        newChallenge,
        setNewChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
