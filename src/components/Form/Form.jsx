import * as S from "./styleForm";
import useApp from "../../hooks/useApp";
import BtnConvert from "../Button/Button";

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
            <option value="">Escolha uma moeda</option>
            <option value="AED">Dirham dos Emirados Árabes Unidos</option>
            <option value="AFN">Afegão afegão</option>
            <option value="ALL">Lek albanês</option>
            <option value="AMD">Dram Armênio</option>
            <option value="ANG">Florim das Antilhas Holandesas</option>
            <option value="AOA">Kwanza angolano</option>
            <option value="ARS">Peso Argentino</option>
            <option value="AUD">Dólar australiano</option>
            <option value="AWG">Florim arubano</option>
            <option value="AZN">Manat do Azerbaijão</option>
            <option value="BAM">Marco da Bósnia e Herzegovina</option>
            <option value="BBD">Dólar de Barbados</option>
            <option value="BDT">Taka de Bangladesh</option>
            <option value="BGN">Lev Búlgaro</option>
            <option value="BHD">Dinar do Bahrein</option>
            <option value="BIF">Franco Burundiano</option>
            <option value="BMD">Dólar das Bermudas</option>
            <option value="BND">Dólar de Brunei</option>
            <option value="BOB">Boliviano boliviano</option>
            <option value="BRL">Real Brasileiro</option>
            <option value="BSD">Dólar das Bahamas</option>
            <option value="BTN">Ngultrum butanês</option>
            <option value="BWP">Pula do Botsuana</option>
            <option value="BYN">Rublo Bielorrusso</option>
            <option value="BZD">Dólar belizenho</option>
            <option value="CAD">Dólar canadense</option>
            <option value="CDF">Franco Congolês</option>
            <option value="CHF">Franco suíço</option>
            <option value="CLP">Peso Chileno</option>
            <option value="CNY">Renminbi Chinês</option>
            <option value="COP">Peso Colombiano</option>
            <option value="CRC">Cólon Costarriquenho</option>
            <option value="CUP">Peso cubano</option>
            <option value="CVE">Escudo cabo-verdiano</option>
            <option value="CZK">Coroa Tcheca</option>
            <option value="DJF">Franco Djibutiano</option>
            <option value="DKK">Coroa Dinamarquesa</option>
            <option value="DOP">Peso Dominicano</option>
            <option value="DZD">Dinar Argelino</option>
            <option value="EGP">Libra egípcia</option>
            <option value="ERN">Nakfa da Eritreia</option>
            <option value="ETB">Birr etíope</option>
            <option value="EUR">Euro</option>
            <option value="FJD">Dólar de Fiji</option>
            <option value="FKP">Libra das Ilhas Malvinas</option>
            <option value="FOK">Coroa faroense</option>
            <option value="GBP">Libra esterlina</option>
            <option value="GEL">Lari georgiano</option>
            <option value="GGP">Libra de Guernsey</option>
            <option value="GHS">Cedi ganês</option>
            <option value="GIP">Libra de Gibraltar</option>
            <option value="GMD">Dalasi gambiano</option>
            <option value="GNF">Franco Guineense</option>
            <option value="GTQ">Quetzal da Guatemala</option>
            <option value="GYD">Dólar guianense</option>
            <option value="HKD">Dólar de Hong Kong</option>
            <option value="HNL">Lempira hondurenha</option>
            <option value="HRK">Kuna Croata</option>
            <option value="HTG">Gourde haitiano</option>
            <option value="HUF">Forint Húngaro</option>
            <option value="IDR">Rupia Indonésia</option>
            <option value="ILS">Novo shekel israelense</option>
            <option value="IMP">Libra manx</option>
            <option value="INR">Rupia indiana</option>
            <option value="IQD">Dinar Iraquiano</option>
            <option value="IRR">Rial iraniano</option>
            <option value="ISK">Coroa Islandesa</option>
            <option value="JEP">Libra de Jersey</option>
            <option value="JMD">Dólar jamaicano</option>
            <option value="JOD">Dinar Jordaniano</option>
            <option value="JPY">Yen japonês</option>
            <option value="KES">Xelim Queniano</option>
            <option value="KGS">Som do Quirguistão</option>
            <option value="KHR">Riel cambojano</option>
            <option value="KID">Dólar Quiribati</option>
            <option value="KMF">Franco Comoriano</option>
            <option value="KRW">Won sul-coreano</option>
            <option value="KWD">Dinar do Kuwait</option>
            <option value="KYD">Dólar das Ilhas Cayman</option>
            <option value="KZT">Tenge do Cazaquistão</option>
            <option value="LAK">Laos Kip</option>
            <option value="LBP">Libra Libanesa</option>
            <option value="LKR">Rupia do Sri Lanka</option>
            <option value="LRD">Dólar da Libéria</option>
            <option value="LSL">Lesoto Loti</option>
            <option value="LYD">Dinar Líbio</option>
            <option value="MAD">Dirham Marroquino</option>
            <option value="MDL">Leu da Moldávia</option>
            <option value="MGA">Ariary malgaxe</option>
            <option value="MKD">Denar macedônio</option>
            <option value="MMK">Kyat birmanês</option>
            <option value="MNT">Tögrög da Mongólia</option>
            <option value="MOP">Pataca macaense</option>
            <option value="MRU">Ouguiya da Mauritânia</option>
            <option value="MUR">Rupia das Maurícias</option>
            <option value="MVR">Rufiyaa das Maldivas</option>
            <option value="MWK">Kwacha do Malawi</option>
            <option value="MXN">Peso Mexicano</option>
            <option value="MYR">Ringgit malaio</option>
            <option value="MZN">Metical Moçambicano</option>
            <option value="NAD">Dólar da Namíbia</option>
            <option value="NGN">Naira nigeriana</option>
            <option value="NIO">Córdoba Nicaraguense</option>
            <option value="NOK">Coroa Norueguesa</option>
            <option value="NPR">Rúpia Nepalesa</option>
            <option value="NZD">Dólar da Nova Zelândia</option>
            <option value="OMR">Rial de Omã</option>
            <option value="PAB">Balboa panamenho</option>
            <option value="PEN">Sol peruano</option>
            <option value="PGK">Kina da Papua Nova Guiné</option>
            <option value="PHP">Peso filipino</option>
            <option value="PKR">Rupia Paquistanesa</option>
            <option value="PLN">Zloty polonês</option>
            <option value="PYG">Guarani paraguaio</option>
            <option value="QAR">Rial do Catar</option>
            <option value="RON">Leu romeno</option>
            <option value="RSD">Dinar Sérvio</option>
            <option value="RUB">Rublo russo</option>
            <option value="RWF">Franco Ruandês</option>
            <option value="SAR">Rial saudita</option>
            <option value="SBD">Dólar das Ilhas Salomão</option>
            <option value="SCR">Rupia Seichelense</option>
            <option value="SDG">Libra Sudanesa</option>
            <option value="SEK">Coroa Sueca</option>
            <option value="SGD">Dólar de Singapura</option>
            <option value="SHP">Libra de Santa Helena</option>
            <option value="SLE">Leoa da Serra Leoa</option>
            <option value="SOS">Xelim Somali</option>
            <option value="SRD">Dólar do Suriname</option>
            <option value="SSP">Libra do Sudão do Sul</option>
            <option value="STN">São Tomé e Príncipe Dobra</option>
            <option value="SYP">Libra Síria</option>
            <option value="SZL">Essuatíni Lilangeni</option>
            <option value="THB">Baht tailandês</option>
            <option value="TJS">Somoni tadjique</option>
            <option value="TMT">Manat do Turquemenistão</option>
            <option value="TND">Dinar Tunisino</option>
            <option value="TOP">Pa'anga de Tonga</option>
            <option value="TRY">Lira turca</option>
            <option value="TTD">Dólar de Trinidad e Tobago</option>
            <option value="TVD">Dólar tuvaluano</option>
            <option value="TWD">Novo dólar taiwanês</option>
            <option value="TZS">Xelim da Tanzânia</option>
            <option value="UAH">Hryvnia ucraniana</option>
            <option value="UGX">Xelim ugandês</option>
            <option value="USD">Dólar dos Estados Unidos</option>
            <option value="UYU">Peso Uruguaio</option>
            <option value="UZS">Sou do Uzbequistão</option>
            <option value="VES">Bolívar Soberano venezuelano</option>
            <option value="VND">Dong vietnamita</option>
            <option value="VUV">Vatu de Vanuatu</option>
            <option value="WST">Tala Samoana</option>
            <option value="XAF">Franco CFA da África Central</option>
            <option value="XCD">Dólar do Caribe Oriental</option>
            <option value="XDR">Direitos de Saque Especiais</option>
            <option value="XOF">Franco CFA da África Ocidental</option>
            <option value="XPF">Franco CFP</option>
            <option value="YER">Rial Iemenita</option>
            <option value="ZAR">Rand sul-africano</option>
            <option value="ZMW">Kwacha da Zâmbia</option>
            <option value="ZWL">Dólar do Zimbábue</option>
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
          <option value="">Escolha uma moeda</option>
          <option value="AED">Dirham dos Emirados Árabes Unidos</option>
          <option value="AFN">Afegão afegão</option>
          <option value="ALL">Lek albanês</option>
          <option value="AMD">Dram Armênio</option>
          <option value="ANG">Florim das Antilhas Holandesas</option>
          <option value="AOA">Kwanza angolano</option>
          <option value="ARS">Peso Argentino</option>
          <option value="AUD">Dólar australiano</option>
          <option value="AWG">Florim arubano</option>
          <option value="AZN">Manat do Azerbaijão</option>
          <option value="BAM">Marco da Bósnia e Herzegovina</option>
          <option value="BBD">Dólar de Barbados</option>
          <option value="BDT">Taka de Bangladesh</option>
          <option value="BGN">Lev Búlgaro</option>
          <option value="BHD">Dinar do Bahrein</option>
          <option value="BIF">Franco Burundiano</option>
          <option value="BMD">Dólar das Bermudas</option>
          <option value="BND">Dólar de Brunei</option>
          <option value="BOB">Boliviano boliviano</option>
          <option value="BRL">Real Brasileiro</option>
          <option value="BSD">Dólar das Bahamas</option>
          <option value="BTN">Ngultrum butanês</option>
          <option value="BWP">Pula do Botsuana</option>
          <option value="BYN">Rublo Bielorrusso</option>
          <option value="BZD">Dólar belizenho</option>
          <option value="CAD">Dólar canadense</option>
          <option value="CDF">Franco Congolês</option>
          <option value="CHF">Franco suíço</option>
          <option value="CLP">Peso Chileno</option>
          <option value="CNY">Renminbi Chinês</option>
          <option value="COP">Peso Colombiano</option>
          <option value="CRC">Cólon Costarriquenho</option>
          <option value="CUP">Peso cubano</option>
          <option value="CVE">Escudo cabo-verdiano</option>
          <option value="CZK">Coroa Tcheca</option>
          <option value="DJF">Franco Djibutiano</option>
          <option value="DKK">Coroa Dinamarquesa</option>
          <option value="DOP">Peso Dominicano</option>
          <option value="DZD">Dinar Argelino</option>
          <option value="EGP">Libra egípcia</option>
          <option value="ERN">Nakfa da Eritreia</option>
          <option value="ETB">Birr etíope</option>
          <option value="EUR">Euro</option>
          <option value="FJD">Dólar de Fiji</option>
          <option value="FKP">Libra das Ilhas Malvinas</option>
          <option value="FOK">Coroa faroense</option>
          <option value="GBP">Libra esterlina</option>
          <option value="GEL">Lari georgiano</option>
          <option value="GGP">Libra de Guernsey</option>
          <option value="GHS">Cedi ganês</option>
          <option value="GIP">Libra de Gibraltar</option>
          <option value="GMD">Dalasi gambiano</option>
          <option value="GNF">Franco Guineense</option>
          <option value="GTQ">Quetzal da Guatemala</option>
          <option value="GYD">Dólar guianense</option>
          <option value="HKD">Dólar de Hong Kong</option>
          <option value="HNL">Lempira hondurenha</option>
          <option value="HRK">Kuna Croata</option>
          <option value="HTG">Gourde haitiano</option>
          <option value="HUF">Forint Húngaro</option>
          <option value="IDR">Rupia Indonésia</option>
          <option value="ILS">Novo shekel israelense</option>
          <option value="IMP">Libra manx</option>
          <option value="INR">Rupia indiana</option>
          <option value="IQD">Dinar Iraquiano</option>
          <option value="IRR">Rial iraniano</option>
          <option value="ISK">Coroa Islandesa</option>
          <option value="JEP">Libra de Jersey</option>
          <option value="JMD">Dólar jamaicano</option>
          <option value="JOD">Dinar Jordaniano</option>
          <option value="JPY">Yen japonês</option>
          <option value="KES">Xelim Queniano</option>
          <option value="KGS">Som do Quirguistão</option>
          <option value="KHR">Riel cambojano</option>
          <option value="KID">Dólar Quiribati</option>
          <option value="KMF">Franco Comoriano</option>
          <option value="KRW">Won sul-coreano</option>
          <option value="KWD">Dinar do Kuwait</option>
          <option value="KYD">Dólar das Ilhas Cayman</option>
          <option value="KZT">Tenge do Cazaquistão</option>
          <option value="LAK">Laos Kip</option>
          <option value="LBP">Libra Libanesa</option>
          <option value="LKR">Rupia do Sri Lanka</option>
          <option value="LRD">Dólar da Libéria</option>
          <option value="LSL">Lesoto Loti</option>
          <option value="LYD">Dinar Líbio</option>
          <option value="MAD">Dirham Marroquino</option>
          <option value="MDL">Leu da Moldávia</option>
          <option value="MGA">Ariary malgaxe</option>
          <option value="MKD">Denar macedônio</option>
          <option value="MMK">Kyat birmanês</option>
          <option value="MNT">Tögrög da Mongólia</option>
          <option value="MOP">Pataca macaense</option>
          <option value="MRU">Ouguiya da Mauritânia</option>
          <option value="MUR">Rupia das Maurícias</option>
          <option value="MVR">Rufiyaa das Maldivas</option>
          <option value="MWK">Kwacha do Malawi</option>
          <option value="MXN">Peso Mexicano</option>
          <option value="MYR">Ringgit malaio</option>
          <option value="MZN">Metical Moçambicano</option>
          <option value="NAD">Dólar da Namíbia</option>
          <option value="NGN">Naira nigeriana</option>
          <option value="NIO">Córdoba Nicaraguense</option>
          <option value="NOK">Coroa Norueguesa</option>
          <option value="NPR">Rúpia Nepalesa</option>
          <option value="NZD">Dólar da Nova Zelândia</option>
          <option value="OMR">Rial de Omã</option>
          <option value="PAB">Balboa panamenho</option>
          <option value="PEN">Sol peruano</option>
          <option value="PGK">Kina da Papua Nova Guiné</option>
          <option value="PHP">Peso filipino</option>
          <option value="PKR">Rupia Paquistanesa</option>
          <option value="PLN">Zloty polonês</option>
          <option value="PYG">Guarani paraguaio</option>
          <option value="QAR">Rial do Catar</option>
          <option value="RON">Leu romeno</option>
          <option value="RSD">Dinar Sérvio</option>
          <option value="RUB">Rublo russo</option>
          <option value="RWF">Franco Ruandês</option>
          <option value="SAR">Rial saudita</option>
          <option value="SBD">Dólar das Ilhas Salomão</option>
          <option value="SCR">Rupia Seichelense</option>
          <option value="SDG">Libra Sudanesa</option>
          <option value="SEK">Coroa Sueca</option>
          <option value="SGD">Dólar de Singapura</option>
          <option value="SHP">Libra de Santa Helena</option>
          <option value="SLE">Leoa da Serra Leoa</option>
          <option value="SOS">Xelim Somali</option>
          <option value="SRD">Dólar do Suriname</option>
          <option value="SSP">Libra do Sudão do Sul</option>
          <option value="STN">São Tomé e Príncipe Dobra</option>
          <option value="SYP">Libra Síria</option>
          <option value="SZL">Essuatíni Lilangeni</option>
          <option value="THB">Baht tailandês</option>
          <option value="TJS">Somoni tadjique</option>
          <option value="TMT">Manat do Turquemenistão</option>
          <option value="TND">Dinar Tunisino</option>
          <option value="TOP">Pa'anga de Tonga</option>
          <option value="TRY">Lira turca</option>
          <option value="TTD">Dólar de Trinidad e Tobago</option>
          <option value="TVD">Dólar tuvaluano</option>
          <option value="TWD">Novo dólar taiwanês</option>
          <option value="TZS">Xelim da Tanzânia</option>
          <option value="UAH">Hryvnia ucraniana</option>
          <option value="UGX">Xelim ugandês</option>
          <option value="USD">Dólar dos Estados Unidos</option>
          <option value="UYU">Peso Uruguaio</option>
          <option value="UZS">Sou do Uzbequistão</option>
          <option value="VES">Bolívar Soberano venezuelano</option>
          <option value="VND">Dong vietnamita</option>
          <option value="VUV">Vatu de Vanuatu</option>
          <option value="WST">Tala Samoana</option>
          <option value="XAF">Franco CFA da África Central</option>
          <option value="XCD">Dólar do Caribe Oriental</option>
          <option value="XDR">Direitos de Saque Especiais</option>
          <option value="XOF">Franco CFA da África Ocidental</option>
          <option value="XPF">Franco CFP</option>
          <option value="YER">Rial Iemenita</option>
          <option value="ZAR">Rand sul-africano</option>
          <option value="ZMW">Kwacha da Zâmbia</option>
          <option value="ZWL">Dólar do Zimbábue</option>
        </select>
      </S.WrapperLabelSelect>

      <BtnConvert />
    </S.Form>
  );
}

export default Form;
