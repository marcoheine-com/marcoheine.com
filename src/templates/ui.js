import styled from 'styled-components'

export const PageContent = styled.section`
  margin: 80px auto 0;
  max-width: 650px;

  h3 {
    padding-top: 12px;
  }

  h3 > a {
    text-decoration: none;
    &:hover {
      color: inherit;
      text-decoration: none;
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

  ul {
    font-size: 18px;

    @media (min-width: 600px) {
      font-size: 20px;
  }
`

export const GoBackSpan = styled.span`
  display: block;
  margin-bottom: 16px;
  &::before {
    content: '← ';
  }
`

export const PageHeader = styled.h1`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
`

export const BlogPostHeader = styled.section`
  display: flex;
  gap: 20px;
`
