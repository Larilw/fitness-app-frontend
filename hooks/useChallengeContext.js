import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";

const useChallengeContext = () => {
  const context = useContext(ChallengeContext);
  return { ...context };
};

export default useChallengeContext;
