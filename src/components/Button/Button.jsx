import * as S from "./styleButton";
import { PiArrowClockwiseBold } from "react-icons/pi";

function BtnConvert() {
  return (
    <S.WrapperBtn>
      <S.Btn type="submit" className="btnOG">
        Converter
      </S.Btn>

      <S.Btn type="submit" className="iconBtn">
        <PiArrowClockwiseBold />
      </S.Btn>
    </S.WrapperBtn>
  );
}

export default BtnConvert;
