import { DefaultTheme } from 'styled-components';

const colors = {
    colorPrimary: 'dodgerblue',

    colorBackground: 'black',
    colorOnBackground: 'white',
};

const dimens = {
    margin: '1rem',
    gutter: '0.5rem',
    spacing: '0.25rem',
};

const text = {
    h1:      { fontSize: '3rem' },
    h2:      { fontSize: '2rem' },
    h3:      { fontSize: '1.5rem' },
    h4:      { fontSize: '1.25rem' },
    h5:      { fontSize: '1.125rem' },
    h6:      { fontSize: '1rem' },
    body1:   { fontSize: '1rem' },
    body2:   { fontSize: '0.875rem' },
    caption: { fontSize: '0.75rem' },
}

const shadows = {
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.10)',
    lv2: '0 1px 3px 0 rgba(0, 0, 0, 0.30)',
};

export interface NormalTheme extends DefaultTheme {
    colors: typeof colors
    dimens: typeof dimens
    text: typeof text
    shadows: typeof shadows
}

const normalTheme: NormalTheme = {
    colors,
    dimens,
    text,
    shadows,
};

export default normalTheme;
