import React from "react";
import { Link } from "gatsby";

export const about = {
  h1: "Marco Kühbauch",
  h2: "Frontend Web Developer",
  textContent: (
    <>
      <span>80809 München</span>
      <Link to="/">marcokuehbauch.com</Link>
      <a href="mailto:marco@marcokuehbauch.com">marco@marcokuehbauch.com</a>
      <p>
        <Link to="/blog">my blog</Link> -
        <a
          href="https://twitter.com/Mkuehb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        -
        <a
          href="https://github.com/mkuehb"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </>
  ),
};

export const blog = {
  h1: "Blog",
  textContent: `Sometimes I write about new things I learned, things I'm interested in and things that bother me in my everyday life. Mostly about Frontend, mostly for myself as a learning process and always my own thoughts and my own opinion.`,
};

export const contact = {
  h1: "Contact",
  textContent: (
    <>
      <span>Marco Kühbauch</span>
      <span>80809 München</span>
      <a href="mailto:marco@marcokuehbauch.com">marco@marcokuehbauch.com</a>
    </>
  ),
};

export const til = {
  h1: "Today I learned",
  textContent: "This is a short description about this page.",
};
