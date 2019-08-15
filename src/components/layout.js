import React from "react";
import PropTypes from "prop-types";

import Header from "./header/header";
import Footer from './footer/footer';
import Main from './main/main';
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
