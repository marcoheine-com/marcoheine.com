---
title: Margin considered harmful
date: 2020-03-25
path: /margin-considered-harmful
---

Today I learned that __margin__ can be considered harmful in some cases. Max Stoiber tweeted about this and a lot of people, myself included, agree. 

Many developers use margin to add space between components. This makes the reusability of a component really hard. As Max puts it: 

> "A well-built component should not affect anything outside itself." 

I'm using Slot-Components whenever I want to add extra space between Components.

Learn more: https://mxstbr.com/thoughts/margin