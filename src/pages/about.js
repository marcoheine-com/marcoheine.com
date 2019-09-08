import React from "react"
import { ThemeProvider } from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"
import theme from '../styles/theme';

const About = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="About" />
      About page
    </Layout>
  </ThemeProvider>
);

export default About;
