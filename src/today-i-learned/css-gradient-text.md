---
title: CSS Gradient Text
description: Today I learned how to create beautiful text gradients with CSS
date: 2023-01-11
path: /css-gradient-text
tags: ['CSS']
number: 57
---

My wife is a UX designer and wanted to integrate text gradients into her designs. I've never created something like this before and didn't know any method to achieve this.

My wife is also pretty knowledgeable in web development (although she would never admit that). She always makes sure that the elements she integrates into her designs are possible to implement. She researched a bit and found a way to do it with CSS.

This article explains in detail how it works: <a href="https://cssgradient.io/blog/css-gradient-text/" target="_blank">CSS Gradient Text &#8599;</a>

Here is the basic syntax for it:
  
  ```css
  h2 {
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ```

First, we create a linear-gradient on the background of the HTML element, in this case, an h2. Then we use the background-clip property to clip the background to the text. Finally, the text-fill-color property is used to make the text transparent.

Combined, this enables the linear-gradient to be visible in the text. Awesome! That's a great and easy way to create text gradients. And the best thing is, it's also widely supported by all modern browsers.


