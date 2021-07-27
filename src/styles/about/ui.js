import styled from 'styled-components';

export const PageContent = styled.section`
  margin: 80px auto 0;

  p {
    font-size: 18px;
    line-height: 1.5;

    @media (min-width: 600px) {
      font-size: 20px;
      line-height: 1.7;
    }
  }
`;

export const Container = styled.div`
  max-width: 650px;
  margin: 0 auto 80px;
`;

export const TwoColumnGrid = styled.div`
  justify-content: center;
  display: grid;
  gap: 20px;

  @media (min-width: 460px) {
    grid-template-columns: auto auto;
  }
`;

export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
  grid-gap: 60px;
  margin: 0 0 80px;
  max-width: 1400px;
  justify-content: center;

  li {
    list-style-type: none;
  }
`;

export const CenteredText = styled.h2`
  text-align: center;
`;
