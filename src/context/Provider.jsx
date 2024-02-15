import { createContext, useState } from "react";
import fetchApi from "../api/fetchApi";

export const AppContext = createContext();

function Provider({ children }) {
  const [inputValue, setInputValue] = useState(1);
  const [conversao, setConversao] = useState({
    base: "",
    target: "",
    value: "1",
  });
  const [result, setResult] = useState([]);

  async function handleSubmit(ev) {
    ev.preventDefault();

    const response = await fetchApi(conversao);

    setResult((state) => (state = response));

    // console.log(result);
    console.log(conversao);
  }

  function handleSelect(ev) {
    const { name, value } = ev.target;

    setConversao((state) => {
      const newState = { ...state, [name]: value };
      return newState;
    });
  }

  function cleanResult() {
    setResult("");
  }

  const value = {
    conversao,
    setConversao,
    inputValue,
    setInputValue,
    result,
    setResult,
    handleSubmit,
    handleSelect,
    cleanResult,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;
