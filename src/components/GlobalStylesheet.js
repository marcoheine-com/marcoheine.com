import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a {
    color: ${({ theme }) => theme.primaryColorTwo};

    &:hover {
      color: ${({ theme }) => theme.linkHover};
    }
  }

  p {
    color: ${({ theme }) => theme.text};

  }
`;

export default GlobalStyle;
