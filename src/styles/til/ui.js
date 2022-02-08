import styled from 'styled-components'

export const PageContent = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  gap: 40px;
  justify-content: center;

  margin: 80px auto 0;

  a {
    display: inline-block;
  }

  p {
    font-size: 18px;
    line-height: 1.5;

    @media (min-width: 600px) {
      font-size: 20px;
      line-height: 1.7;
    }
  }
`

export const Section = styled.section`
  box-shadow: 2px 2px 12px #d9d9d9;
  border-radius: 30px;
  color: ${({ theme }) => theme.primaryColorOne};
  padding: 30px;

  &:hover {
    aside {
      transform: rotate(0);
      color: #fff;
      background-color: ${({ theme }) => theme.primaryColorOne};
    }
  }
`

export const Aside = styled.aside`
  border: 3px dotted ${({ theme }) => theme.primaryColorOne};
  color: ${({ theme }) => theme.primaryColorOne};
  background-color: white;
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
  transform: rotate(10deg);
  padding: 5px 15px;
  transition: all 0.2s linear;
`

export const Slot = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export const PageHeader = styled.h1`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
`

export const Readmore = styled.span`
  color: ${({ theme }) => theme.primaryColorTwo};
  &::before {
    content: '→ ';
    color: ${({ theme }) => theme.primaryColorOne};
    margin-right: 4px;
    transition: margin linear 0.2s;
  }
  &:hover {
    color: ${({ theme }) => theme.linkHover};
    &:before {
      margin-right: 0px;
      margin-left: 4px;
    }
  }
`

export const Categories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  margin: 40px 0 0;

  li {
    margin: 0;
    &:not(:first-of-type) {
      margin-left: 16px;
    }
  }
`

export const Category = styled.li`
  background-color: ${({ bgColor }) => bgColor}};
`

export const tags = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14px;
`

export const tag = styled.span`
  font-size: 14x;
  font-weight: bold;
  &:not(:first-child) {
    margin-left: 10px;
  }
`
