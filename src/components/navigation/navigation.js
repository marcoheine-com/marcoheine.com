import React, { useState } from 'react';
import { Link } from "gatsby";
import * as ui from './ui';
const Navigation = () => {
  const [ isToggled, setIsToggled ] = useState(false);
  const handleOnClick = () => setIsToggled(!isToggled);

  return (
    <>
      <ui.NavIcon
        onClick={handleOnClick}
      >
        <ui.NavIconSpan isToggled={isToggled} />
        <ui.NavIconSpan isToggled={isToggled} />
        <ui.NavIconSpan isToggled={isToggled} />
      </ui.NavIcon>
      <ui.Nav isToggled={isToggled}>
        <ui.List>
          <ui.ListItem>
            <Link to="/about">About</Link>
          </ui.ListItem>
          <ui.ListItem>
            <Link to="/blog">Blog</Link>
          </ui.ListItem>
          <ui.ListItem>
            <Link to="/TIL">TIL</Link>
          </ui.ListItem>
          <ui.ListItem>
            <Link to="/contact">Contact me</Link>
          </ui.ListItem>
        </ui.List>
      </ui.Nav>
    </>
  );
};

export default Navigation;