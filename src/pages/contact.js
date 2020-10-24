import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';
import * as ui from '../styles/index/ui';

const Contact = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Contact" />
      <ui.PageHeader>Contact</ui.PageHeader>
      <ui.PageContent>
        <p>Thanks for your interest in getting in touch!</p>
        <p>
          If you have a question about one of my blog posts or one of my
          today-I-learned posts feel free to send me an email.{' '}
        </p>
        <p>
          You can reach out to me via email at{' '}
          <a href="mailto:marcokuehbauch@gmail.com">marcokuehbauch@gmail.com</a>
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
