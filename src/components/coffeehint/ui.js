import styled from 'styled-components';

export const CoffeeHint = styled.section`
  background-color: #edf6ff;
  padding: 20px 40px 10px 40px;
  margin-bottom: 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    margin-left: 30px;
  }
`;

export const CoffeeLink = styled.a`
  align-self: center;
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #79d6b5;
  color: white;
  font-weight: bold;
  border-radius: 5px;

  &:hover {
    color: white;
  }
`;
