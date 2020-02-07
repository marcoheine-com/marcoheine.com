import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import { til } from '../constants/cardData';
import tilData from '../constants/tilData';
import theme from '../styles/theme';
import * as ui from '../styles/til/ui';

const TIL = () => {
  const reversedData = tilData && [...tilData].reverse();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Today I learned" />
        <Card h1={til.h1} textContent={til.textContent} />
        <ui.PageContent>
          {reversedData.map(({ id, firstParagraph, secondParagraph, url }) => (
            <ui.Section key={id}>
              <ui.Aside>TIL #{id}</ui.Aside>
              <section>
                <p>{firstParagraph}</p>
                {secondParagraph && <p>{secondParagraph}</p>}
                {url && (
                  <>
                    <span>Learn more: </span>
                    <a href={url}>{url}</a>
                  </>
                )}
              </section>
            </ui.Section>
          ))}
        </ui.PageContent>
      </Layout>
    </ThemeProvider>
  );
};

export default TIL;
