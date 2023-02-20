import React, { Component } from "react";

class Input extends Component {
  state = {
    name: "",
    age: "",
    errorMsg: "",
  };

  handleChange = (event) => {
    const nameIzTargeta = event.target.name;
    const valueIzTargeta = event.target.value;
    console.log("nameIzTargeta", nameIzTargeta);
    console.log("valueIzTargeta", valueIzTargeta);

    this.setState({ [nameIzTargeta]: valueIzTargeta });

    let errorMsg = "";
    if (nameIzTargeta === "age") {
      if (valueIzTargeta !== "" && !Number(valueIzTargeta)) {
        errorMsg = "You must enter number!";
      }
    }
    this.setState({ errorMsg: errorMsg });
  };

  render() {
    return (
      <form>
        <h1>Hello {this.state.name}</h1>
        <p>Your age is {this.state.age}</p>

        <p> Enter your name:</p>
        <input type="text" name="name" onChange={this.handleChange} />

        <p>Enter your age:</p>
        <input type="text" name="age" onChange={this.handleChange} />
        <br />
        <strong style={{ color: "red" }}>{this.state.errorMsg}</strong>
      </form>
    );
  }
}

export default Input;
