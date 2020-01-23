import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import { til } from '../constants/cardData';
import theme from '../styles/theme';
import * as ui from '../styles/til/ui';

const TIL = () => {
  const data = [
    {
      id: 1,
      content:
        'A collegue of mine teached us about her insights from a web security conference. A major part was, how much bad stuff HTTP desync attacks can do.',
      url:
        'https://portswigger.net/research/http-desync-attacks-request-smuggling-reborn',
    },
    {
      id: 2,
      content:
        'Using NULL as your car licence is not the best idea.  If you also want to know why, the link below tells an interesting story about this topic.',
      url:
        'https://www.wired.com/story/null-license-plate-landed-one-hacker-ticket-hell/#',
    },
    {
      id: 3,
      content:
        'Today I learned that I want to depend less on other peoples code. It happened more than once to me, that a very tiny npm package made the whole application crash. The maintainer published a broken release and the dependancies of this package required this update.',
      url: '',
    },
    {
      id: 4,
      content:
        'Hugo Giraudel wrote on his blog about how N26 is delivering a JavaScript and a non JavaScript experience. I could find a lot of interesting insights about how they managed to do that.',
      url: 'https://hugogiraudel.com/2020/01/20/n26-and-lack-of-javascript/',
    },
    {
      id: 5,
      content:
        'A few days ago a new babel version was released, which means you can use the latest ECMASCRIPT 2020 features without any additional plugins, besides babel. Nullish Coalescing and optional chaining in production, whoop whoop!',
      url: 'https://babeljs.io/blog/2020/01/11/7.8.0',
    },
  ];

  const reversedData = data && [...data].reverse();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Today I learned" />
        <Card h1={til.h1} textContent={til.textContent} />
        <ui.PageContent>
          {reversedData.map(({ id, content, url }) => (
            <ui.Section key={id}>
              <ui.Aside>TIL #{id}</ui.Aside>
              <section>
                <p>{content}</p>
                {url && <a href={url}>Learn more</a>}
              </section>
            </ui.Section>
          ))}
        </ui.PageContent>
      </Layout>
    </ThemeProvider>
  );
};

export default TIL;
