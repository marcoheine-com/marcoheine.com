import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Navigation from "../navigation";
import * as ui from "./ui";

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
        <Link to="/">
          <ui.Headline>
            {data.site.siteMetadata.author}
            <ui.Blink>_</ui.Blink>
          </ui.Headline>
        </Link>

        <Navigation />
      </ui.Header>
    </ui.HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
