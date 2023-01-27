---
title: Never use px for font-size
description: Today I learned about the website TechPays which aims to remove the taboo on tech compensation in Europe
date: 2022-11-30
path: /never-use-px-for-font-size
tags: ['CSS']
number: 55
---

In a recent newsletter I stumbled over the blog post by Josh Collins <a href="https://joshcollinsworth.com/blog/never-use-px-for-font-size" target="_blank">Why you should never use px to set font-size in CSS &#8599;</a>.

I've used them all so far in my web developer career, px, em and rem. In recent years it's always been rem. But I've never really grasped the idea behind using rem and avoiding px. So this time I decided to read up on it and I'm glad I did.

Josh states right at the beginning that using the wrong unit can lead to **risking overriding user's preferences, making it harder for them to use your website and potentially harming the design with unintented visual side effects**.

These are some serious issues you risk when using px and I've never thought about it that much before.

He explains in detail what px, em and rem are and shows their differences. The basic bottom line is, that em and rem scale in relation with font size, while px values will not. In other words: **em and rem work with the user's font size; px completely overrides it**.

It's one of the best articles I've read recently and I highly recommend it to anyone who's interested in understanding the differences between these units and what to use when.