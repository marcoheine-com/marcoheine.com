import React from "react";
import { ThemeProvider } from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card';
import { til } from '../constants/cardData';
import theme from '../styles/theme';


const TIL = () => {
  const data = [
    {
      id: 1,
      title: 'first',
      content:
        <>
          <span>This is the first Content</span>
          <span>And some more content</span>
        </>
    },
    {
      id: 2,
      title: 'second',
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Today I learned" />
        <Card
          h1={til.h1}
          textContent={til.textContent}
        />
        {data.map(item => (
          <section key={item.id}>
            <h3>
              {item.title}
            </h3>
            <p>
              {item.content}
            </p>
          </section>
        ))}
      </Layout>
    </ThemeProvider>
  )
};

export default TIL;