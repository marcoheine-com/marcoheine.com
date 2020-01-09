import styled from "styled-components";

export const PageContent = styled.section`
  margin: 0 auto;
  max-width: 650px;

  a {
    text-decoration: underline;
    &:hover {
      color: ${({ theme }) => theme.primaryColorTwo};
      text-decoration: underline dotted;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.5;

    @media (min-width: 600px) {
      font-size: 20px;
      line-height: 1.7;
    }
  }
`;

export const Aside = styled.aside`
  background-color: #000;
  color: #fff;
  display: inline-block;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  transform: rotate(10deg);
  padding: 10px;
  transition: transform 0.3s linear;

  &:hover {
    transform: rotate(0);
  }
`;
