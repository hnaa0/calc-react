import { createGlobalStyle, styled } from "styled-components";
import Keypad from "./components/Keypad";
import CalcResult from "./components/CalcResult";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <CalcResult />
      <KeypadContainer>
        <Keypad />
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
