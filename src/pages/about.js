import React from "react"
import { ThemeProvider } from 'styled-components';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from '../components/card';
import { about } from '../constants/cardData'
import theme from '../styles/theme';

const About = () => {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="About" />
        <Card
          h1={about.h1}
          h2={about.h2}
          textContent={about.textContent}
        />
        About page
      </Layout>
    </ThemeProvider>
  );
};

export default About;
