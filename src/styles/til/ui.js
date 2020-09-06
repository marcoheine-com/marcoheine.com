import styled from 'styled-components';

export const PageContent = styled.section`
  margin: 80px auto 0;
  max-width: 650px;

  a {
    display: inline-block;
    &:not(:last-of-type) {
      margin-bottom: 60px;
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
  color: ${({ theme }) => theme.primaryColorOne};
  padding: 30px;

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

export const Slot = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const PageHeader = styled.h1`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
`;
