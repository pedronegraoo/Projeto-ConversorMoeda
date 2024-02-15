import * as S from "./styles/styleApp";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";
import Provider from "./context/Provider";

import { ThemeProvider } from "styled-components";
import light from "./styles/theme/light";
import dark from "./styles/theme/dark";
import usePersistedState from "./hooks/usePersistedState";
import ButtonSwitch from "./components/ButtonSwitchTheme/ButtonSwitch";

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <S.WrapperGlobal>
          <S.WrapperContent>
            <h1>Conversor de moeda API</h1>

            <h2>Escolha as moedas </h2>

            <Form />

            <Result />

            <S.BntToggleTheme>
              <ButtonSwitch toggleTheme={toggleTheme} theme={theme} />
            </S.BntToggleTheme>
          </S.WrapperContent>

          <S.WrapperFooter>
            <p>© 2023 ConversorMoeda. Todos os direitos reservados.</p>
            <p>Coded by Pedro Negrão</p>
          </S.WrapperFooter>
        </S.WrapperGlobal>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
