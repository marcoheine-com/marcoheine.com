import React from 'react';
import PropTypes from 'prop-types';
import * as ui from './ui';

const Main = ({ children }) => (
  <ui.Main>
    {children}
  </ui.Main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;