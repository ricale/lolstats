import { createGlobalStyle } from 'styled-components';

import { NormalTheme } from './normal';

const getGlobalStyle = (theme: NormalTheme) => createGlobalStyle`
html,body,
    h1,h2,h3,h4,h5,h6,
    p,
    input, button {
        margin: 0;
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: normal;
    }
    h1 { font-size: ${theme.text.h1.fontSize}; }
    h2 { font-size: ${theme.text.h2.fontSize}; }
    h3 { font-size: ${theme.text.h3.fontSize}; }
    h4 { font-size: ${theme.text.h4.fontSize}; }
    h5 { font-size: ${theme.text.h5.fontSize}; }
    h6 { font-size: ${theme.text.h6.fontSize}; }

    a {
        text-decoration: none;
        color: ${theme.colors.colorOnBackground};
    }

    body {
        background-color: ${theme.colors.colorBackground};
        color: ${theme.colors.colorOnBackground};
        font-size: 16px;
        font-family: 'Nanum Gothic', sans-serif;
    }

    html, body, #app {
        height: 100%;
    }

    input,
    textarea,
    select,
    button {
        -webkit-appearance: none;
        -moz-appearance: none;
        font-family: 'Nanum Gothic', sans-serif;
        border: 0;
        outline: none;
    }

    * {
        box-sizing: border-box;
    }

    th {
        font-weight: normal;
    }

    ::-webkit-scrollbar {
        background: transparent;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: gray;
        border-top: 1px solid ${theme.colors.colorBackground};
        border-left: 2px solid ${theme.colors.colorBackground};
        border-right: 2px solid ${theme.colors.colorBackground};
        border-bottom: 1px solid ${theme.colors.colorBackground};
        border-radius: 5px;
    }
`;

export default getGlobalStyle;
