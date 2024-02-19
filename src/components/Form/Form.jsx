import * as S from "./styleForm";
import useApp from "../../hooks/useApp";
import BtnConvert from "../Button/Button";
import { arrOptions } from "../../utils/Options";

function Form() {
  const { inputValue, setInputValue, handleSubmit, handleSelect, cleanResult } =
    useApp();

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.WrapperLabelSelect>
        <label htmlFor="base">Moeda base</label>

        <S.WrapperSelectInput>
          <select
            id="base"
            name="base"
            required
            autoFocus
            onChange={handleSelect}
            onClick={cleanResult}
          >
            {arrOptions.map((moedas) => (
              <option key={moedas.id} value={moedas.value}>
                {moedas.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="value"
            id="inputBase"
            value={inputValue > 1 ? inputValue : 1}
            onChange={(ev) => {
              setInputValue(ev.target.value);
              handleSelect(ev);
            }}
          />
        </S.WrapperSelectInput>
      </S.WrapperLabelSelect>

      <S.WrapperLabelSelect>
        <label htmlFor="target">Moeda alvo</label>

        <select
          id="target"
          name="target"
          required
          onChange={handleSelect}
          onClick={cleanResult}
        >
          {arrOptions.map((moedas) => (
            <option key={moedas.id} value={moedas.value}>
              {moedas.name}
            </option>
          ))}
        </select>
      </S.WrapperLabelSelect>

      <BtnConvert />
    </S.Form>
  );
}

export default Form;
