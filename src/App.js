import { createGlobalStyle, styled } from "styled-components";
import Keypad from "./components/Keypad";
import CalcResult from "./components/CalcResult";
import reset from "styled-reset";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}
`;

function App() {
  const [calcState, setCalcState] = useState({
    calcForm: "",
    calcResult: "",
  });

  const isNumber = (el) => {
    return /[0-9]+/.test(el);
  };

  const allClear = () => {
    setCalcState({ calcForm: "", calcResult: "" });
  };

  const getResult = () => {
    let updateResult = calcState.calcForm.replaceAll("×", "*");
    setCalcState({ ...calcState, calcResult: eval(updateResult) });
  };

  const appendNum = (value) => {
    if (
      (value === "0") &
      (calcState.calcForm.length === 0) &
      calcState.calcForm.charAt(calcState.calcForm.length - 1)
    ) {
      return;
    } else {
      let updateform = calcState.calcForm + value;
      setCalcState({ calcForm: updateform });
    }
  };

  const appendOperator = (value) => {
    if (
      (calcState.calcForm === "") |
      isNaN(calcState.calcForm.charAt(calcState.calcForm.length - 1))
    ) {
      return;
    }
    let updateform = calcState.calcForm + value;
    setCalcState({ calcForm: updateform });
  };

  const appendPoint = (value) => {
    let updateform = calcState.calcForm + value;
    setCalcState({ calcForm: updateform });
  };

  const onClick = (value) => {
    if (value === "AC") {
      allClear(value);
    } else if (value === "C") {
      let updateform = calcState.calcForm.substring(
        0,
        calcState.calcForm.length - 1
      );
      setCalcState({ calcForm: updateform });
    } else if (isNumber(value)) {
      appendNum(value);
    } else if (
      (value === "+") |
      (value === "-") |
      (value === "/") |
      (value === "×")
    ) {
      appendOperator(value);
    } else if ((value === ".") & !calcState.calcForm.includes(".")) {
      appendPoint(value);
    } else if (value === "=") {
      getResult();
    }
  };

  return (
    <>
      <GlobalStyle />
      <CalcResult form={calcState.calcForm} result={calcState.calcResult} />
      <KeypadContainer>
        <Keypad onClick={onClick} />
      </KeypadContainer>
    </>
  );
}

export default App;

const KeypadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 350px;
  height: 450px;
`;
