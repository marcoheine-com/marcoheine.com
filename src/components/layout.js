import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from './footer';
import Main from './main';
import "./layout.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
