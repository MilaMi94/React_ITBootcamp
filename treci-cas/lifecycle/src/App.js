import React, { Component } from "react";
import "./App.css";
import ComponentWillUnmount from "./components/ComponentWillUnmount";
import GetSnapshotBeforeUpdate from "./components/GetSnapshotBeforeUpdate";
// import ChildComponent from "./components/ChildComponent";
import ShouldComponentUpdate from "./components/ShouldComponentUpdate";

class App extends Component {
  constructor() {
    super(); // sve nase lifecycle metode mogu da pristupe onom this
    this.state = {
      name: "This name will change in 3 sec",
      show: true,
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
        {/* <p>{this.state.name}</p>
        <ChildComponent /> */}
        <ShouldComponentUpdate />
        <GetSnapshotBeforeUpdate />
        <br />
        <br />
        {this.state.show ? <ComponentWillUnmount /> : null}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          {this.state.show ? "Unmount Component" : "Mount Component"}
        </button>
      </div>
    );
  }
}

export default App;
