# 🤔 What is ReactJS ?
🔹 ReactJS is a JavaScript library renowned for simplifying the creation of dynamic user interfaces. Its significance in 2024 stems from its foundational role in modern web development. React's virtual DOM optimizes rendering, enhancing performance crucial for today's demanding web applications. Its component-based architecture promotes modular and reusable code, facilitating collaborative development and scalability.

🔸 In 2024, React's ecosystem remains vibrant, with extensive documentation, libraries, and community support, accelerating development and innovation. Its state management solutions, such as Redux and Context API, streamline data handling in complex applications, ensuring maintainability and efficiency.

🔹 Moreover, React's support for server-side rendering enhances search engine optimization (SEO) and initial load times, aligning with the industry's emphasis on performance and accessibility.

🔸 Overall, React.js empowers developers to craft responsive, scalable applications efficiently, addressing the evolving needs of the digital landscape in 2024. Its widespread adoption and continuous evolution solidify its position as a cornerstone technology in modern web development.


## 🤔 What is Vite?
🔹 Vite is a modern build tool for web development, known for its fast development server and quick startup times.

🔸 It supports various frameworks like React, Vue, and others, offering a streamlined development experience with features like hot module replacement. Ideal for rapid prototyping and building performant web applications.

```sh
$ npm create vite@latest
```


## 🤔 What is Components?
🔹 React Components are the building block of React Application. They are the reusable code blocks containing logic and UI elements.

🔸 Components can be anything from a simple button or input field to complex elements like a navigation bar or a modal window.

🔹 Components in React follow a tree-like structure, where smaller components can be combined to build larger ones. This compositional nature makes React highly modular, promoting code reusability and maintainability.


## 🤔 What is Props?
🔸 Props is a special keyword in React that stands for properties and is used for passing data from one component to another.

🔹 Data with props are passed in a unidirectional flow from parent to child.

🔸 Props data is read-only, which means that data coming from the parent shouldn’t be changed by child components.


## 🤔 What is React List?
🔹 React's list component efficiently renders dynamic data arrays, updating the UI as needed. It simplifies managing dynamic content by mapping data to components, enhancing performance and scalability.

🔸 With React, developers can easily manipulate and update lists, creating responsive and modular user interfaces for web applications.

🔹 The JavaScript map() array method is generally the preferred method to traverse a list.


## 🤔 What is map()?
🔸 The map() method in JavaScript creates a new array by applying a function to each element of the original array.

🔹 It skips empty elements and does not alter the original array, making it ideal for transforming data.


## 🤔 What is keys in map()?
🔸 Keys are an important aspect of rendering lists in React. Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

🔹 Keys need to be unique to each sibling. But they can be duplicated globally.


## 🤔 What are React Hooks?
🔸 React Hooks revolutionized React development by allowing functional components to manage state and lifecycle methods. They eliminate the need for class components, simplifying code and making it more readable and maintainable.

🔹 With Hooks, developers can encapsulate logic and reuse it across components, promoting cleaner and more modular code. Hooks also enhance performance by reducing unnecessary re-renders. They enable developers to share logic between components easily, improving code organization and promoting best practices.

🔸 Overall, React Hooks significantly improves developer productivity, code quality, and scalability, making React development more efficient and enjoyable.


## 🤔 Explain React Hook rules?
There are 3 rules for react hooks:
- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional.


## 🤔 What is useState() Hook?
🔸 The `useState()` hook in React allows functional components to manage state. It returns a stateful value and a function to update it.

🔹 This hook simplifies state management by eliminating the need for class components, making it easier to handle component state within functional components.

### 🎯 useState() Syntax
```sh
import { useState } from "react";

function App() {
  const [state, setState] = useState("");
}
```


## 🤔 What is useEffect() Hook?
🔸 The `useEffect()` in ReactJS is used to handle the side effects such as fetching data and updating DOM.

🔹 This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering.

### 🎯 useEffect() Syntax
```sh
import { useEffect } from "react";

useEffect(() => {
        Side Effect code that want to run
    return () => {
        Optional Return Function -> Cleanup Function
    }
 }, []) // The Dependency Array
```

1. No Dependency Array
```sh
useEffect(() => {
  // Runs on every render
});
```

2. An Empty Dependency Array
```sh
useEffect(() => {
  // Runs only on the first render
}, []);
```

3. With Dependency Array
```sh
useEffect(() => {
  // Runs on the first render
  // And any time any dependency value changes
}, [prop, state]);
```

## 🤔 What is useRef() Hook?
🔸 The `useRef()` is a React Hook used to create a mutable reference that persists across renders. It returns a mutable object with a `.current` property, which can hold any value.

🔹 Unlike state, changing the `.current` property doesn't trigger a re-render.

🔸 It's commonly used to store and access values that need to persist between renders, such as accessing DOM elements imperatively, managing previous state values, or caching values across renders.

🔹 Additionally, it's useful for accessing and modifying values within event handlers or effects without triggering re-renders.

### 🎯 useRef() Syntax
```sh
import { useRef } from 'react';

function MyComponent() {
  const initialValue = 0;
  const reference = useRef(initialValue);

  const someHandler = () => {
    // Access reference value:
    const value = reference.current;

    // Update reference value:
    reference.current = newValue;
  };

  // ...
}
```


## 🤔 What is useContext() Hook?
🔸 The `useContext()` is a React Hook used to consume context provided by a `Context.Provider` component.

🔹 It allows functional components to access values from a context object without manually passing props down through each level of the component tree.

🔸 By calling `useContext(MyContext)`, it retrieves the current context value for `MyContext`.

🔹 When the context value updates, components using `useContext()` will re-render to reflect the most recent context value.

🔸 This simplifies state management and avoids prop drilling, making it easier to share data across components that need it.

### 🎯 useContext() Syntax
```sh
import { createContext } from "react";

const Context = createContext();

const Child = () => {
  return <div>This is the child component!</div>;
};

const App = () => {
  return (
    <Context.Provider>
      <Child />
    </Context.Provider>
  );
};
```

![Context](./my-app/src/assets/context.png)


## 🤔 What is useMemo() Hook?
🔹 The `useMemo()` is a React hook used for memoizing expensive calculations so they are not recomputed on every render. It takes a function and an array of dependencies.

🔸 When any dependency changes, the function re-runs, returning a cached result if dependencies haven't changed.

🔹 This optimization can improve performance by avoiding unnecessary recalculations, making it ideal for optimizing components that rely on computationally expensive logic or data processing.

### 🎯 useMemo() Syntax
```sh
import { useMemo } from "react";

function App()  {
  const memoizedResult = useMemo(
    () => // Expensive Calculation,
    [Dependency Array]
  );
  ...
}
```


## 🤔 What is useCallback() Hook?
🔸 The `useCallback()` is a React hook that memoizes a callback function, returning a memoized version that only changes if its dependencies change.

🔹 This optimization is useful for performance, preventing unnecessary re-renders of child components that rely on callback props.

🔸 It's particularly beneficial when passing callbacks to optimized child components or using in `useEffect()` to optimize event handlers or subscriptions.

🔹 Usage involves specifying dependencies in an array; changes in these dependencies trigger the creation of a new callback or reuse of the existing one. 

🔸 Thus, `useCallback()` enhances efficiency by maintaining stable references to functions across renders, improving overall application performance.

### 🎯 useCallback() Syntax
```sh
import { useCallback } from "react";

const memoizedCallback = useCallback(() => {
    // Doing some calculations
  }, [Dependency Array]
);
```


## 🤔 What is Conditional Rendering?
🔹 React allows us to conditionally render components which means that the developer can decide which component to render on the screen on on the basis of some predefined conditions. This is known as conditional rendering.


#### Conditional rendering in React can be implemented in three ways:
- By `If Else Statement`
- By `Logical && Operator`
- By `Ternary Operator`


##  🤔 Explain Event Handling in React JS?
🔸 An event is an action or occurrence recognized by software or a program that can be responded to or handled by the system.

🔹 In the context of React, events refer to the actions performed by a user or a program that triggers a response in a React component.

🔸 Event handling in React involves attaching event listeners to DOM elements and invoking callback functions when events (such as clicks or keystrokes) occur.

🔹 Handlers are typically defined as methods within React components and passed to elements using JSX. Event objects (`e`) are passed to handlers, allowing access to event details.

🔸 React efficiently manages event delegation and synthetic events, enhancing performance and simplifying cross-browser compatibility for web applications.


## 🤔 What is React Router?
🔹 React Router is a library for routing in React applications, enabling navigation between different views/components. It allows defining routes with components to render based on the URL.

🔸 It manages URL updates, supports nested routes, and facilitates dynamic routing with params. React Router ensures a smooth, SPA-like user experience by synchronizing UI with URL changes, making it essential for single-page applications (SPAs) built with React.

```sh
$ npm install react-router-dom
```


## 🤔 What is React Hook Form?
🔹 React Hook Form is a library that helps you validate forms in React. It is a minimal library without any other dependencies, while being performant and straightforward to use, requiring developers to write fewer lines of code than other form libraries.

🔸 React Hook Form takes a slightly different approach than other form libraries in the React ecosystem by adopting the use of uncontrolled inputs using `ref` instead of depending on the state to control the inputs. This approach makes the forms more performant and reduces the number of re-renders.

🔹 The package size is tiny and it has zero dependencies. The API is very intuitive, which provides a seamless experience to developers. React Hook Form follows HTML standards for validating the forms using a constraint-based validation API.

🔸 Another great feature offered by React Hook Form is its painless integration with UI libraries because most libraries support the `ref` attribute.

```sh
$ npm install react-hook-form
```


## 🤔 What is Redux?
🔹 Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, and are easy to test.

🔸 While it’s mostly used as a state management tool with React, you can use Redux with any other JavaScript framework or library. It’s lightweight at 2KB (including dependencies), so you don’t have to worry about it making your application’s asset size bigger.

🔹 With Redux, the state of your application is kept in a store, and each component can access any state that it needs from this store. 

```sh
$ npm install @reduxjs/toolkit react-redux
```


## 🤔 What is Redux used for?
🔸 Redux is used to maintain and update data across your applications for multiple components to share, all while remaining independent of the components.

🔹 In a large application, there is a need to store the state at a central location and share it among the different components. That is where the Redux store comes into the picture.

🔸 If the data needs to be passed from a parent to a child deep down the tree, this can still be accomplished using React utilities like Context. But when it comes to sharing the state between components on the same level, Redux is the inevitable option.


## 🤔 Redux Terminologies
🔹 Action - Redux actions are events. They are the only way you can send data from your application to your Redux store. The data can be from user interactions, API calls, or even form submissions.

Actions are plain JavaScript objects that must have:
- A `type` property to indicate the type of action to be carried out. This is a mandatory field.
- A `payload` object that contains the information that should be used to change the state.

Actions are created via an action creator, which is a function that returns an action.

🔸 Dispatcher - It is Redux store function that is used to dispatch the actions. The only way to send actions is via the dispatcher function.

🔹 Reducers - It is pure functions that take the current state of an application, perform an action, and return a new state. The reducer handles how the state (application data) will change in response to an action.

- _A `pure function` is a function that will always return the same value if given the same parameters, i.e., the function depends on only the parameters and no external data._

- Reducers are based on the reduce function in JavaScript, where a single value is calculated from multiple values after a callback function has been carried out.

- _Reducers take the previous state of the app and return a new state based on the action passed to it. As pure functions, they do not change the data in the object passed to them or perform any side effect in the application. Given the same object, they should always produce the same result._

🔸 Store - The store is a “container” (really, a JavaScript object) that holds the application state, and the only way the state can change is through actions dispatched to the store. Redux allows individual components to connect to the store.

🔹 Selector - The state of an app can be complex. We might not need entire state every time. We might need to access only a certain part of the state. Selector is a function which helps us to extract the exact value we need from the state.