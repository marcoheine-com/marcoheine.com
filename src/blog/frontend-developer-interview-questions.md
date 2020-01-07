---
title: Frontend Developer Interview Questions HTML
date: 2018-02-28
path: /frontend-developer-interview-questions-html
---

In this blog post I answered the **HTML Questions** from the Frontend Developer Interview Questions. This is a GitHub repo which contains helpful lists of frontend related questions to test yourself or extend your knowledge.

---

1. [What does a DOCTYPE do?](#doctype)
2. [How do you serve a page with content in multiple languages?](#lng)
3. [What kind of things must you be wary of when design or developing for multilingual sites?](#multilingual)
4. [What are data- attributes good for?](#data-attributes)
5. [Consider HTML5 as an open web platform. What are the building blocks of HTML5?](#html5)
6. [Describe the difference between a cookie, sessionStorage and localStorage](#storage)
7. [Describe the difference between script, script async and script defer](#scripts)
8. [Why is it generally a good idea to position CSS links between head and JS scripts just before the body ends? Do you know any exceptions?](#link-and-script-positioning)
9. [Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.](#srcset)

---

### <a name="doctype"></a> What does a DOCTYPE do?

The doctype makes sure the document gets parsed the same way by different browsers. It prevents the browser from switching into ["quirks-mode"](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) when rendering a document.

### <a name="lng"></a>How do you serve a page with content in multiple languages?

By using the lang attribute on the html element `lang="en"`.

### <a name="multilingual"></a>What kind of things must you be wary of when design or developing for multilingual sites?

You have to enable an easy way for users to change their language. There is also the possibility that people from different countries need different content.

### <a name="data-attributes"></a>What are data- attributes good for?

`data-` attributes ca be used to store extra information on standard, semantic HTML elements without using non-standard attributes.

### <a name="html5"></a>Consider HTML5 as an open web platform. What are the building blocks of HTML5?

MDN lists several groups which form the building blocks of HTML5 and contain many different technologies:

- **Semantics:** allowing you to describe more precisely what your content is
- **Connectivity:** allowing you to communicate with the server in new and innovative ways
- **Offline and storage:** allowing webpages to store data on the client-side locally and operate offline more efficiently
- **Multimedia:** making video and audio first-class citizens in the Open Web
- **2D/3D graphics and effects:** allowing much more diverse range of presentation options
- **Performance and Integration:** providing greater speed optimization and better usage of computer hardware
- **Device access:** allowing for the usage of various input and output devices
- **Styling:** letting authors write more sophisticated themes

### <a name="storage"></a>Describe the difference between a cookie, sessionStorage and localStorage.

When using a **Cookie**, data is sent to the server and is primarly for server-side reading (but can also be read on the client side). The size must be less than 4KB.

When using **sessionStorage**, the data is stored in the browser and can only be read on the clientside. The stored data is only available for one session, so when the browser tab gets closed, the data gets deleted. The storage limit is larger than a Cookie (at least 5MB).

When using **localStorage**, the data gets also stored in the browser and can only be read on the clientside. But it has no expiration date and the storage limit is the maximum of the three.

### <a name="scripts"></a>Describe the difference between script, script async and script defer.

The regular `script` tag is used to embed or reference executable code and is typically used to embed or refer to JavaScript code. When the browser comes during the HTML parsing by a script tag it stops the rendering and executes the JavaScript tag.

Using the script async tag will not block the rendering, but will run the script as soon as it is downloaded and available.

The script defer tag will defer the script and run it after the page is done parsing.

### <a name="link-and-script-positioning"></a> Why is it generally a good idea to position CSS links between head and JS scripts just before the body ends? Do you know any exceptions?

The CSS link has to be positioned in the head so it is downloaded and the styling is available as fast as possible. If the css link is positioned inside the body it is possible that the page is displayed without CSS for a short periode of time. This is called FOUC (Flash of unstyled content).

It is also a good idea to put the JS script before the closing body tag. If you put the JS script tag in the head or before the actual HTML content in the body, the browser will stop the rendering and first download all the JS.

So it could be the case that the web page is only half visible for a short periode of time because the rendering is blocked to download the JavaScript first.

### <a name="srcset"></a> Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.

The `srcset` attribute is used to provide the same image in different versions, depending on the viewport. So you can display the image with different width and quality for mobile and different width and quality for desktop.

With the srcset attribute you will allow the browser to choose between, and what size each image is. First you have to insert the file name, a space followed by the image's inherent width in pixels.

The additional attribute sizes adds a set of media queries and tells the browser what image size to choose when certain conditions are true. The sizes attribute contains the media condition (max-width: 680px), a space, followed by the width of the slot the image will fill when the media condition is true.

### Sources & Further Reading

- [Definition of the DOCTYPE in the HTML specification](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)
- [The HTML lang attritube](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
- [The data- attribute](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
- [The building blocks of HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [Cookies vs. sessionStorage vs. localStorage](https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies)
- [The Script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
- [Render-blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)
- [Optimize CSS Delivery](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery)
- [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
