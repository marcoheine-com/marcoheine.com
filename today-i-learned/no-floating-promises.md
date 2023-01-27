---
title: No floating promises
date: 2020-08-06
path: /no-floating-promises
tags: ['JavaScript']
number: 26
---

If you have worked with Promises in JavaScript, you know that Promises returned
by functions must be handled appropriatly.

Unhandled Promises can cause unexpected behavior. For example they can resolve
when you don't expext it.

So the best way to deal with Promises is to return them from functions that
start them and then handle them.

To enforce this behaviour and prevent unhandled promises, you can use this
tslint rule:
[no-floating-promises](https://palantir.github.io/tslint/rules/no-floating-promises/)

I find it really helpful and it can reveal a lot of bad code and potential
non-determistic behaviour.
