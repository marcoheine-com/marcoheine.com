import styled from 'styled-components'

export const NavIcon = styled.button`
  background-color: #fff;
  border: 0;
  cursor: pointer;
  height: 40px;
  right: 5%;
  outline: 0;
  position: absolute;
  top: 26px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  width: 35px;
  @media (min-width: 560px) {
    top: 32px;
  }

  @media (min-width: 850px) {
    display: none;
  }
`
export const NavIconSpan = styled.span`
  background: ${({ theme }) => theme.primaryColorTwo};
  height: 3px;
  left: 0;
  opacity: 1;
  outline: 0;
  position: absolute;
  transform: rotate(0deg);
  transition: 0.3s ease-in-out;
  width: 100%;

  &:nth-child(1) {
    top: 0px;
    transform-origin: left center;
    ${({ isToggled }) =>
      isToggled &&
      `
      transform: rotate(45deg);
      top: 0px;
      left: 0px;
    `};
  }

  &:nth-child(2) {
    top: 10px;
    transform-origin: left center;
    ${({ isToggled }) =>
      isToggled &&
      `
      opacity: 0;
      transform: translateX(-20px);
      width: 0%;
    `};
  }

  &:nth-child(3) {
    top: 20px;
    transform-origin: left center;
    ${({ isToggled }) =>
      isToggled &&
      `
      transform: rotate(-45deg);
      top: 25px;
      left: 0px;
    `};
  }
`

export const Nav = styled.nav`
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s ease-out;
  text-align: center;
  ${({ isToggled }) =>
    isToggled &&
    `
    max-height: 600px;
    opacity: 1;
    overflow: hidden;
    transform: translateY(40px);
  `}
  @media (min-width: 850px) {
    display: flex;
    max-height: 100px;
    opacity: 1;
    padding-top: 10px;
    text-align: right;
    transform: translate(0);
  }
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
  margin-left: 0;
  padding-bottom: 40px;
  @media (min-width: 850px) {
    flex-direction: row;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

export const ListItem = styled.li`
  font-size: 22px;
  text-transform: uppercase;
  ${({ isToggled }) =>
    isToggled &&
    `
    width: 100%;
    @media (min-width: 850px) {
      width: auto;
    }
  `};

  a {
    color: ${({ theme }) => theme.primaryColorOne};
    display: block;
    padding: 8px 16px;

    &:hover {
      background-color: ${({ theme }) => theme.primaryColorTwo};
      color: #fff;
    }
  }
  @media (min-width: 850px) {
    display: inline;
    font-size: 16px;
    text-transform: none;
    margin-bottom: 0;
  }

  @media (min-width: 850px) {
    font-size: 20px;
  }
`
