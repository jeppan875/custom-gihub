import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  html {
    background-color: #c5ccd8;
  }
`;
export default function GlobalStyle() {
    return (
        <div>
            <GlobalStyles />
        </div>
    );
}