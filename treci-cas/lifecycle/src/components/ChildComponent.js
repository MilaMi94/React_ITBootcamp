import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "nas naslov: shouldComponentUpdate method",
    };
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    setTimeout(() => {
      this.setState({ name: "ComponentDidMount method" });
    }, 3000);
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    return (
      <div>
        <p>This is a {this.state.name}</p>
      </div>
    );
  }
}
