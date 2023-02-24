import React, { Component } from "react";

export class HoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <div onMouseOver={incrementCount}>HoverCounter {count}</div>;
  }
}

export default HoverCounterTwo;
