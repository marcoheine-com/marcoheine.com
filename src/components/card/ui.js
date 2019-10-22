import styled from 'styled-components';

export const CardContainer = styled.section`
  background-color: ${({ theme }) => theme.primaryColorTwo};
  color: #fff;
  margin-bottom: 50px;
  padding: 30px;
  position: relative;

  @media(min-width: 970px) {
    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      border: 2px solid
      #000;
      top: 20px;
      left: 20px;
      pointer-events: none;
    }
  }

`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
`;