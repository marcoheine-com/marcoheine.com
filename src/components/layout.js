import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';
import Main from './main';
import './layout.css';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HorizontalLine = styled.hr`
  border-top: 6px solid ${({ theme }) => theme.primaryColorTwo};
  margin: 0;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const Layout = ({ children }) => (
  <Page>
    <HorizontalLine />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Page>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
