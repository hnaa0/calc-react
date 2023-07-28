import { styled } from "styled-components";

export default function Keypad({ onClick }) {
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
      {keys.map((key) =>
        key === "0" ? (
          <KeyBox
            key={key}
            value={key}
            style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
            onClick={() => onClick(key)}
          >
            {key}
          </KeyBox>
        ) : (
          <KeyBox key={key} value={key} onClick={() => onClick(key)}>
            {key}
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
