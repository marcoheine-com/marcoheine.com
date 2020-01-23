import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';
import Main from './main';
import './layout.css';

const HorizontalLine = styled.hr`
  border-top: 6px solid ${({ theme }) => theme.primaryColorTwo};
  margin: 0;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const Layout = ({ children }) => (
  <>
    <HorizontalLine />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
