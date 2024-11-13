import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const CustomSwalStyles = css`
  .custom-confirm-button {
    font-family: "DungGeunMo";
    color: black;
    border: 2px solid black;
  }

  .custom-text {
    font-family: "DungGeunMo";
    color: black !important;
  }
`;

export const GlobalStyles = createGlobalStyle`
    ${reset}
    ${CustomSwalStyles}
    @font-face {
        font-family: 'DungGeunMo';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
        font-weight: normal;
        font-style: normal;
}
`;
