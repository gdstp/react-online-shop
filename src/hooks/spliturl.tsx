import { useLocation } from "react-router";

const useSplitUrl = () => {
  const location = useLocation();
  return location.pathname.split("/");
};

export default useSplitUrl;
