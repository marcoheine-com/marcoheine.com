import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';
import * as ui from '../styles/index/ui';

const LegalNotice = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Legal notice" />
      <ui.PageHeader>Legal Notice</ui.PageHeader>
      <ui.PageContent>
        <p>Marco Kühbauch</p>
        <p>Strohberg 26</p>
        <p>70180 Stuttgart </p>
        <p>Germany</p>
        <a href="mailto:marcokuehbauch@gmail.com">marcokuehbauch@gmail.com</a>
      </ui.PageContent>
    </Layout>
  </ThemeProvider>
);

export default LegalNotice;
