---
title: The Set Object
date: 2021-02-19
path: /set-object
tags: ['JavaScript']
number: 31
---

Today I learned about the `Set` object. It lets you store **unique** values of
any type, whether primitive values or oject references.

It's like a regular object, a collection of values. But the main difference is
that a value in a `Set` may only **occur once**.

So if you have to manage unique data, `Set` objects are they right thing for
you!

Here is a quick example:

```javascript
const names = ['Sabrina', 'Tereza', 'Tom', 'Paul', 'Sabrina', 'Tom']
const nameSet = new Set(names)

console.log(nameSet) // ['Sabrina', 'Tereza', 'Tom', 'Paul']
```

If you turn any data structure into a Set, it automatically filters out the
duplicates. I find this really useful.

The same goes for when you want to add a value, which is already present in your
Set.

```javascript
const names = ['Sabrina', 'Tereza', 'Tom', 'Paul']
const nameSet = new Set(names)

nameSet.add('Sabrina')

console.log(nameSet) // ['Sabrina', 'Tereza', 'Tom', 'Paul']
```

The Set prevents that values are added, which are already part of the object.

There is a lot more cool stuff you can do with sets, check out the
[Set Object mdn page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).
