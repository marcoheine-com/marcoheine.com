import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.primaryColorTwo};
  color: #fff;
  font-size: 14px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;

  a {
    color: #fff;
    border-bottom: none;
  }
`;

export const BackToTop = styled.p`
  font-size: 12px;
  margin: 0;
  padding-bottom: 30px;
`;

export const ListItem = styled.li`
  display: inline;
  padding-right: 20px;
  border-bottom: none;

  nth-last-child(1) {
    padding-right: 0px;
  }
`;

export const Svg = styled.svg`
  transition: all .2s linear;
  &:hover {
    fill: ${({ theme }) => theme.primaryColorOne};
  }
`;

export const Link = styled.a`
  border-bottom: 3px solid #fff;
  transition: .2s all ease-out;
  padding: 0 1px 0 1px;
  &:hover {
    background-color: #fff;
    border-bottom: 3px solid #fff;
    color: ${({ theme }) => theme.primaryColorTwo};
  }
`;

export const Heart = styled.svg`
  animation: move 4s ease-in-out infinite;
  fill: #fff;
  padding: 3px;
  width: 18px;
  @keyframes move {
    0% {
     -webkit-transform: translateY(4px);
             transform: translateY(4px);
   }
    50% {
      -webkit-transform: translateY(-1px);
              transform: translateY(-1px);
      -webkit-transform: scale(1.3);
              transform: scale(1.3);
    }
    100% {
      -webkit-transform: translateY(4px);
              transform: translateY(4px);
    }
  }
`;
