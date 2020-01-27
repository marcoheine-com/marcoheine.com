import React from 'react';
import PropTypes from 'prop-types';
import * as ui from './ui';

const Card = ({ h1, h2, textContent }) => (
  <ui.CardContainer>
    {h1 && <h1>{h1}</h1>}
    {h2 && <h2>{h2}</h2>}
    {textContent && <ui.Text>{textContent}</ui.Text>}
  </ui.CardContainer>
);

Card.propTypes = {
  h1: PropTypes.string.isRequired,
  h2: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  textContent: PropTypes.object.isRequired,
};

Card.defaultProps = {
  h2: '',
};

export default Card;
