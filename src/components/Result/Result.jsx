import * as S from "./styleResult";
import useApp from "../../hooks/useApp";
import Loading from "../Loading/Loading";

function Result() {
  const { result, conversao, loading } = useApp();

  return (
    <S.ResultGlobal>
      <S.WrapperResult>
        <p>Taxa de câmbio</p>
        {loading ? <Loading /> : <span>{result[0]}</span>}
      </S.WrapperResult>

      <S.WrapperResult>
        <p>Conversão do valor</p>

        <S.WrapperTargetResult>
          <span>{conversao.target}</span>
          {loading ? <Loading /> : <span>{result[1]}</span>}
        </S.WrapperTargetResult>
      </S.WrapperResult>
    </S.ResultGlobal>
  );
}

export default Result;
