import * as S from "./styles/styleApp";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";
import Provider from "./context/Provider";

import { ThemeProvider } from "styled-components";
import light from "./styles/theme/light";
import dark from "./styles/theme/dark";
import Switch from "react-switch";
import usePersistedState from "./hooks/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <S.WrapperGlobal>
          <h1>Conversor de moeda API</h1>

          <h2>Escolha as moedas </h2>

          <Form />

          <Result />

          <S.BntToggleTheme>
            <Switch
              onChange={toggleTheme}
              checked={theme.title === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              width={40}
              height={15}
              handleDiameter={20}
              onColor="#EBEBEB"
              offColor="#242424"
            />
          </S.BntToggleTheme>
        </S.WrapperGlobal>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
