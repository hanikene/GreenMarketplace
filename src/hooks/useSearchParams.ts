import { useSearchParams as useSearchParamsHook } from "react-router-dom";

const useSearchParams = () => {
  return useSearchParamsHook({});
};

export default useSearchParams;
