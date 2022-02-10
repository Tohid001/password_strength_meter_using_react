import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Fira+Sans:wght@100;200;500&family=Poppins:wght@400;700&family=Roboto+Slab:wght@600&display=swap");


 *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: "Trebuchet MS", sans-serif; */
  scroll-behavior:smooth;
  font-family: 'Fira Code', monospace;
  
}
&:root{--header:#081621;--iconActiveColor:rgb(235, 52, 131);--vh:${(props) => {
  console.log(props.vh);
  return props.vh;
}}}

/* body{
    display:flex;
    justify-content:center;
    align-items:center;
    background:#e8b5b5;
    min-height:100vh;
    
    
} */
`;
