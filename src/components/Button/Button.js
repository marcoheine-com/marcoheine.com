import React from 'react';
import PropTypes from 'prop-types';
import * as ui from './ui';

const Button = ({ children, onClick }) => {
  return (
    <ui.Button onClick={onClick} type="button">
      {children}
    </ui.Button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
