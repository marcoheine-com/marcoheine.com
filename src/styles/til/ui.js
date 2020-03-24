import styled from 'styled-components';

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

export const Section = styled.section`
  box-shadow: 2px 2px 12px #d9d9d9;
  border-radius: 30px;
  padding: 30px;
  &:not(:last-of-type) {
    margin-bottom: 60px;
  }

  &:hover {
    aside {
      transform: rotate(0);
    }
  }
`;

export const Aside = styled.aside`
  background-color: #000;
  color: #fff;
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
  transform: rotate(10deg);
  padding: 10px 20px;
  transition: transform 0.3s linear;

  &:hover {
    transform: rotate(0);
  }
`;
