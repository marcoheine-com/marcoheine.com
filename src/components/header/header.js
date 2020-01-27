import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Navigation from '../navigation';
import * as ui from './ui';

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <ui.HeaderWrapper>
      <ui.Header>
        <ui.Headline>
          <Link to="/">
            {data.site.siteMetadata.author}
            <ui.Blink>_</ui.Blink>
          </Link>
        </ui.Headline>

        <Navigation />
      </ui.Header>
    </ui.HeaderWrapper>
  );
};

export default Header;
