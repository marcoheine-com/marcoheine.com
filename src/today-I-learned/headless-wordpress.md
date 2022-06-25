---
title: Headless Wordpress
date: 2022-05-03
path: /headless-wordpress
tags: ['API', 'GatsbyJS']
number: 35
---

Today I learned about headless wordpress. Wordpress now offers a REST API which
makes it possible to decouple the frontend completely from the wordpress
backend.

This is pretty cool, because I'm faster and more comfortable with JavaScript
when developing the frontend compared to the wordpress way where you mix you're
HTML with PHP.

For example: This makes it possible for me to use GatsbyJS for the frontend and
consume the content from wordpress through the API. Gatsby offers a plugin to do
all the heavy lifting for me and enables the bridge between wordpress and
Gatsby:
[gatsby-source-wordpress](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/)

Of course this brings some pros and cons with it. I researched a bit and
collected a few articles which go into detail about using wordpress as a
headless CMS.

From the gatsby documentation:
[What is Headless WordPress?](https://www.gatsbyjs.com/docs/glossary/headless-wordpress/)

From Chris Coyier on css-tricks.com:
[Just How Niche is Headless WordPress?](https://css-tricks.com/just-how-niche-is-headless-wordpress/)
