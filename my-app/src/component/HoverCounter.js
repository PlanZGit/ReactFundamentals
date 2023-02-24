import React, { Component } from "react";
import withCounter from "./withCounter";

export class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <div onMouseOver={incrementCount}>HoverCounter {count}</div>;
  }
}

export default withCounter(HoverCounter, 10);
