import { useContext } from 'react';
import * as styledComponents from 'styled-components';

import normalTheme, { NormalTheme } from './normal';
import getGlobalStyle from './getGlobalStyle';

const {
    default: styled,
    css,
    keyframes,
    ThemeProvider,
    ThemeContext,
    // @ts-ignore
} = styledComponents as styledComponents.ThemedStyledComponentsModule<NormalTheme>;

const GlobalStyle = getGlobalStyle(normalTheme);

function useTheme() {
    return useContext<NormalTheme>(ThemeContext);
}

export {
    normalTheme,
    NormalTheme,
    css,
    keyframes,
    ThemeProvider,
    GlobalStyle,
    useTheme,
};

export default styled;
