---
title: Optional Chaining
date: 2020-07-08
path: /optional-chaining
tags: ['javascript']
number: 23
---

The optional chaining operator can now be used in production! Hurray! 🥳If you
have no idea what this is, here is an example for you:

Let's say we have an object about a person.

```javascript
const person = {
  name: 'Maria',
  age: '36 years',
  dog: {
    name: 'Hugo',
  },
}
```

If we wanted to get the dog's name, we had to do this:

```javascript
const nameOfDog = person.dog.name
```

If the dogs name wasn't defined, this would throw an error 👎🏻 Not cool.

To prevent the type error, we had to do this:

```javascript
const nameOfDog = person && person.dog && person.dog.name
```

Uff wow that's a lot of **logical and** there. Image having an object nested
even deeper. Would become really long eventually.

Optional chaining operator to the resuce!

```javascript
const nameOfDog = person?.dog?.name
```

That's a lot shorter and better to read, if you ask me. It works the same as the
dot operator, but instead of throwing an error when a property is nullish, it
short-circuits with a return value of undefined.

Really helpful while exploring the content of an object, which might have some
optional properties.

You can learn more about it here:
[optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
