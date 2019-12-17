import React from "react";
import PropTypes from "prop-types";
import * as ui from "./ui";

const Card = ({ h1, h2, textContent }) => {
  if (h1) {
    return (
      <ui.CardContainer>
        <h1>{h1}</h1>
        <h2>{h2}</h2>
        <ui.Text>{textContent}</ui.Text>
      </ui.CardContainer>
    );
  } else {
    return null;
  }
};

Card.propTypes = {
  h1: PropTypes.string.isRequired,
  h2: PropTypes.string,
  textContent: PropTypes.object.isRequired,
};

export default Card;
