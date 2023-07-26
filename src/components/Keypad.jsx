import { styled } from "styled-components";

export default function Keypad() {
  const keys = [
    "C",
    "AC",
    "%",
    "/",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "×",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
  ];

  return (
    <>
      {keys.map((num) =>
        num == "0" ? (
          <KeyBox
            key={num}
            value={num}
            style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
          >
            {num}
          </KeyBox>
        ) : (
          <KeyBox key={num} value={num}>
            {num}
          </KeyBox>
        )
      )}
    </>
  );
}

const KeyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #ecf2ff;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #e3dffd;
  }

  &:active {
    background-color: #e5d1fa;
  }
`;
