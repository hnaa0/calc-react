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

body {
  width: 100%;
  height: 100vh;
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

  const Clear = () => {
    let updateform = calcState.calcForm.substring(
      0,
      calcState.calcForm.length - 1
    );
    setCalcState({ calcForm: updateform });
  };

  const getResult = () => {
    let updateResult = eval(
      calcState.calcForm.replaceAll("×", "*").replaceAll("%", "*0.01")
    );
    if (Number.isInteger(updateResult)) {
      setCalcState({ ...calcState, calcResult: updateResult });
    } else {
      setCalcState({ ...calcState, calcResult: updateResult.toFixed(12) });
    }
  };

  const appendNum = (value) => {
    if (calcState.calcForm.length >= 20) return;
    else if (
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
    if (calcState.calcForm.length >= 20) return;
    else if (
      (calcState.calcForm === "") |
      isNaN(calcState.calcForm.charAt(calcState.calcForm.length - 1))
    ) {
      return;
    }
    let updateform = calcState.calcForm + value;
    setCalcState({ calcForm: updateform });
  };

  const appendPoint = (value) => {
    if (calcState.calcForm.length >= 20) return;
    let updateform = calcState.calcForm + value;
    setCalcState({ calcForm: updateform });
  };

  const appendPercent = (value) => {
    if (
      (calcState.calcForm === "") |
      isNaN(calcState.calcForm.charAt(calcState.calcForm.length - 1))
    ) {
      return;
    }
    let updateform = calcState.calcForm + value;
    setCalcState({ calcForm: updateform });
  };

  const onClick = (value) => {
    if (value === "AC") {
      allClear(value);
    } else if (value === "C") {
      Clear();
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
    } else if (value === "%") {
      appendPercent(value);
    } else if (value === "=") {
      if (
        isNumber(calcState.calcForm.charAt(calcState.calcForm.length - 1)) |
        (calcState.calcForm.charAt(calcState.calcForm.length - 1) === "%")
      ) {
        getResult();
      }
    }
  };

  return (
    <Container>
      <GlobalStyle />
      <CalcContainer>
        <CalcResult form={calcState.calcForm} result={calcState.calcResult} />
        <KeypadContainer>
          <Keypad onClick={onClick} />
        </KeypadContainer>
      </CalcContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ede4e0;
`;

const CalcContainer = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
`;

const KeypadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 350px;
  height: 450px;
`;
