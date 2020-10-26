import React from 'react';
import * as ui from './ui';

const CoffeeLink = () => (
  <ui.CoffeeLink
    href="https://www.buymeacoffee.com/marcokuehbauch"
    rel="noopener noreferrer"
    target="_blank"
  >
    <span role="img" aria-label="coffee emoji">
      ☕️
    </span>{' '}
    Buy me a coffee{' '}
    <span role="img" aria-label="coffee emoji">
      ☕️
    </span>{' '}
  </ui.CoffeeLink>
);

export default CoffeeLink;
