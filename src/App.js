import React, { useState } from "react";
import {
  StyledHeader,
  StyledInputBox,
  StyledCausesModal,
} from "./StyledComponent.js";
import ProgressBarr from "./Progressbar/ProgressBar.js";
import { GlobalReset } from "./Global.styled";
import useStrength from "./useStrength";

function App() {
  const [isFocus, setFocus] = useState(false);
  const [state, setState] = useStrength();
  const { value, strength, weaknesses } = state;
  console.log("password", value);
  console.log("strength", strength);
  console.log("weaknesses", weaknesses);
  console.log("focus", isFocus);

  return (
    <>
      <GlobalReset />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#0d0d0d",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexBasis: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <StyledHeader>
            &lt;Pass<span>***</span>word strength meter/&gt;
          </StyledHeader>
          <ProgressBarr strength={strength} />
          <StyledInputBox isFocus={isFocus}>
            <input
              type="text"
              autoFocus={isFocus}
              placeholder="test your password"
              value={value}
              onChange={(e) => {
                setState({ ...state, value: e.target.value });
              }}
              onFocus={() => {
                setFocus(!isFocus);
              }}
              onBlur={() => {
                setFocus(!isFocus);
              }}
            />
            {isFocus && weaknesses.length > 0 && (
              <StyledCausesModal>
                {weaknesses.map((element) => (
                  <li>{element.message}</li>
                ))}
              </StyledCausesModal>
            )}
          </StyledInputBox>
        </div>
      </div>
    </>
  );
}

export default App;
