import { styled } from "styled-components";

export default function CalcResult() {
  return (
    <ResultView>
      <CalcInput>1+2+3+4</CalcInput>
      <CalcOutput>10</CalcOutput>
    </ResultView>
  );
}

const ResultView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 350px;
  height: 100px;
  padding: 12px 4px;
  background-color: #ecf2ff;
`;

const CalcInput = styled.div`
  font-size: 20px;
`;

const CalcOutput = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #6527be;
`;
