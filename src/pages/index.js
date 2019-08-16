import React from "react";
import { Link } from "gatsby";
import { ThemeProvider } from 'styled-components';

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import theme from '../styles/theme';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <h1>Hi! My name is Marco and I'm a Frontend Web Developer.</h1>
      <p>I like to build responsive, accessible and fast websites and frontend experiences for every device and every browser.</p>
      <Link to='/about'>Learn more about me </Link> 
      or 
      <Link to='/blog'> read my blog</Link>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
