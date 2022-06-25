import styled from 'styled-components'

export const IndexWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Headline = styled.h1`
  margin-bottom: 40px;
`

export const Hometext = styled.p`
  font-size: 24px;
  line-height: 1.5;
`

export const LinkSpan = styled.span`
  color: ${({ theme }) => theme.primaryColorTwo};

  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
`

export const Container = styled.div`
  justify-items: center;
  display: grid;
  gap: 20px;

  @media (min-width: 460px) {
    grid-template-columns: auto auto;
  }
`

export const ImgWrapper = styled.div`
  max-width: 300px;
  transition: all 0.4s linear;
  margin-bottom: 40px;

  .gatsby-image-wrapper {
    width: 200px;
  }
`

export const PageContent = styled.section`
  margin: 80px auto 0;
  max-width: 960px;

  p {
    font-size: 18px;
    line-height: 1.5;

    @media (min-width: 600px) {
      font-size: 20px;
      line-height: 1.7;
    }
  }
`

export const BlogHeadline = styled.h2`
  border-bottom: 6px solid ${({ theme }) => theme.primaryColorTwo};
  display: inline-block;
  margin-bottom: 76px;
`

export const Newlinks = styled.span`
  display: inline-block;
  margin-bottom: 100px;
`

export const Article = styled.article`
  color: ${({ theme }) => theme.primaryColorOne};
  display: flex;
  flex-direction: column;
  min-height: 120px;
  padding: 20px;
  transition: box-shadow 0.2s linear;
  &:hover {
    box-shadow: 2px 2px 12px #d9d9d9;
    border-radius: 10px;
  }

  h4 {
    margin-bottom: 8px;
  }
`

export const YearlySection = styled.section`
  margin-bottom: 60px;
`

export const NewArticleSlot = styled.section`
  margin-bottom: 76px;
`

export const NewArticle = styled.article`
  color: ${({ theme }) => theme.primaryColorOne};

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, auto);
    grid-column-gap: 50px;
    grid-row-gap: 20px;
  }

  p {
    margin-bottom: 10px;

    @media (min-width: 700px) {
      grid-column: 1 / 2;
    }
  }
`

export const ArticleHeadline = styled.h3`
  @media (min-width: 700px) {
    grid-column: 1 / 2;
    margin-bottom: 0;
  }
`

export const ArticleImageWrapper = styled.div`
  @media (min-width: 700px) {
    grid-column: 2 / 2;
    grid-row: 1 / -1;
  }
`

export const BlogArticle = styled.article`
  color: ${({ theme }) => theme.primaryColorOne};

  time {
    font-weight: normal;
  }
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

  @media (min-width: 700px) {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }
`

export const TILCard = styled.article`
  color: ${({ theme }) => theme.primaryColorOne};
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: box-shadow 0.2s linear;
  &:hover {
    box-shadow: 2px 2px 12px #d9d9d9;
    border-radius: 10px;
  }
`

export const BlogLink = styled.span`
  align-self: flex-start;
  color: ${({ theme }) => theme.primaryColorTwo};
  margin-top: auto;
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

export const Time = styled.time`
  font-size: 16px;
  color: ${({ theme }) => theme.grey};

  @media (min-width: 700px) {
    grid-column: 1 / 2;
  }
`

export const PostOuterWrapper = styled.section`
  width: 100%;
`

export const TILInnerWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px;
`

export const PageHeader = styled.h1`
  text-align: center;
  margin-bottom: 0;
`

export const WaveHand = styled.span`
  display: inline-block;
  transition: transform;
  transform: rotate(-20deg);
  animation: wave 0.7s linear 1;

  @keyframes wave {
    0% {
      transform: rotate(-20deg);
    }
    25% {
      transform: rotate(60deg) scale(2);
    }
    50% {
      transform: rotate(-20deg) scale(2);
    }
    75% {
      transform: rotate(60deg) scale(2);
    }
    100% {
      transform: rotate(-20deg) scale(1);
    }
  }
`
