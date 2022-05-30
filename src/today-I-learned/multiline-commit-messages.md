---
title: Multiline commit messages
date: 2020-06-07
path: /multiline-commit-messages
tags: ['Git']
number: 21
---

Stefan Judis showed
[in this tweet](https://www.notion.so/TIL-343c02e617b140f695757ac1cba75d2e#23d3991930124966aa8b8440f827d1bb)
how to write multiline git commit messages.

Instead of writing one very looong commit message:

```js
git commit -m 'this is a very long commit message where I describe all the work I did and guess what it is a lot and this should be just a short description'
```

You can use the `css>-m` flag multiple times. For every usage of it, a new line
is added.

```js
git commit -m 'at first I did this' -m 'I also did this' -m 'oh and dont forget that'
```

That's such a cool git feature I always needed but never knew how to do it!

Comes in really handy when you did several things in one commit and makes the
commit history much more readable. I use it all the time now!
