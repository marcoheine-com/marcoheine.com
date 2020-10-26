import React from 'react';
import CoffeeLink from './CoffeeLink';
import * as ui from './ui';

const CoffeeHint = () => {
  return (
    <ui.CoffeeHint>
      <h3>Hi Friend!</h3>
      <p>
        If you enjoy my writings and learn something from them, you can consider
        to <strong>support me</strong>! One way of doing this is just as easy as{' '}
        <strong>buying me a Coffee!</strong>
      </p>

      <p>
        Thanks so much! This means a lot to me and is a great way to{' '}
        <strong>support my work</strong>.
      </p>
      <CoffeeLink />
    </ui.CoffeeHint>
  );
};

export default CoffeeHint;
