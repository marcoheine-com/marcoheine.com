---
title: React - my learning journey
date: 2019-08-15
path: /react-learning-journey
---

In June of 2018 I started learning and working with [React](https://reactjs.org/). In this blog post I will share some things I learned in the beginning and came across or find worth noting.

I would be very happy if other beginners can learn something or find a place to start their React learning journey right here.

**Please note:** In web development a lot of things change really quickly, especially in the JavaScript and React scene. So it can be possible that some information in here is not that relevant anymore. But it was as of the time when my React learning journey started.

---

- [How does React work?](#how-does-react-work)
- [What is JSX?](#jsx)
- [React Components](#react-components)
- [What are Props?](#props)
- [What is State?](#state)
- [How does conditional rendering work in React?](#conditional-rendering)
- [How are events handled in React?](#events)
- [Controlled Components vs Uncontrolled Components](#controlled-vs-uncontrolled)
- [What are default props?](#defaults-props)
- [What are PropTypes?](#proptypes)
- [React Context](#context)
- [What are children?](#children)
- [What are higher-order-components](#hoc)
- [What is Redux?](#redux)

---

### <a name="how-does-react-work"></a> How does React work?

With React you can build **interactive** user interfaces, which get easily updated when the data changes. Dealing with data changes and DOM manipulation can be slow and unnecessary.

In React for every DOM object there is a **virtual** DOM object (like a lightweight copy). So React creates a virtual DOM. When state changes in a component it firstly runs a _"diffing"_ algorithm, which identifies what has changed in the virtual DOM. The second step is reconcilitation, where it updates the DOM with the results of diff.

- When a JSX element is rendered, every virtual DOM element is **updated**.
- React then compares the virtual DOM with a **snapshot** that was taken right before the update.
- By doing this, React figures out exactly which virtual DOM objects have **changed** (diffing)
- Then React **updates** only thos real DOM objects that have changed.

### <a name="jsx"></a> What is JSX?

JSX is a **syntax extension** for JavaScript and was written to be used in React to describe what the UI should look like. It is **not valid** JavaScript, Web browsers can't read it. It needs to be **compiled** (with Babel). Every HTML in a JavaScript file is called a JSX element.
JSX elements are like JS expressions, they can be:

- saved in a variable
- passed into a function
- stored in an array or an object

They can have attributes like HTML elements, they can be nested (if they take up more than one line they must be wrapped in paranthesis) andthey must have at least one outermost element. In JSX HTML class get replaced by className. JS in JSX in JS is possible by wrapping content in `{...}`

### <a name="react-components"></a> React Components

A React component is a small, **resuable** chunk of code, responsible for **one job** (e.g. render some HTML). The name of a component hast to start with a capital letter.

Components render other components (like a page renders a nav bar). To use a component from another file you need to import the file. You can also pass information to a component.

There are several ways to define a component. One is to use a JavaScript Function, another one is to use an ES6 class.

### <a name="props"></a> What are Props?

Props (short for properties) are a way of passing **data/information** from the parent to the child. Props are for **static** data and you can access the props with this.props. It is possible to declare default Props (for the case that no props are available).

A Component can not change their props. Props do not have to just be data. Callback functions my be passed in as props.

### <a name="state"></a> What is State?

State is data which is **changing over time**. State is reserved for **interactivity** and is **private** and fully controlled by a component. State can be updated asynchronously. A parent component can pass its state **down** to a child as props. As soon as the state changes a **rerender** is triggered.

### <a name="conditional-rendering"></a> How does conditional rendering in React work?

Conditional rendering in React works the same way as ins Vanilla JavaScript, so it is possible to use JS operators to create elements representing the current state and let React update the UI to match them. This means you can render only some items depending of the state of your application.

### <a name="events"></a> How are events handled in React?

To handle events in React, you have to add an event listener to an element. (difference to HTML: must be in lowerCamelCase e.g. onClick instead of onclick)

Event listeners are provided when the element is initially rendered, so there is no need to call `addEventListener`. The event listener gets passed in an event handler as props. Naming convention: start with handle, e.g. handleClick.

### <a name="controlled-vs-uncontrolled"></a> Controlled Components vs Uncontrolled Components

An input element whos value is controlled by React is called a **controlled component**. In HTML forms maintain their **own** state and update it based on user input. In React, mutable state is kept in the state property of the component.

These two combined make React the "single source of truth". Then the React component that renders a form also **controls** what happens in that form on subsequent user input, so you write an event handler for every state update.

The alternative to controlled components are **uncontrolled components**, where form data is handled by the DOM itself.

### <a name="default-props"></a> What are defaultProps?

It is possible to define **default values** for component props. They are defined as a **property** on the component.

This is useful when you don't get certain data, which you normally pass in props. Then you can fallback to the props, which you defined as the default.

### <a name="proptypes"></a> What are PropTypes?

With PropTypes you can check the **type** of a prop on a component. This means you can say you only accept a prop, when it has the type of a string. You can also flag props as **required** and set defaults as described above.

### <a name="context"></a> What is context?

Context provides a way to **share data** between components without having to pass props down manually at every level. This means, Context lets you pass a value deep into the component tree without explicitly threading it through every component.

But keep in mind, that Context should not be used only to avoid **props drilling**. The best use case for it is when a lot of components need to access the same prop.

Context ist defined with `React.createContext`. You have to use a **Provider** to pass the current context to the tree below. Then you have to use a **Consumer** to read the current context, React will find the closest Provider and use its value.

### <a name=""></a> What are children?

You can use children on components that represent generic boxes and don't know their children ahead of time. It is used to display whatever you include between the opening and closing tags when invoking a component.

### <a name="hoc"></a> What are higher-order-components?

A higher-order component is a **function** that takes a component and **returns** a **new component**. It is also a wrapper for the old component. It is not part of the React API per se.

### <a name="redux"></a> What is Redux?

Redux is an **advanced** topic and not part of React. It is an **additional** library which comes in handy for problems, React does not solve properly for some developers.

Redux give you a **global state container**, the store. So you have one global state for your whole application and every component can access and update it by using **actions** and **reducers**.

You can trigger an action inside of your component. The reducer always **listen** for specific actions and then talk to the **store** and return the updated state.

### Sources & Further Reading

React has one of the best documentations I have ever used. I regularly head over to there, to fresh up my knowledge. It is written very well and has a lot of useful examples in it.

- [The official React Docs](https://reactjs.org/docs/getting-started.html)
