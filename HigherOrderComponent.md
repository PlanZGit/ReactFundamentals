# Higher Order Components

## What ?

The HOC pattern is to share common funcitionality between components

## Why ?

Duplicating code instead of reusing

_CilckCounter.js_

    increment count by button

_HoverCounter.js_

    increament count by hover

## How?

Higher Order Components - HOC

- A pattern where a function takes a component as an argument and returns a new comoponent.

      const NewComponent = higherOrderComponent( originalComponent )
      const EnchancedComponent - higherOrderComponent( originalComponent )

      const IronMan = withSuit( TonyStark )

Steps :

1. The UpdatedComponent is a function which accepts a component or original component as its parameter and returns a enchanced new component.

2. The NewComponent has the functionality to maintain the state property and methods to increment that current property. Both of them are pass as props to the original component.

3. The OriginalComponent enchanced with these props are then returned.

4. The controls then goes back to click counter and hover counter where the props are destructure and used in the return statement.

5. The HOC is maintaining the state and incrementing it.

6. The components received separate state, incrementing in click counter will not affect hover counter.

HOC _withCounter.js_ :

    // withCounter.js
    import React from "react";

    const UpdatedComponent = (OriginalComponent) => {
    	class NewComponent extends React.Component {
    		render() {
    			return <OriginalComponent name="Vishwas" />;
    		}
    	}
    	return NewComponent;
    };

    export default UpdatedComponent;

By removing the unnecessary code from the two counter and puting it in _withCounter.js_ we now have a HOC for counter.

Configured HOC :

    // withCounter.js
    import React from "react";

    const UpdatedComponent = (OriginalComponent) => {
    	class NewComponent extends React.Component {
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
    				<OriginalComponent
    					count={this.state.count}
    					incrementCount={this.incrementCount}
    				/>
    			);
    		}
    	}
    	return NewComponent;
    };

    export default UpdatedComponent;

Configured code for ClickCounter and HoverCounter. Remember to destructure props:

_ClickCounter.js_

    import React, { Component } from "react";
    import UpdatedComponent from "./withCounter";

    export class ClickCounter extends Component {
    	render() {
    		const { count, incrementCount } = this.props;

    		return (
    			<div>
    				<button onClick={incrementCount}>ClickCounter {count}</button>
    			</div>
    		);
    	}
    }

    export default UpdatedComponent(ClickCounter);

_HoverCounter.js_

    import React, { Component } from "react";
    import UpdatedComponent from "./withCounter";

    export class HoverCounter extends Component {
    	render() {
    		const { count, incrementCount } = this.props;
    		return <div onMouseOver={incrementCount}>HoverCounter {count}</div>;
    	}
    }

    export default UpdatedComponent(HoverCounter);

## Problems

Proplem 1 : Passing in props will be passed into the HOC withCounter.js instead of the ClickCounter.js

    <ClickCounter name="XXXX" />

Solution : The HOC has to pas the rest of the props

    render() {
    	console.log(this.props.name);
    	return (
    		<WrappedComponent
    			count={this.state.count}
    			incrementCount={this.incrementCount}
    			{...this.props}
    		/>
    	);
    }

Problem 2 : When wanting to increment the value by different numbers.

    incrementCount = () => {
    	this.setState((prevState) => {
    		return { count: prevState.count + 1 };
    	});
    };

Solution : Passing in a parametor into the HOC function

    const withCounter = (WrappedComponent, incrementNumber = 1) => {
    // ....
    		incrementCount = () => {
    			this.setState((prevState) => {
    				return { count: prevState.count + incrementNumber };
    			});
    		};
    // ....
    }

    //Pass in the number we want to increment by

    export default withCounter(ClickCounter, 5);
    export default withCounter(HoverCounter, 10);

# Find HOC in

- connect HOC in redux
- router in react router
- styles in material UI

and so on.....
