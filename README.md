# React Fundamentals

Read React 16.5.2 [introduction](./Introduction.md) for more detail

Check out [ReactHook](https://github.com/PlanZGit/ReactHook) version 16.8

## React 16.5.2

Old Information :

1. Functional Components, Class Components
2. Props, State, setState,
3. (Class Components) Event Handling, Binding Event Handlers, Methods as props
4. Conditional Rendering: Read [ConditionRender.md](./CondtionRender.md)

Missed information :

1. Destructiong props and state
2. JSX : https://beta.reactjs.org/reference/react/createElement
3. List and keys Read : [ListAndKey.md](./ListAndKey.md)

New Information:

1. Lifecycle Methods - [LifeCycleMethods.md](./LifeCycleMethods.md)
2. React fragment - let us group children elements without adding any extra node in DOM
3. Pure Components, memo
4. Refs
5. Portals - Use for a modal, pop-up, tooltip
6. Error Boundary - A class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componenDidCatch becomes an eror boundary.
7. Higher Order Components - [HigherOrderComponent.md](./HigherOrderComponent.md)
8. Render Props -

# Notes

## Destructiong props and state

    _App.js_
        <ComponentA John Smith />

    _ComponentA.js_
        const ComponentA = ({firstName, lastName}) => {
          return <h1>{lastName}</h1>
        }
    Output: Smith

## Portals

Use for a modal, pop-up, tooltip

_PortalDemo.js_

    import React from "react";
    import ReactDom from "react-dom";

    function PortalDemo() {
    return ReactDom.createPortal(
        <h1>PortalDemo</h1>,
        document.getElementById("portal-root")
    );
    }

    export default PortalDemo;
