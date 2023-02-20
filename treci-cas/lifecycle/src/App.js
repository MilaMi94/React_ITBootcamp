import React, { Component } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";

class App extends Component {
  constructor() {
    super(); // sve nase lifecycle metode mogu da pristupe onom this
    this.state = {
      name: "This name will change in 3 sec",
    };
  }

  // componentDidMount() {
  //   // console.log("ComponentdidMount");
  //   setTimeout(() => {
  //     this.setState({ name: `This name was changed ${Math.random()}` });
  //   }, 3000);
  //   //usual purpose
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }

  render() {
    return (
      <div className="App">
        <p>{this.state.name}</p>
        <ChildComponent />
      </div>
    );
  }
}

export default App;
