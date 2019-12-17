---
title: The Development Process of this Website
date: 2016-03-03
path: /the-development-process-of-this-website
---

## The Development Process of this Website

### Where to start?

For a long time I had the idea in my mind of developing my personal website. If you want to work in any field related to the web, its seems very logical to have your own website. So I decided to start this project last year in October. Spoiler: I startet the real development process in February 2016.

I started collecting randomly ideas, things, special features and more, which I wanted to implement into my website. At this point I have to say how important Twitter got for me. Since I started using Twitter and following all these amazing people, I got inspired, got to read new articles on tools and features and I got to see impressive examples of others work everyday.

So after a few weeks of collecting and having a long list of cool things my website should contain, I was at a point where I decided what color-palette and Font I wanted to use and at the same time I started sketching some layout concepts with pen and paper. As this is "just" a personal website without having an overcomplex layout, this part of the process didn't took to long.

Getting a toe into the water

As I finished my design, there was a long period where exactly nothing happend. I added a few ideas and improvements here and there, but it wasn't a constant development process. I always told myself I needed a few days where I could work on it the whole time and nothing else would bother me.

But as I was in the second semester in my master at this time, there were a "few" things which prevented my mind of focusing completely on the project. So I worked more on a "roadmap" and on project management than on actually developing.

### Down the Waterfall

As I knew I would finish my exams at the end of January, I planned to finally develop the website with the start of February. I knew I had a little time off there and this would allow me to focus 100% on the website. So I prepared everything, made to do lists, canceled all appointments and finally started developing at the beginning of February.

My development environment consists of a 15" Laptop connected to a 21" Monitor and I worked on my TV via Chromecast additionally. I started with the plain HTML files and finished them, before adding any CSS. I like the idea of making a website work without any CSS and it teaches a lot about accessability. I work with Sublime Text using the Monokai Bright Theme with the Source Code Pro Font and for me this is a very pleasant combination.

Screenshot of Sublime Text

I developed my website with the principles of mobile first in mind, constantly checking everything on different devices (thanks to family and friends) with different OS/browsers. Also the Chrome Developer Tools Device Mode is an awesome tool to use. While adding CSS to make everything pretty an advice of Sara Soueidan on Twitter for CSS layout troubleshooting made my life a lot easier:

```css
* {
  outline: 1px solid red;
}
```

I assume that I was the only person not knowing about this, but I was very thankful for it and it prevented a lot of headaches.

I guess the most visited website during the development process wasn't stackoverflow as you would suggest, it was caniuse.com with no doubt. As I moved on in the process I always red about Task Runners on Twitter and thought I should give it a try. So I started using Gulp, used the sass, livereload, clean-css, uglify, and imagemin plugins for this project and it really improved the development process.

The JavaScript on this website so far is really really basic stuff (like DOM Manipulation) and it's also the point where I need to improve the most.

So after two weeks of developing and one week of testing, debugging and improving, the first version of this website went finally online. You may ask yourself why I'm even writing about this, as this is just a personal blog/website and nothing really complex but for myself it's a starting point which I needed to test my knowledge and to prove to myself what I can and can't do so far.

### At the horizon

So I guess for a first version of this project, I'm very happy with the result. Although I got so many things I didn't implement yet and a lot of ideas that could fit in very well.

What I've learned:
* I like to make to do lists and not stick to them
* setting up my own development environment
* the most important things belonging into the head
* semantic HTML and accessibility
* better structuring and organization of CSS files
* using new CSS features like Flexbox, Transforms, Transitions, Animations
* working with (inline) SVG
* make mistakes and learn from them
* sharpen my skills concerning responsive web design
* get familiar with preprocessors (Sass) and use it efficiently
* work the whole day on a problem without solving it, look at it in the evening and solve it in 2 minutes
* using a Task Runner (Gulp)
* improve performance
