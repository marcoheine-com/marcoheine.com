import React from "react";
import { Link } from "gatsby";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import { contact } from "../constants/cardData";
import theme from "../styles/theme";
import * as ui from "../styles/index/ui";

const Contact = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Contact" />
      <Card h1={contact.h1} textContent={contact.textContent} />
      <ui.PageContent>

      </ui.PageContent>
    </Layout>
  </ThemeProvider>
);

export default Contact;
