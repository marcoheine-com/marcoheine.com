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
8. [auto-fit and auto-fill](#auto-fit-auto-fill)
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

<iframe height="422" style="width: 100%;" scrolling="no" title="CSS Grid - Implicit vs. Explicit Tracks" src="https://codepen.io/Mkuehb/embed/preview/rJoXxY?height=422&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/rJoXxY'>CSS Grid - Implicit vs. Explicit Tracks</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="grid-auto-flow"></a> Grid-auto-flow

If you have two items, define two columns using `grid-template-columns: 200px 400px` and than add a third item, the browser will put this item automatically in a new row below like described before with implicit tracks.

This means `grid-auto-flow` is set to row by default. If yout set `grid-auto-row` to `column` the third item will be put next to the already available items into a new column automatically.

<iframe height="356" style="width: 100%;" scrolling="no" title="CSS Grid - grid-auto-flow" src="https://codepen.io/Mkuehb/embed/preview/wyNjJK?height=356&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/wyNjJK'>CSS Grid - grid-auto-flow</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="sizing-tracks"></a> Sizing tracks

The `fr` unit represents the amount of space left after all elements are laid out.

If you define three columns with `grid-template-columns: 200px 200px 1fr` , the first two columns will be 200px wide and the last one will take all the space that is left.

`fr` stands for **fractional unit** but Wes likes to call if free space which helps with remembering the idea of the fr unit.

It is also possible to use the auto keyword. Then an item will be sized according to the content it contains.

<iframe height="265" style="width: 100%;" scrolling="no" title="CSS Grid - sizing tracks" src="https://codepen.io/Mkuehb/embed/preview/ddaKbb?height=265&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
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

<iframe height="265" style="width: 100%;" scrolling="no" title="CSS Grid - repeat function" src="https://codepen.io/Mkuehb/embed/preview/vdbVeX?height=265&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/vdbVeX'>CSS Grid - repeat function</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="sizing-grid-items"></a> Sizing Grid Items

By default grid items just flow one after another and as there is space for each one they will fit themselves into the grid as they can.

There is also a way to size grid items inside a parent grid container more precisely. The instruction `grid-column: span 2` tells the browser to size the specific child element with the space and width of two columns. The same goes for `grid-row: span 2`.

<iframe height="265" style="width: 100%;" scrolling="no" title="CSS Grid - Sizing Grid Items" src="https://codepen.io/Mkuehb/embed/preview/zWOYge?height=265&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/zWOYge'>CSS Grid - Sizing Grid Items</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="placing-grid-items"></a> Placing Grid Items

There are also better ways to position grid items than just sizing them. With `grid-column-start` and `grid-column-end` you can define where a grid item should start and where it should end. There is also a shortcut property for this so with `grid-column: 2 / 5` the grid item starts with the second column and ends before the fifth.

You can also define that the grid item should start at the first column and span over two columns with `grid-column: 1 / span 2`.

If you want your grid item to start at the first column and span over the last, but you don't know how many columns you have, just use `grid-column: 1 / -1`.

<iframe height="353" style="width: 100%;" scrolling="no" title="CSS Grid - Placing Grid Items" src="https://codepen.io/Mkuehb/embed/preview/BrByaZ?height=353&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/BrByaZ'>CSS Grid - Placing Grid Items</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The second CodePen example below shows all the different ways to place grid items inside a grid container. Have a look into the CSS to check how it is done.

<iframe height="409" style="width: 100%;" scrolling="no" title="CSS Grid - Spanning and Placing Cardio" src="https://codepen.io/Mkuehb/embed/preview/oqvjOv?height=409&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/oqvjOv'>CSS Grid - Spanning and Placing Cardio</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="auto-fit-auto-fill"></a> auto-fit and auto-fill

With the `auto-fill` expression inside the `grid-template-columns` declaration you can tell the browser "hmm I'm not sure how much columns I want just make each 150px wide for example and then fill it with as many columns as possible".

So `grid-template-columns: repeat(auto-fill, 150px);` does that.

The difference between `auto-fill` and `auto-fit` is visible when you have not enough items to fill the grid.

With `auto-fill` the grid will create es many columns as possible altough you don't have enough items. So if you have four items and there is space for six, the explicit grid ends after six items. In comparison to that `auto-fit` ends the grid when all available items are placed inside your grid.

In the CodePen example below open the firefox dev tools, enable the grid view in the layout window and you will see the difference between `auto-fit` and `auto-fill`.

<iframe height="228" style="width: 100%;" scrolling="no" title="CSS Grid - auto-fill &amp; auto-fit" src="https://codepen.io/Mkuehb/embed/preview/BrayPm?height=228&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/BrayPm'>CSS Grid - auto-fill &amp; auto-fit</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="minmax"></a> Using minmax for responsive grids

With `minmax()` you can tell the browser to make the items in a column a minimum width of `150px` and a maximum width of `1fr` for example. So the items will automatically adapt to the available space.

This is also a great way to create a responsive grid without media querries.

When the grid items have already the minimum width declared with `minmax()` and the browser window gets smaller, they will automatically jump into the next row.

The CodePen example below also shows the difference between `auto-fit` and `auto-fill` in combination with `minmax()`.

<iframe height="235" style="width: 100%;" scrolling="no" title="CSS Grid - Using minmax() for Responsive Layouts" src="https://codepen.io/Mkuehb/embed/preview/jzOPzg?height=235&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/jzOPzg'>CSS Grid - Using minmax() for Responsive Layouts</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="template-areas"></a> Grid template areas

Grid Template areas come in handy for building a whole layout of a page. Say you want to have two sidebars left and right and a content place between. Below you want to have the footer spanning over the whole row.

With grid template areas you can type on your grid parent into the `grid-template-areas` instruction exactly how you want the layout to look.

On the grid items, meaning the child items of the parent, you then tell each item with `grid-area` which part of the layout it sould be. That's it! Simple and easy full page layout.

The firefox dev tools also offer the possibility to display your grid area names so you can quickly check, if your layout is displayed as you wish it to be.

<iframe height="380" style="width: 100%;" scrolling="no" title="CSS Grid - Grid Template Areas" src="https://codepen.io/Mkuehb/embed/preview/GxRjdW?height=380&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/GxRjdW'>CSS Grid - Grid Template Areas</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="naming-lines"></a> Naming lines in CSS Grid

By default you declare to span your grid items over the columns and rows by using the line names 1,2,3 and so on. CSS Grid offers also the possibility to rename your line names on the `grid-template-columns` and `grid-template-rows` declaration on the parent.

So if your initial declaration for the columns and the rows on the grid container is like this:

```css
grid-template-columns: 1fr 500px 1fr
grid-template-rows: repeat(10, auto)
```

and you want to span an item inside the middle column from top to the tenth line you would say:

```css
grid-column: 2;
grid-row: 2/10;
```

By renaming your columns and rows you can now position your item inside this grid using the new line names.

```css
grid-template-columns:
  [site-left] 1fr [content-start] 500px [content-end] 1fr [site-right]
grid-template-rows:
  [content-top] repeat(10, auto) [content-bottom]
```

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS - Grid - Naming Lines in CSS Grid" src="https://codepen.io/Mkuehb/embed/preview/mxdQQN?height=300&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/mxdQQN'>CSS - Grid - Naming Lines in CSS Grid</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="block-fitting"></a> Grid-auto-flow dense block fitting

Grid-auto-flow is by default set to row so every item, that does not fit in the same row will automatically be put into a new row below. This can be helpful but also not really useful in a lot of cases.

If you have a grid with ten columns and you want every sixth item to span over six columns there will be a lot of empty space because the six column long item often can't fit in the same row and is put into the next row via `grid-auto-flow: row` and the space left over is not filled with other items.

In this cases the dense value comes to help. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow) describes this value as following:

Dense

> "is a keyword specifying that the auto-placement algorithm uses a 'dense' packing algorithm, which attempts to fill in holes earlier in the grid, if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items".

Go ahead and turn the `grid-auto-flow: dense` instruction on and off in the CodePen example below to see the difference.

<iframe height="446" style="width: 100%;" scrolling="no" title="CSS Grid - grid-auto-flow block formatting" src="https://codepen.io/Mkuehb/embed/preview/wmMKxY?height=446&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/wmMKxY'>CSS Grid - grid-auto-flow block formatting</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="alignment-and-centering"></a> CSS Grid alignment + centering

Flexbox made centering items on a page really easy. CSS Grid also has its ways to center items without problems.

There are two main properties which can be used for that. Justify-_ defines everything on the row axis and align-_ defines everything on the column axis.

With `justify-items` and `align-items` you can define the alignment for your grid items on the grid container. There is also a shorthand called `place-items` which you can give two values, the first for the justify-_ property and the second for the align-_ property.

If your grid items don't fill up your whole grid you can use `justify-content` and `align-content` to align them as one inside your grid container.

Finally with `justify-self` and `align-self` you can overwrite the alignment settings on the container and specify them on a single grid item.

<iframe height="265" style="width: 100%;" scrolling="no" title="CSS Grid - Alignment and Centering" src="https://codepen.io/Mkuehb/embed/preview/GxoqOy?height=265&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/GxoqOy'>CSS Grid - Alignment and Centering</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="re-ordering"></a> Re-ordering Grid items

Imagine having a ten column wide grid with a logo on the left that spans over 2 columns, a nav on the right that spans over 8 columns and a full width content below.

It is possible to change the order of the logo and the nav easily so that the logo will be on the right and the nav on the left.

By default every item has the value of 0 on the order property. So giving the nav `order: 0`, the logo `order: 1` and the content `order: 3` will achieve the re-ordering.

It is important to mention that this technique will goof up the order a screenreader will read it so it is kind of bad practice concerning accessibility if you use this on a bunch of paragraphs for example. But for a nav and a logo it does not matter that much.

<iframe height="238" style="width: 100%;" scrolling="no" title="CSS Grid - Re-ordering Grid items" src="https://codepen.io/Mkuehb/embed/preview/GxojJY?height=238&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/GxojJY'>CSS Grid - Re-ordering Grid items</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Real World Examples

### <a name="album-layouts"></a> Nesting Grid with album layouts

In this example you can see several album info boxes consisting of an image and a few details about the album. To achieve this layout, you have to define the columns on the main grid first, which contains every album info box.

With the following expression you can define a grid which has columns with a minimum width of `400px` and a maximum width of `1fr`.

```css
grid-template-columns: repeat(minmax(400px, 1fr));
```

So depending on the available space, the Grid will add columns or remove columns and shrink or expand them accordingly, which creates a fully flexible and responsive layout without media querries.

To achieve the layout inside the album info boxes it is important to know, that grid items can also be grid containers like we know it from flexbox already.

So you can add two columns into every album info box so the album image has a width of `150px` and the text takes all the remaining space. The vertical alignment is also possible.

```css
align-items: center;
display: grid;
grid-template-columns: 150px 1fr;
```

<iframe height="484" style="width: 100%;" scrolling="no" title="CSS Grid - Nesting grid with album layouts" src="https://codepen.io/Mkuehb/embed/preview/jzqXVo?height=484&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/jzqXVo'>CSS Grid - Nesting grid with album layouts</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="css-grid-image-gallery"></a> CSS Grid image gallery

The next example is about building an image gallery with CSS Grid. The basic grid for this consists of repeating columns and rows that are 100px wide and high. This example is extened with a little bit of JavaScript to give each image a different width and height.

Therefore you have to make an array with the length of 50. `Array.from` is pretty useful in this case. Every Item of this array is an array itself consisting of two random numbers between 1 and 4. This two values will describe the horizontal and vertical length of the image.

For every item of the digits array you then have to build the HTML which consists of the image, an overlay and a close button. By using ES6 destructuring you can insert the randomly generated numbers for the horizontal and vertical values and use them as CSS class names.

By doing that you will get 50 different images in the grid with a random row and column span between 1 and 4. Using the dense value on the `grid-auto-flow` property you can avoid having two many empty spots inbetween.

Another useful thing I learned here is, that by setting two grid items in the same row and column, they will overlap. Very practical for adding overlay elements.

### <a name="flexbox-vs-grid"></a> Flexbox vs. CSS Grid

In general CSS Grid can do everything Flexbox can do. Some people say that Flexbox is for laying out elements in one dimension and CSS Grid is for laying out elements in two dimensions.

In this example, Wes shows how things solved previously with flexbox can be done with CSS Grid and in what scenarios Flexbox is still the winner. You can find all the examples in the CodePen below.

<iframe height="381" style="width: 100%;" scrolling="no" title="Flexbox vs. CSS Grid " src="https://codepen.io/Mkuehb/embed/preview/wmoVjp?height=381&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/wmoVjp'>Flexbox vs. CSS Grid </a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="recreating-codepen"></a> Recreating CodePen

In this example you are recreating CodePen, the tool I have used to display all the examples before. CodePen is a development environment which allows you to write code in the browser and see the results immediately.

This example is a good practice to learn to layout different sections of a page with CSS Grid. Basically it is all about grids inside other grids.

<iframe height="265" style="width: 100%;" scrolling="no" title="CSS Grid - Recreating CodePen" src="https://codepen.io/Mkuehb/embed/preview/MVmwpZ?height=265&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/MVmwpZ'>CSS Grid - Recreating CodePen</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="bootstrappy-grid"></a> Bootstrappy Grid with CSS variables

Bootstrap became very popular for implementing an easy way to use a responsive grid on a website. It implemented CSS classes for the orientation of your elements, how they should behave on different viewports and how far they would span in your grid.

So a div with the class of col-sm-4 would span over 4 columns on a viewport that is equal to or greater than 768px wide.

In this example Wes shows how to achieve the Bootstrap principle with CSS Grid.

<iframe height="270" style="width: 100%;" scrolling="no" title="Bootstrappy Grid with CSS Variables" src="https://codepen.io/Mkuehb/embed/preview/RMVPdj?height=270&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/RMVPdj'>Bootstrappy Grid with CSS Variables</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="responsive-website"></a> Responsive Website

In this example Wes shows how to build a **whole responsive** website with **CSS Grid**. He devides the page into several sections and then uses almost every technique of CSS Grid learned in the course to layout the page.

Another thing Wes teaches here and I really liked is the usage of aria attributes on buttons. Instead of adding and removing a CSS class on the button, you can simply check the aria attributes value of the button and also use the aria attributes value for styling.

In this example the button to open the navigation menu has the aria attribute `aria-expanded="false"` which indicates by default that the menu is not expanded.

Additionally it has the aria attribute `aria-controls="menu-list"` which indicates, that the button controls the element with the class of menu-list which is in this case the navigation.

By changing the values of this attributes with JavaScript, you can toggle the menu easily.

<iframe height="427" style="width: 100%;" scrolling="no" title="CSS Grid - Responsive Website" src="https://codepen.io/Mkuehb/embed/preview/LdyMJa?height=427&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/LdyMJa'>CSS Grid - Responsive Website</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### <a name="blog-layout"></a> Full bleed blog layout

The last example is about building a blog layout with sections of different width and elements.

<iframe height="394" style="width: 100%;" scrolling="no" title="CSS Grid - Full bleed blog layout" src="https://codepen.io/Mkuehb/embed/preview/eMWwQd?height=394&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Mkuehb/pen/eMWwQd'>CSS Grid - Full bleed blog layout</a> by Marco Kühbauch
  (<a href='https://codepen.io/Mkuehb'>@Mkuehb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Sources & further reading

- [The CSS Grid course](https://cssgrid.io/) by Wes Bos
- [A complete guide for CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) by Chris Coyer
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) by the Mozilla Developer Network
- [A collection of examples, videos and other information](https://gridbyexample.com/) to learn CSS Grid by Rachel Andrew
- [Auto-Sizing Columns in CSS Grid: 'auto-fill' vs. 'auto-fit'](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/) by Sara Soueidan
- [Layout Land](https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag) a YouTube Channel by Jen Simmons all about CSS Grid
