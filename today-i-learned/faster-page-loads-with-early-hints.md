---
title: Faster page loads with early hints
description: Eary hints is a status code (103 Early Hints) that can help improve the performance of a website, because it allows the server to sent hints to the browser about critial sub-resources.
  
date: 2022-08-10
path: /faster-page-loads-with-early-hints
tags: ['backend']
number: 46
---

Today I learned about eary hints! Early hints are a status code (103 Early Hints). They are sent by the server to the browser to notify the browser which sub-resources are likely to be used on the page (like a CSS file from a CDN). 

The browser can then warm up connections and request these sub-resources while it is waiting for the main resource. This means the browser can do some work in advance which will speed up the whole page loads.

Here is an example to understand this better. Without early hints, the browser has to wait because everything is blocked on the server while it's determining the response for the main resource. 

With early hints, the server can immediately send a partial response and the browser can deal with that right away, while the server is determining the final response. 

> Note: if your server can send a final response, like a 200 right away, using the `link rel=preload` or `link rel=preconnect` are better solutions. But if your server needs time to generate the main response, early hints can be great!

You can learn more about early hints on the chrome developers documentation: <a href="https://developer.chrome.com/blog/early-hints/" target="_blank">faster page loads using server think-time with Early Hints &#8599;</a>.