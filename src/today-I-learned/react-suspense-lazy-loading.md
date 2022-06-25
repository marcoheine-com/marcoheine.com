---
title: React Suspense Lazy Loading Components
date: 2020-10-29
path: /react-suspense-lazy-loading
tags: ['React', 'JavaScript', 'Performance']
number: 30
---

While
[Suspense for Data fetching](https://reactjs.org/docs/concurrent-mode-suspense.html)
is still an experimental feature in React and is not yet available in a stable
release, React 16.6 also added a `<Suspense>` component.

This `<Suspense>` component lets you specify the loading indicator in case some
components in the tree below it are not yet ready to render.

This is a super cool and easy way to add a loading state with a loading
component to your React application.

Here is a simple example:

```javascript
import * as React from 'react'
import { LoadingComponent } from './loading-component'

const ComponentWithAsyncData = React.lazy(() =>
  import('./component-with-async-data')
)

const App = () => {
  return (
    <React.Suspense fallback={<LoadingComponent />}>
      <ComponentWithAsyncData />
    </React.Suspense>
  )
}

export default App
```

While the `<ComponentWithAsyncData />` may not be ready to render yet because
it's still waiting for an API Request, React.Suspense will handle that and show
our `<LoadingComponent />` instead.

What's even cooler, is that React can also lazy load the component with the
async data by using `React.lazy`. So it's not even imported, until it's ready.
Awesome!

You rean read more about it in the
[official React docs](https://reactjs.org/docs/react-api.html#reactsuspense).

So that's what I learned today. What about you?

Just send me an [email](mailto:marco@marcoheine.com) or message me on
[twitter](https://twitter.com/home) about your learnings. I would really like to
here from you!
