import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  border-top: 6px solid ${({ theme }) => theme.primaryColorTwo};
  transition: .2s all ease-out;
  &:hover {
    box-shadow: -2px 2px 5px #ccc;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 710px) {
    flex-direction: row;
  }
`;

export const Headline = styled.h1`
  font-size: 20px;
  padding-top: 10px;
  @media (min-width: 560px) {
    font-size: 28px;
    padding-top: 5px;
  }
  @media (min-width: 860px) {
    font-size: 32px;
  }
  a:hover {
    border-bottom: none;
  }
`;

export const Blink = styled.span`
  animation: blink 1s infinite steps(1);
  color: ${({ theme }) => theme.primaryColorTwo};
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;