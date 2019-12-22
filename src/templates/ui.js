import styled from "styled-components";

export const PageContent = styled.section`
  margin: 0 auto;
  max-width: 650px;

  h3 {
    padding-top: 12px;
  }

  a {
    text-decoration: underline;
    &:hover {
      color: ${({ theme }) => theme.primaryColorTwo};
      text-decoration: underline dotted;
    }
  }

  h3 > a {
    text-decoration: none;
    &:hover {
      color: inherit;
      text-decoration: none
    }
  }

  p {
    font-size: 20px;
    line-height: 1.7;
  }
`;

export const GoBackSpan = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.primaryColorTwo};
    text-decoration: underline dotted;
  }

  a {
    display: block
  }
`;