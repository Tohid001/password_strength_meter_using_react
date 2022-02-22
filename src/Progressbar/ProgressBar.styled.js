import styled from "styled-components";

export const StyledBox = styled.div`
  /* flex-basis: 100%; */
  position: relative;
  background: transparent;
  & div {
    position: absolute;
    color: ${({ strength }) => (strength === 100 ? "green" : "#fff")};
    font-size: ${({ strength }) => (strength === 100 ? "1.2rem" : "3rem")};
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    z-index: 2;
  }
`;

export const StyledSvg = styled.svg`
  --dashArray: calc(2 * 3.1416 * 85);
  width: 200px;
  height: 200px;
  transform: rotate(-90deg);

  & circle {
    fill: none;
    stroke-width: 15px;
    &:nth-child(1) {
      stroke: #666;
    }
    &:nth-child(2) {
      transition: all 300ms linear;
      stroke: ${({ strength }) => (strength === 100 ? "green" : "#ff9f1e")};
      stroke-linecap: round;
      stroke-dasharray: var(--dashArray);
      stroke-dashoffset: ${({ strength }) =>
        ` calc(var(--dashArray) * (1 - ${strength / 100}))`};
    }
  }
`;
