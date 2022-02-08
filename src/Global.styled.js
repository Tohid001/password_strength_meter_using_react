import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
 *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Trebuchet MS", sans-serif;
  scroll-behavior:smooth;
  
}
&:root{--header:#081621;--iconActiveColor:rgb(235, 52, 131);--vh:${(props) => {
  console.log(props.vh);
  return props.vh;
}}}
`;
