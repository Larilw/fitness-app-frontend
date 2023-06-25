import { useContext } from "react";
import { WeightContext } from "../contexts/WeighingContext";

const useWeighingContext = () => {
  const context = useContext(WeightContext);
  return { ...context };
};

export default useWeighingContext;
