---
title: Removing YouTube Shorts with CSS
description: Today I learned how you can remove YouTube Shorts from your subscription feed with CSS!
date: 2023-01-25
path: /removing-youtube-shorts-with-css
tags: ['CSS']
number: 59
---

I'm a bit annoyed by YouTube Shorts on my YouTube feed page. I'm there for for long-term format videos and Shorts just are not my kind of thing. 

Rach Smith recently shared this great post on <a href="https://rachsmith.com/remove-youtube-shorts/" target="_blank" rel="noopener">how to remove shorts from your YouTube Subscription feed with `:has()` &#8599;</a> and I was so happy when I stumbled over this post.

She uses it to set `display: none` on every on every item in the feed with child elements that are shorts. 

Here are the selectors she wrote, both for the grid and the list view:
```css
/* Grid View */
#items.ytd-grid-renderer>ytd-grid-video-renderer:has(ytd-thumbnail-overlay-time-status-renderer[overlay-style="SHORTS"]) {
  display: none;
}

/* List View */
ytd-item-section-renderer:not(:has(ytd-grid-renderer)):has(ytd-thumbnail-overlay-time-status-renderer[overlay-style="SHORTS"]) {
  display: none; 
} 
```

You'd need to add that to a browser extension to apply these custom styles and then you're good to go. Bye bye Shorts!

