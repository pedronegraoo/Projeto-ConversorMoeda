import { useContext } from "react";
import { AppContext } from "../context/Provider";

function useApp() {
  return useContext(AppContext);
}

export default useApp;
