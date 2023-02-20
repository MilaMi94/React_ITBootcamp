import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  changeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  submitHandler(e) {
    e.preventDefault();
    console.log("Server payload");
    console.log("_______________");
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log("I have updated!");
  }

  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)}>
        <p>Unesite vase ime:</p>
        <input
          type="text"
          name="name"
          onChange={this.changeHandler.bind(this)}
        ></input>

        <p>Unesite vase prezime:</p>
        <input
          type="text"
          name="lastname"
          onChange={this.changeHandler.bind(this)}
        ></input>

        <p>Unesite vas mail:</p>
        <input
          type="text"
          name="email"
          onChange={this.changeHandler.bind(this)}
        ></input>

        <p>Unesite vas password:</p>
        <input
          type="text"
          name="password"
          onChange={this.changeHandler.bind(this)}
        ></input>
        <br />

        <input type="submit" name="SUBMIT" value="Submit" />
      </form>
    );
  }
}

export default Form;
