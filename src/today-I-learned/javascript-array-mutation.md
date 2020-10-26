---
title: JavaScript Array Mutation
date: 2020-08-07
path: /javascript-array-mutation
tags: ['JavaScript']
---

Today I ~~learned~~ forgot, that the JavaScript array method

```javascript
Array.prototype.pop();
```

mutates the original array. This caused me a lot of trouble and some nasty bugs. So here is an example to help you to not make the same mistake!

Let's say we have an array of animals.

```javascript
const animals = ['dog', 'cat', 'bird', 'alpaca', 'whale'];
```

Now we want to do something with the last element of the array, while also doing something with all animals.

I tried it this way:

```javascript
const lastAnimal = animals.pop();
```

What would you expect animals and lastAnimal are referencing now? Take your time and think about it. Don't look!

```javascript
console.log(animals); // ['dog', 'cat', 'bird', 'alpaca']
console.log(lastAnimal); // whale
```

Oh no! The `pop()` method also changed our original array animals and kicked the last element out of it. That's not what we wanted!

A better way to do this is to copy the original array with the spread operator and work on the copy from that on. This prevents mutating the original array.

```javascript
const colors = ['green', 'blue', 'yellow', 'pink'];
const copyOfColors = [...colors]; // ['green', 'blue', 'yellow', 'pink']
const lastColor = copyOfColors.pop(); // 'pink'
```

So copying arrays first, when you need to work with them is always a good idea. Hope this helps you!
