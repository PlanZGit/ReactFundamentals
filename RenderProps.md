# Render Props

Render Props - refers to a technique for **sharing code** between React components using a **prop whose value is a function**.

Render props pattern : use a prop whose valuse is a function to control what is actually rendered by a component.

## Prop whose value is a function :

_App.js_

    <User render={(isLoggedIn) => (isLoggedIn ? "Vishwas" : "Guest")} />

_User.js_

    return <div>{this.props.render(false)}</div>;

Output : Guest

## Sharing code :

Not working ....

_App.js_

    <Counter
      render={(count, incrementCount) => {
        <ClickCounterTwo count={count} incrementCount={incrementCount} />;
      }}
    />
    <Counter
      render={(count, incrementCount) => {
        <HoverCounterTwo count={count} incrementCount={incrementCount} />;
      }}
    />

_Counter.js_

    import React, { Component } from "react";

    class Counter extends Component {
      constructor(props) {
        super(props);

        this.state = {
          count: 0,
        };
      }

      incrementCount = () => {
        this.setState((prevState) => {
          return { count: prevState.count + 1 };
        });
      };

      render() {
        return (
          <div>{this.props.render(this.state.count, this.incrementCount)}</div>
        );
      }
    }

    export default Counter;
