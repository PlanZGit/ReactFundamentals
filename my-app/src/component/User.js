import React, { Component } from "react";

export class User extends Component {
  render() {
    return <div>User : {this.props.render(true)}</div>;
  }
}

export default User;
