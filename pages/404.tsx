import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';
import * as ui from '../styles/index/ui';

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="404: Not found" />
      <ui.PageContent>
        <h1>Oh no!</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </ui.PageContent>
    </Layout>
  </ThemeProvider>
);

export default NotFoundPage;
