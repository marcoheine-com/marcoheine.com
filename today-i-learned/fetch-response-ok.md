---
title: Fetch API response.ok
date: 2020-08-21
path: /fetch-response-ok
tags: ['JavaScript']
number: 29
---

Today I learned that the fetch API does only reject on a Network error or when
CORS is misconfigured on the server-side. This means requests which responed
with a 4xx or a 5xx status code are also treated as successful and won't be
rejected.

There is an additional _.ok_ method on the response you can check for `true`

So the best way to check, if a fetch request is actually successful, includes
checking if the promise resolved, then checking if the `response.ok` property
holds a value of true.

Here is an example which illustrates this:

```javascript
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
  .then((responseJSON) => {
    // do something with the response
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error)
  })
```

To learn more about this and the Fetch API in general, check out the
[MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Response_objects)
article about using fetch.
