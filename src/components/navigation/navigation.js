import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as ui from './ui';

const Navigation = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleOnClick = () => setIsToggled(!isToggled);

  return (
    <>
      <ui.NavIcon aria-label="toggle menu" onClick={handleOnClick}>
        <ui.NavIconSpan isToggled={isToggled} />
        <ui.NavIconSpan isToggled={isToggled} />
        <ui.NavIconSpan isToggled={isToggled} />
      </ui.NavIcon>

      <ui.Nav isToggled={isToggled}>
        <ui.List>
          <ui.ListItem isToggled={isToggled}>
            <Link to="/blog">Blog</Link>
          </ui.ListItem>
          <ui.ListItem isToggled={isToggled}>
            <Link to="/today-I-learned">Today I learned</Link>
          </ui.ListItem>
          <ui.ListItem isToggled={isToggled}>
            <Link to="/about">About</Link>
          </ui.ListItem>
          <ui.ListItem isToggled={isToggled}>
            <Link to="/contact">Contact me</Link>
          </ui.ListItem>
        </ui.List>
      </ui.Nav>
    </>
  );
};

export default Navigation;
