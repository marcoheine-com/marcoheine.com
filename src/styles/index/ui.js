import styled from 'styled-components';

export const OuterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
    position: relative;
  }
  @media (min-width: 1050px) {
    align-items: normal;
    flex-direction: row;
    margin-bottom: 80px;
  }
`;

export const InnerWrapper = styled.section`
  @media (min-width: 1050px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 40px;
  }
`;

export const Headline = styled.h1`
  margin-bottom: 40px;
  text-align: center;
  @media (min-width: 500px) {
    position: absolute;
    top: 40px;
    text-align: left;
    z-index: 1;
    left: 200px;
  }
`;

export const Hometext = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  line-height: 1.5;
  text-align: center;
  @media (min-width: 1050px) {
    text-align: left;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 300px;
  transition: all 0.4s linear;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.7;
    transform: scale(1.03);
  }

  .gatsby-image-wrapper {
    width: 300px;
  }

  @media (min-width: 500px) {
    align-self: flex-start;
  }

  @media (min-width: 1050px) {
    margin-bottom: 0;
  }
`;

export const LinkWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  @media (min-width: 590px) {
    flex-direction: row;
    justify-content: center;
  }
  @media (min-width: 1050px) {
    margin-bottom: 0;
    justify-content: flex-start;
  }
`;

export const HomeLinks = styled.span`
  &:not(:last-of-type) {
    margin-bottom: 30px;

    @media (min-width: 590px) {
      margin-bottom: 0;
      margin-right: 20px;
    }
  }

  a {
    border: 2px solid ${({ theme }) => theme.primaryColorTwo};
    display: block;
    padding: 20px;
    text-align: center;
    transition: all 0.1s linear;
    width: 250px;

    &:hover {
      background-color: ${({ theme }) => theme.primaryColorTwo};
      color: #fff;
    }
  }
`;

export const BlogLink = styled.span`
  color: ${({ theme }) => theme.primaryColorTwo};
  text-decoration: underline;
  &:hover {
    text-decoration: underline dotted;
  }
`;

export const PageContent = styled.section`
  margin: 0 auto;
  max-width: 650px;

  a {
    text-decoration: underline;
    &:hover {
      color: ${({ theme }) => theme.primaryColorTwo};
      text-decoration: underline dotted;
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

export const Article = styled.article`
  &:not(:last-of-type) {
    margin-bottom: 60px;
  }
`;

export const ArticleLink = styled.span`
  text-decoration: underline;
  &:hover {
    color: ${({ theme }) => theme.primaryColorTwo};
    text-decoration: underline dotted;
  }
`;

export const Time = styled.time`
  font-style: italic;
`;

export const PostOuterWrapper = styled.section`
  @media (min-width: 680px) {
    display: flex;
    justify-content: space-around;
  }
  @media (min-width: 900px) {
    flex-direction: column;
  }
`;

export const BlogPostWrapper = styled.section`
  @media (min-width: 900px) {
    margin-bottom: 60px;
  }
`;

export const PostInnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
