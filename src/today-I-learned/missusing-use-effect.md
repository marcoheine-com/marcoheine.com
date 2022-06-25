---
title: Missusing useEffect
date: 2022-06-07
path: /missuing-use-effect
tags: ['React']
number: 39
---

Today I learned that Reacts `useEffect` is not meant for data fetching and is
not a state setter either!

This questions all my best practices I’ve applied over the last years since we
got useEffect.

David K. Piano held this amazing talk about our wrong understanding of useEffect
and what the alternatives are:
https://www.youtube.com/watch?v=Ck-e3hd3pKw&t=9274s So, good bye useEffect?
