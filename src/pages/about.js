import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"
import theme from '../styles/theme';

const SecondPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="About" />
      About page
    </Layout>
  </ThemeProvider>
)

export default SecondPage
