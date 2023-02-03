---
title: Secure JavaScript URL validation
description: Today I learned about a secure way to validate URLs in JavaScript
date: 2022-10-26
path: /secure-javascript-url-validation
tags: ['javascript', 'web-security']
number: 53
---

URL validation is super important because it checks if a URL follows a proper URL syntax and is not malicious.
Nowadays URL-based vulnerabilities are very common and can be used to steal user data or redirect users to malicious websites.

Server Side Request Forgery (SSRF) is the main keyword on this topic. I won't go into too much details on this here, if you want to learn more about it, I recommend reading this definition: <a href="https://owasp.org/www-community/attacks/Server_Side_Request_Forgery" target="_blank">Server Side Request Forgery &#8599; </a>.

It's basically about attackers modifiying URLs so that they can access server data.

One way to prevent this is to do proper URL validation and this article by Mannan Tirmizi teached me so much about it: <a href="https://snyk.io/blog/secure-javascript-url-validation/" target="_blank">Secure JavaScript URL validation &#8599; </a>.

They suggest to use the `new URL()`constructor because it's one of the easiest ways to validate URLs. It throws an error if the URL is invalid and you can access the URL's properties like `protocol`, `hostname`, `port` and `pathname`.

Another way to validate URLs is to use regex. Altough they advice against it, because it's not as easy to use and an error-prone approach.

The great thing about the `new URL()` constructor is that is also works in Node.js and not only in the browser. So you can use it in your backend as well.

So if you're thinking about a great way to do URL validation with JavaScript check out the article by Mannan and the `new URL()` constructor <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL/URL">here &#8599; </a>.