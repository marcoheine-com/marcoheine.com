import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  transition: 0.2s all ease-out;
  &:hover {
    box-shadow: -2px 2px 5px #ccc;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 850px) {
    flex-direction: row;
  }
`

export const Headline = styled.span`
  display: inline-block;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: 'Merriweather', sans-serif;
  @media (min-width: 560px) {
    font-size: 28px;
  }
  @media (min-width: 860px) {
    font-size: 32px;
  }
  a {
    color: ${({ theme }) => theme.primaryColorOne};
    font-family: inherit;
    text-decoration: none;

    &:hover {
      border-bottom: none;
    }
  }
`

export const Blink = styled.span`
  animation: blink 1s infinite steps(1);
  color: ${({ theme }) => theme.primaryColorTwo};
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`
