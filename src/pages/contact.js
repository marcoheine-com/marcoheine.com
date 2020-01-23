import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import { contact } from '../constants/cardData';
import theme from '../styles/theme';
import * as ui from '../styles/index/ui';

const Contact = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Contact" />
      <Card h1={contact.h1} textContent={contact.textContent} />
      <ui.PageContent>
        <p>
          You can reach out to me via email at{' '}
          <a href="mailto:marco@marcokuehbauch.com">marco@marcokuehbauch.com</a>
          .
        </p>
        <p>
          You can also find me on Twitter at{' '}
          <a href="https://twitter.com/Mkuehb">@mkuehb.</a>
        </p>
        <p>
          A few samples of my work as well as the source code of this website
          are available on <a href="https://github.com/mkuehb">GitHub</a>.
        </p>
      </ui.PageContent>
    </Layout>
  </ThemeProvider>
);

export default Contact;
