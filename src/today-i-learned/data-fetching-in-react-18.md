---
title: Data fetching in React 18
description:
  Today I learned, about the best way to handle data fetching in React 18.
date: 2022-07-07
path: /data-fetching-in-react-18
tags: ['React', 'API']
number: 42
---

If you've worked with React you've possibly done something like this to fetch
data from an API:

```js
const [data, setData] = useState(null)

useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => res.json())
    .then((data) => setData(data))
}, [])
```

<br/>

With the release of React 18 a lot of people were wondering if this is still a
good practice. The confusion stems from the fact that React 18 renders
everything twice in strict mode in development.

In this react thread on the react subreddit, Dan Abramov, a member of the React
core team at meta, shares a lot of valuable information on this topic: <a href="https://www.reddit.com/r/reactjs/comments/vi6q6f/what_is_the_recommended_way_to_load_data_for/" target="_blank">What is the recommended way to load data for components in React 18? &#8599;</a>

Here are the **key takeaways** from his post:

- Running effects twice shouldn't break your code. You should always ignore
  stale responses. If it does break your code, you have race conditions to fix.
  One way to do this, is to implement a cleanup function. This article offers a
  great explanation on how to do this: <a href="https://beta.reactjs.org/learn/synchronizing-with-effects#fetching-data" targer="_blank">react docs: fetching data &#8599;</a>

* If you can, switch to server-side data fetching. Next.js and Remix both offer
  built-in solutions to deal with that, which are better suited than client-side
  data fetching in effects. If a server-side framework isn't an option, consider
  using a client-side cache like <a href="https://react-query.tanstack.com/" target="_blank">React Query &#8599;</a> to fetch data.

**A final note:** these changes have nothing to do with the release of React 18.
In fact, these issues have existing much longer. The react team just started
documenting them now. The main issue here is, that me may have all used effects
like useEffect wrong the whole time.

I've already wrote about that topic on other posts like my blog post [the mistakes I made using React](/blog/the-mistakes-i-made-using-react/) and my Today-I-learned post:
[missusing useEffect](/today-i-learned/missusing-use-effect/).

Now's a great time to refactor and apply the changes mentioned above.
