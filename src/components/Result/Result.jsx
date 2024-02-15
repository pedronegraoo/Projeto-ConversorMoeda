import useApp from "../../hooks/useApp";
import * as S from "./styleResult";

function Result() {
  const { result, conversao } = useApp();

  return (
    <S.ResultGlobal>
      <S.WrapperResult>
        <p>Taxa de câmbio</p>
        <span>{result[0]}</span>
      </S.WrapperResult>

      <S.WrapperResult>
        <p>Conversão do valor</p>

        <S.WrapperTargetResult>
          <span>{conversao.target}</span>
          <span>{result[1]}</span>
        </S.WrapperTargetResult>
        {/* <span>{FormatCurrency(result[1], conversao.target)}</span> */}
      </S.WrapperResult>
    </S.ResultGlobal>
  );
}

export default Result;
