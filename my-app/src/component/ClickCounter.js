import React, { Component } from "react";
import withCounter from "./withCounter";

export class ClickCounter extends Component {
  render() {
    const { count, incrementCount, name } = this.props;

    return (
      <div>
        <button onClick={incrementCount}>
          ClickCounter {count} {name}
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);
