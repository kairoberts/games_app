import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat', sans-serif;
  width: 100%;
}
h1 {
  font-size: 3rem;
}
h3 {
  font-size: 1.3rem;
}
a {
  text-decoration: none;
  color: black
}
img {
  display: block;
}
input {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;


}
`;

export default GlobalStyles;
