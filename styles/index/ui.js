import styled from 'styled-components'

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
