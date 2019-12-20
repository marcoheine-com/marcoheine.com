---
title: New CSS Layout with CSS Grid & Flexbox
date: 2016-05-08
path: /new-css-layout
---

I haven't been working for such a long time in the Web and I would definitely call me a Junior Developer. Though I remember times where I built Websites with table Layout. It was for several university projects. 

I looked back into the code and noticed that I was using a little position absolute & relative here and there but built the main layout of the page with tables. Yikes!

---

1. [Introduction – My Journey with CSS Layout](#introduction)
2. [Flexbox – what's that?](flexbox-whats-that)
3. [Flexbox – don't use it for everything](#flexbox-dont-use-it-for-everything)
4. [CSS Grid Layout](#css-grid-layout)
5. [Conclusion](#conclusion)

---

### <a name="introduction"></a>Introduction - My Journey with CSS Layout

I guess I never heard of semantics these days. All I cared about was, that it worked. Somehow. After that I also learned about positioning with floats. But it never felt right for me. I managed to use kind of a combination of floats, display properties and absolute/relative positioning. 

But CSS layout felt always strange for me, I never got behind the real concepts of it. It always felt like one big hack. This all changed when I first heard about Flexbox.

### <a name="flexbox-whats-that"></a>Flexbox - what's that?

When I first learned about Flexbox, I was astonished. 

I can position two elements next two each other, without the need of clearing floats? 

I can position an element wherever I want it to be and even change the flowing directions or what happens, when the window shrinks? 

I can center elements both, horizontally AND vertically? 

Okay, wow. So much cool stuff that was possible now without any weird feeling fix or hack to make it work.

Flexbox stands for Flexible Box and the main concepts consists of different properties which allow it to arrange elements on a page such that they behave predictably when the page layout shrinks, grows or changes in another way due to different screen sizes or display devices.

You can read more about the concept behind Flexbox on the [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes). Sure it took its time until Flexbox got wide browser support but now it's up to 94% of global browser support. For comparison browser-radius only got 90% global support.

To gain more attention for Flexbox, a lot of smart people made tools to help others learn the main concepts of Flexbox really fast. My favorite two are Flexbox [Froggy](http://flexboxfroggy.com/) and [Flexbox Defense](http://www.flexboxdefense.com/). The first one lets you use the different Flexbox properties to guide Frogs to their lilypads. The second one uses Flexbox to position Towers all over a game court and destroy the incoming enemies with the help of these towsers.

If you haven't tried them out yet, don't hesitate to do it now! If you are not into Gamification there is also a [great video](https://egghead.io/lessons/misc-flexbox-fundamentals) by Joe Maddalone for egghead where he explains all Flexbox properties in ten minutes.

I also tried to contribute to the Flexbox learning movement. I made a small Flexbox playground where you can see all the Flexbox properties in action. You can switch between the different properties and immediately see their impacts and changes on the page layout.

<iframe height="530" style="width: 100%;" scrolling="no" title="Flexbox Playground" src="https://codepen.io/Mkuehb/embed/KzrqBY?height=265&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/KzrqBY'>Flexbox Playground</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

I won't get into all the Flexbox properties in this blog post, there are other great resources which explain all about Flexbox very well, like the Complete Guide to Flexbox by Chris Coyier on [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). This guide explains every Flexbox property in depth and covers every single thing you need to know to work with Flexbox.

### <a name="flexbox-dont-use-it-for-everything"></a>Flexbox - don't use it for everything

For the first time working on a CSS Layout feels right for me, thanks a lot to Flexbox. It's great to make simple layouts for small, responsive websites. I also used it in most cases on my own website. But it also has its pitfalls and weaknesses. Therefore it's kinda hard to use Flexbox to built complex website layouts.

Of course it's possible and I've seen a lot of tutorials showing you how to build a mulitcolumn or a holy-grail layout with flexbox. But it's not meant for that. [Jake Archibald](https://twitter.com/jaffathecake) explains why Flexbox shouldn't be used for page layout in this [blog post](https://jakearchibald.com/2014/dont-use-flexbox-for-page-layout/). The best use cases for Flexbox are laying out small interface components like form elements, the links in a menu, everything that's in a single dimension, in a row or a column.

"But you were so happy and confident about this new CSS layout method and now you say I should not use it for my overall page layout? I'm confused now!"

Sorry for that but there is another technology that will satisfy all of your needs, soon. It's called CSS Grid Layout.

### <a name="css-grid-layout"></a>CSS Grid Layout

While Flexbox has been designed to layout individual components and their chunks of content, CSS Grid Layout is perfectly for overall page layout.

"CSS Grid Layout (aka "Grid"), is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces." says Chris House in this amazing [complete guide to grid](https://css-tricks.com/snippets/css/complete-guide-grid/).

The big problem: global browser support is now at [8.1%](http://caniuse.com/#search=grid). It's currently a [W3C Working Draft](https://www.w3.org/TR/css-grid-1/) and it's only usable with the experimental flag enabled in google chrome. But it will be only a matter of time until CSS Grid will redefine the way we layout websites with CSS.

<iframe height="530" style="width: 100%;" scrolling="no" title="CSS Grid Example" src="https://codepen.io/Mkuehb/embed/EKrNMp?height=265&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/EKrNMp'>CSS Grid Example</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

I won't get any deeper into all the properties of the CSS Grid Layout. There are some awesome guides out there, which will explain anything you need to know like the one from CSS-Tricks I mentioned before.

Another great person you will definitely come across when dealing with CSS Grid is [Rachel Andrew](https://twitter.com/rachelandrew?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor). She held some great talks about CSS Grid Layout and works hard to teach people more about this new technology everday and gain more support for it.

She is also the author and owner of [gridbyexample.com](https://gridbyexample.com/) where she explains everything that exists about CSS Grid Layout. It's one big collection of links to articles, videos and code examples so if you're willing to learn more about this topic, this is the right place to start. 

### <a name="conclusion"></a> Conclusion

I think CSS Grid Layout is great and in combination with Flexbox it seems to change the way how we create our layouts with CSS completely. After a long journey with techniques that weren't originally ment for page layout like tables and floats – which felt (for me personally) always like hacking and trying to fix it somehow so it works and breaks nothing – a new layout method has emerged and I'm really looking forward to it. I hope till the end of 2016 it will be ready to be used in production so we can establish finally a CSS layout method which is absolutely meant for this job. 

### Sources & Further Reading


* [Complete Guide to CSS](https://css-tricks.com/snippets/css/complete-guide-grid/) Grid via CSS-Tricks
* [Collection of usage examples for the CSS Grid Layout](http://gridbyexample.com/) via Rachel Andrew
* [Making Sense of the New CSS Layout](https://rachelandrew.co.uk/archives/2016/03/25/making-sense-of-the-new-css-layout/) via Rachel Andrew – Talk at Fluent Conf
* [The New CSS Layout](http://www.thedotpost.com/2015/12/rachel-andrew-the-new-css-layout) via Rachel Andrew – Talk at dotCSS 2015
* [Grid, Flexbox, Box Alignment: Our new System for Layout](https://24ways.org/2015/grid-flexbox-box-alignment-our-new-system-for-layout/) via Rachel Andrew
* [An Introduction to the CSS Grid Layout Module](http://www.sitepoint.com/introduction-css-grid-layout-module/) via Ahmad Ajmi
* [Deep Dive into Grid Layout Placement](http://blogs.igalia.com/mrego/2016/02/01/deep-dive-into-grid-layout-placement/) via Manuel Rego Casasnovas
* [Should I use Grid or Flexbox?](https://rachelandrew.co.uk/archives/2016/03/30/should-i-use-grid-or-flexbox/) via Rachel Andrew

