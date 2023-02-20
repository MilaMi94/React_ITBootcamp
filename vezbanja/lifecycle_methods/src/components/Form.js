import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      gender: "male",
      passwordValidation: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Forma je submitovana!");
  };

  handleChange = (e) => {
    const input = e.target;
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
    //name
    if (name === "name") {
      if (value.length < 3 || value.length > 20) {
        input.setCustomValidity(
          "Name must have more than 2 characters and less then 20!!"
        );
      } else {
        input.setCustomValidity("");
      }
    }
    //lastname
    if (name === "lastname") {
      if (value.length < 3 || value.length > 20) {
        input.setCustomValidity(
          "Lastname must have more than 2 characters and less then 20!!"
        );
      } else {
        input.setCustomValidity("");
      }
    }
    //password
    let strongPassword = new RegExp(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );
    let mediumPassword = new RegExp(
      "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
    );
    if (name === "password") {
      if (strongPassword.test(value)) {
        input.style.backgroundColor = "green";
        this.setState({ passwordValidation: "Strong password" });
      } else if (mediumPassword.test(value)) {
        input.style.backgroundColor = "blue";
        this.setState({ passwordValidation: "Medium password" });
      } else {
        input.style.backgroundColor = "red";
        this.setState({ passwordValidation: "Weak password" });
      }
    }
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Name:</h1>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z]+$"
          onChange={this.handleChange}
          required
        />

        <h1>Last name:</h1>
        <input
          type="text"
          name="lastname"
          pattern="^[a-zA-Z]+$"
          onChange={this.handleChange}
          required
        />

        <h1>E-mail address:</h1>
        <input
          type="email"
          name="email"
          onChange={this.handleChange}
          required
        />

        <h1>Password:</h1>
        <input
          type="password"
          name="password"
          onChange={this.handleChange}
          required
        />
        <strong style={{ color: "red" }}>
          {this.state.passwordValidation}
        </strong>

        <h1>Gender:</h1>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="male"
          defaultChecked
          onChange={this.handleChange}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
