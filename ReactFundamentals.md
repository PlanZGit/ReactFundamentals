# React Fundamentals

React 16.5.2

Read [ReactFundamentals.md](./ReactFundamentals.md) for more detail

Check out [ReactHook](https://github.com/PlanZGit/ReactHook) version 16.8

# Installation

    npx create-react-app project_name

# Subjects

Skipped information.

1.  Functional Components, Class Components
2.  JSX, Props, State, setState, Destructiong props and state
3.  (Class Components) Event Handling, Binding Event Handlers, Methods as props
4.  Conditional Rendering: Read [ConditionRender.md](./CondtionRender.md)

    - if/else
    - Element variables
    - Ternary conditional operator (use)
    - Short circuit operator (use)

5.  List and keys

## Destructiong props and state

    _App.js_
        <ComponentA John Smith />

    _ComponentA.js_
        const ComponentA = ({firstName, lastName}) => {
          return <h1>{lastName}</h1>
        }
    Output: Smith

## JSX

1. JavaScript XML (JSX) - Extension to the JavaScript language syntax
2. Write XML - like code for elements and components

WIth JSX :

    function Greeting({ name }) {
      return (
        <h1 className="greeting">
          Hello <i>{name}</i>. Welcome!
        </h1>
      );
    }

Without JSX :

    import { createElement } from 'react';

    function Greeting({ name }) {
      return createElement(
        'h1',
        { className: 'greeting' },
        'Hello ',
        createElement('i', null, name),
        '. Welcome!'
      );
    }

## Lifecycle Methods

Mounting means putting elements into the DOM. <br>
React has four built-in methods that gets called, in this order, when mounting a component: <br>
ComponentDidMount:

1. constructor()
2. getDerivedStateFromProps()
3. render()
4. componentDidMount()

Order of execution of nested component:

    Class component
    Parent: ComponentA
    Child: ComponentB

    ComponentA constructor
    ComponentA getDerivedstateFromProps
    ComponentA render
    ComponentB constructor
    ComponentB getDerivedstateFromProps
    ComponentB render
    ComponentB componentDidMount
    ComponentA componentDidMount
