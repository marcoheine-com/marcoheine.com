---
title: Learning CSS Grid
date: 2018-03-23
path: /website-performance-optimization
---

I really liked the [JavaScript30](https://javascript30.com/) course by [Wes Bos](https://twitter.com/wesbos) where you get to code 30 different projects with plain JavaScript. Now he published another course which is also available for free. This time it's all about learning [CSS Grid](https://cssgrid.io/). In this blogpost I will document everything I learned about CSS Grid in the course.

---

1. [General setup and basics of CSS Grid Development](#setup)
2. [Implicit vs. explicit Grid](#implicit-vs-explicit)
3. [Grid-auto-flow](#grid-auto-flow)
4. [Sizing tracks](#sizing-tracks)
5. [Repeat function](#repeat-function)
6. [Sizing Grid items](#sizing-grid-items)
7. [Placing Grid items](#placing-grid-items)
8. [auto-fit and auto-fill](#auto-fit)
9. [Using minmax() for responsive grids](#minmax)
10. [Grid template areas](#template-areas)
11. [Naming lines in CSS Grid](#naming-lines)
12. [Grid-auto-flow dense block fitting](#block-fitting)
13. [CSS Grid alignment + centering](#alignment-and-centering)
14. [Re-ordering Grid items](#re-ordering)
15. Real world examples:
    - [Nesting Grid with album layouts](#album-layouts)
    - [CSS Grid image gallery](#css-grid-image-gallery)
    - [Flexbox vs. CSS Grid](#flexbos-vs-grid)
    - [Recreating CodePen](#recreating-codepen)
    - [Bootstrappy Grid with CSS Variables](#bootstrappy-grid)
    - [Responsive Website](#responsive-website)
    - [Full bleed blog layout](#blog-layout)

---

### <a name="setup"></a>General setup and basics of CSS Grid development

In the first few videos Wes talks about the **tooling setup** for the course. He uses [browsersync](https://browsersync.io/) for the local development which is an npm package, that automatically updates your browsers once you change the HTML, CSS, images or other project files.

It is such a great tool I couldn't work without and that is why browsersync has had its safe spot in my build tool setup with gulp for a long time.

Wes also talks about the basics of CSS Grid development with the **firefox developer tools**. The basic principle reminds of flexbox. You always have a parent where you set `display: grid` and define the settings for columns, rows and the gap between them.

Child elements inside this parent can be positioned separately. The firefox dev tools have a special layout window included, where you can highlight the grid view and also show the numbers of the grid cells which is extremely helpful when developing CSS Grid.

### <a name="implicit-vs-explicit"></a> Implicit vs. explicit Grid

The difference between explicit and implicit grid tracks is simple. When you explicitily define grid columns with `grid-template-columns: 100px 100px` you get **explicit** grid tracks.

If the browser notices that there is not enough space for all your items he automatically creates a second row.

So these tracks are called **implicit** because they are created by the browser and not explicitely by you.

The same applies if you have four items and define two rows. If you now add two more items, a new row is implicitly created by the browser. With `grid-auto-rows` and `grid-auto-columns` you can style any implicitely created row or column.

<iframe height="422" style="width: 100%;" scrolling="no" title="CSS Grid - Implicit vs. Explicit Tracks" src="https://codepen.io/Mkuehb/embed/rJoXxY?height=422&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/rJoXxY'>CSS Grid - Implicit vs. Explicit Tracks</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="grid-auto-flow"></a> Grid-auto-flow

If you have two items, define two columns using `grid-template-columns: 200px 400px` and than add a third item, the browser will put this item automatically in a new row below like described before with implicit tracks.

This means `grid-auto-flow` is set to row by default. If yout set `grid-auto-row` to `column` the third item will be put next to the already available items into a new column automatically.

<iframe height="356" style="width: 100%;" scrolling="no" title="CSS Grid - grid-auto-flow" src="https://codepen.io/Mkuehb/embed/wyNjJK?height=356&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/wyNjJK'>CSS Grid - grid-auto-flow</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="sizing-tracks"></a> Sizing tracks

The `fr` unit represents the amount of space left after all elements are laid out.

If you define three columns with `grid-template-columns: 200px 200px 1fr` , the first two columns will be 200px wide and the last one will take all the space that is left.

`fr` stands for **fractional unit** but Wes likes to call if free space which helps with remembering the idea of the fr unit.

It is also possible to use the auto keyword. Then an item will be sized according to the content it contains.

<iframe height="265" style="width: 100%;" scrolling="no" title="CSS Grid - sizing tracks" src="https://codepen.io/Mkuehb/embed/ddaKbb?height=265&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/ddaKbb'>CSS Grid - sizing tracks</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="repeat-function"></a> Repeat function

Instead of writing:

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```

you can simply use the CSS Grid repeat function and write:

```css
grid-template-columns: repeat(4, 1fr);
```

<iframe height="265" style="width: 100%;" scrolling="no" title="CSS Grid - repeat function" src="https://codepen.io/Mkuehb/embed/vdbVeX?height=265&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/vdbVeX'>CSS Grid - repeat function</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="sizing-grid-items"></a> Sizing Grid Items

By default grid items just flow one after another and as there is space for each one they will fit themselves into the grid as they can.

There is also a way to size grid items inside a parent grid container more precisely. The instruction `grid-column: span 2` tells the browser to size the specific child element with the space and width of two columns. The same goes for `grid-row: span 2`.

<iframe height="265" style="width: 100%;" scrolling="no" title="CSS Grid - Sizing Grid Items" src="https://codepen.io/Mkuehb/embed/zWOYge?height=265&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/zWOYge'>CSS Grid - Sizing Grid Items</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
