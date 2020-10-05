import styled from 'styled-components';

export const IndexWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
    max-width: 500px;
    text-align: center;
  }
`;

export const Headline = styled.h1`
  margin-bottom: 40px;
`;

export const Hometext = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  line-height: 1.5;
`;

export const LinkSpan = styled.span`
  color: ${({ theme }) => theme.primaryColorTwo};

  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;

export const ImgWrapper = styled.div`
  max-width: 300px;
  transition: all 0.4s linear;
  margin-bottom: 40px;

  &:hover {
    opacity: 0.7;
    transform: scale(1.03);
  }

  .gatsby-image-wrapper {
    width: 200px;
  }
`;

export const PageContent = styled.section`
  margin: 80px auto 0;
  max-width: 650px;

  a {
    display: inline-block;
    &:not(:last-of-type) {
      margin-bottom: 100px;
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
`;

export const BlogArticle = styled.article`
  color: ${({ theme }) => theme.primaryColorOne};

  p {
    margin-bottom: 10px;
  }
`;

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
`;

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
`;

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
`;

export const Time = styled.time`
  font-size: 16px;
`;

export const PostOuterWrapper = styled.section`
  width: 100%;
`;

export const BlogPostWrapper = styled.section`
  margin-bottom: 60px;
`;

export const PostInnerWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px;
`;

export const PageHeader = styled.h1`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
`;
