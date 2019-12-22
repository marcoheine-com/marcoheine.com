import styled from "styled-components";

export const Headline = styled.h1`
  margin-bottom: 40px;
  text-align: center;
`;

export const Hometext = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  line-height: 1.5;
  text-align: center;
`;

export const ImgWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto 40px auto;
  transition: all 0.4s linear;

  &:hover {
    transform: scale(1.03);
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

  p {
    font-size: 20px;
    line-height: 1.7;
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
