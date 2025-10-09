import { createGlobalStyle } from 'styled-components';
import font from './assets/fonts/PxPlus_IBM_VGA8.ttf';

export const Colors = {
     primary: '#202020',
};

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'PerfectDOSVGA';
    src: url('${font}') format('truetype');
    font-weight: normal;
    font-style: normal;
    
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: ${Colors.primary};
        font-family: 'PerfectDOSVGA', monospace;
        color: #fff;
    }

    
`;
