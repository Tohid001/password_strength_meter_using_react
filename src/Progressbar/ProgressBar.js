import React from "react";

import { StyledBox, StyledSvg } from "./ProgressBar.styled";

function ProgressBar({ strength }) {
  return (
    <StyledBox strength={strength}>
      <div>
        {strength === 100 ? (
          <span>&#10004;</span>
        ) : (
          <span>{`${strength}%`}</span>
        )}
      </div>
      <StyledSvg strength={strength}>
        <circle r="85" cx="100" cy="100" />
        <circle r="85" cx="100" cy="100" />
      </StyledSvg>
    </StyledBox>
  );
}

export default ProgressBar;
