import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'DungGeunMo';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
        font-weight: normal;
        font-style: normal;
}
`;
