import styled from "styled-components";

export const StyledHeader = styled.div`
  font-weight: 700;
  font-size: 2rem;
  /* background-color: red; */
  flex-basis: 100%;
  text-align: center;
  color: white;
  & span {
    text-align: center;
    display: inline-block;
    line-height: 2rem;
  }
`;

// export const StyledStrengthMeter = styled.div`
//   width: 40%;
//   text-align: center;
//   color: white;
//   font-size: 1rem;
//   padding: 0.5em 0;
//   border-radius: 1.5rem;
//   overflow: hidden;
//   position: relative;
//   z-index: 1;

//   &:before {
//     content: "";
//     position: absolute;
//     background: #ff9f1e;
//     height: 100%;
//     left: 0;
//     top: 0;
//     width: ${(props) => {
//       return `calc(1% * ${props.length})`;
//     }};
//     z-index: -1;
//   }

//   &:after {
//     content: "";
//     position: absolute;
//     background: #666;
//     left: 0;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     z-index: -2;
//   }
// `;

export const StyledInputBox = styled.div`
  flex-basis: 100%;
  display: grid;
  place-items: center;
  margin-top: -1.5rem;
  & input {
    /* outline: ${({ isFocus }) => (isFocus ? "1px solid #f200ff" : null)}; */
    text-align: center;
    border: none;
    width: 30%;
    padding: 1em;
    font-size: 1rem;
    border-radius: 1.5em;
    background: #d4cfcf;
    transition: all 200ms linear;
    &:focus {
      /* border: 1px solid lightgoldenrodyellow; */
      outline: none;
      background: #f0eded;
    }
  }
`;

export const StyledCausesModal = styled.ul`
  padding: 20px;
  width: 25%;
  /* height: 300px; */
  border-radius: 0 0 10px 10px;
  background: black;
  /* box-shadow: 0 10px 10px #2e2323, 0 15px 12px #2e2323; */
  box-shadow: 0 10px 20px #362f2f, 0 6px 6px #362f2f;
  color: #805012;
`;
