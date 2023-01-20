import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'popins', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(142,4,246,1) 52%, rgba(214,2,236,1) 100%);
    }

    #root {
        width: 100%;
    }
`;

export default GlobalStyle;