---
title: Efficiently load third-party JavaScript
description:
  Today I learned, how to efficiently load third-party JavaScript and share it
  on this post
date: 2022-07-13
path: /efficiently-load-third-party-js
tags: ['javascript', 'performance']
number: 43
---

Third-Party JavaScript is one of the number one things that slows down modern
websites. And it's often hard to improve as you are unable to change the code
itself, because you know, it's not yours, it's from a third party.

<!-- prettier-ignore -->
Milica shares great ways to improve the loading of third-party JS in this <a href="https://web.dev/efficiently-load-third-party-javascript/" target="_blank">article &#8599;</a>.

She specifies two ways to deal with third-party JS. The first one is: if you're
able to and it doesn't add value, get rid of it, which seems to be the obvious
one. The second one describes the optimization of the loading process.

Therefore she explains several techniques which make use of modern JS and
improve the loading process of third-party JS drastically.

I learned a lot by following along with Milica's article and could improve my
own loading process of third-party JS.
