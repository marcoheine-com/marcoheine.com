---
title: Array Sort modifies the original array
description:
  Today I learned, that when using the JavaScript sort() function on an array, it does not return a new array, but rather modifies the original one.
date: 2022-07-25
path: /array-sort-modifies-original-array
tags: ['JavaScript']
number: 45
---

JavaScript provides us a ton of useful array methods. One of them is the `.sort()` method, which as the name says sorts an array. 

This is useful, if you want to sort a list in alphabetical order for example. What I didn't knew about the `.sort()` method was that it modifies the original array! As the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank">mdn docs &#8599;</a> put it: 

> The sort() method sorts the elements of an array in place and **returns the reference to the same array**, now sorted.


What does that mean? Let's see an example. Imagine you have a component that renders a list of items and also has a select to filter items. The select should be sorted alphabetically, but the list of items should not be sorted.


```js

const items = [
  { name: 'Spaghetti aglia olio', kitchen: 'italian' }, 
  { name: 'Bami Goreng', kitchen: 'vietnamnese' }, 
  { name: 'Pad Thai', kitchen: 'thai' }
]

const FavoriteFood = ({ items }) => {

  const sortedItems = items.sort((a, b) => {
    if (a.kitchen < b.kitchen) return -1
    if (a.kitchen > b.kitchen) return 1
    return 0
  })

  return (
    <>
      <select>
        {sortedItems.map(item => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select>

      <section>
        {items.map(item => (
          <article key={item.name}>
            {item.kitchen} -  {item.name}
          </article>
        ))}
      </section>
    </>
  )
}

```

What do you think happens here? Our intention is, to show the list of foods sorted alphabetically in the dropdown, but not sorted below.
But that's not what is happening here:

![a screenshot of the example app with a select and a list of items](../images/screenshot-of-food-list.webp)

As I said before, the `sort()` method modifies the original array. This means whenever you apply the sorting on the
items array, the reference is also sorted. That's why our list of items below the dropdown is also sorted. 

To fix this, there is an easy solution. Create a copy of the array you want to sort and sort that copy.

Do ✅
```js
const FavoriteFood = ({ items }) => {

  const sortedItems = [...items].sort((a, b) => {
    if (a.kitchen < b.kitchen) return -1
    if (a.kitchen > b.kitchen) return 1
    return 0
  })

  return (
    <>
      <select>
        {sortedItems.map(item => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select>

      <section>
        {items.map(item => (
          <article key={item.name}>
            {item.kitchen} -  {item.name}
          </article>
        ))}
      </section>
    </>
  )
}

```

Here our items array is copied by using the`spread operator`. This makes sure we only have sorted items in our select, but not in our list below.
Hope this helps you, to prevent bugs in the future!