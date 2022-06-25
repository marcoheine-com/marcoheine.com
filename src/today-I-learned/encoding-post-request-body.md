---
title: Encoding POST request body
date: 2021-07-23
path: /encoding-post-request-body
tags: ['API']
number: 34
---

Today I learned, that passing **unencoded text** into the body of a POST request
is a bad idea. It could result in security issues and therefore always should be
encoded.

One approach to resolve this is using `URLSearchParams`. You can learn more
about the API on mdn:
[https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

Jake Archibald wrote a blog post about this topic, where he explains it in more
depth:
[https://jakearchibald.com/2021/encoding-data-for-post-requests](https://jakearchibald.com/2021/encoding-data-for-post-requests)
