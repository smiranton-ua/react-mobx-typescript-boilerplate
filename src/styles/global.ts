import { createGlobalStyle } from 'styled-components';

import { grey } from 'src/styles/colors';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${grey};
  }
`;
